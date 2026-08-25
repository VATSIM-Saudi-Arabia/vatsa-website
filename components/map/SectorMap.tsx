"use client";

import { useEffect, useRef } from "react";
import { VIEW, makeProjector, lerpRect, easeInOut, type Rect } from "./mapGeo";
import geo from "./saudiGeo.json";
import airportData from "./saudiAirports.json";
import scope from "./citiesScope.json";

export type Aircraft = {
    callsign?: string;
    lat: number;
    lon: number;
    hdg?: number;
    gs?: number;
    alt?: number;
};

const GREEN = "22, 163, 74";
const GREEN_BRIGHT = "74, 222, 128";
const COAST = "120, 150, 190";

const TRANSITION_MS = 1800;

type ScopeKey = "OEJN" | "OERK";
type Step = { name: string; scope: ScopeKey | null; hold: number };
const STEPS: Step[] = [
    { name: "JEDDAH FIR · OEJD", scope: null, hold: 30000 },
    { name: "JEDDAH · OEJN", scope: "OEJN", hold: 15000 },
    { name: "RIYADH · OERK", scope: "OERK", hold: 15000 },
];

function padRect(bb: Rect, f = 0.1): Rect {
    const la = (bb.latMax - bb.latMin) * f;
    const lo = (bb.lonMax - bb.lonMin) * f;
    return { latMin: bb.latMin - la, latMax: bb.latMax + la, lonMin: bb.lonMin - lo, lonMax: bb.lonMax + lo };
}

function rectForStep(step: Step): Rect {
    if (!step.scope) return VIEW;
    return padRect(scope[step.scope].bbox as Rect);
}

export default function SectorMap({
    aircraft = [],
    onViewChange,
}: {
    aircraft?: Aircraft[];
    onViewChange?: (name: string) => void;
}) {
    const canvasRef = useRef<HTMLCanvasElement | null>(null);
    const wrapRef = useRef<HTMLDivElement | null>(null);
    const acRef = useRef<Aircraft[]>(aircraft);
    const viewCbRef = useRef(onViewChange);
    const sizeRef = useRef({ w: 0, h: 0 });

    useEffect(() => {
        acRef.current = aircraft;
    }, [aircraft]);
    useEffect(() => {
        viewCbRef.current = onViewChange;
    }, [onViewChange]);

    useEffect(() => {
        const canvas = canvasRef.current;
        const wrap = wrapRef.current;
        if (!canvas || !wrap) return;
        const ctx = canvas.getContext("2d");
        if (!ctx) return;
        let dpr = 1;
        const font = (px: number) => `${px}px "Ubuntu", "Segoe UI", sans-serif`;

        let stepIdx = 0;
        let camera: Rect = VIEW;
        let phase: "hold" | "transition" = "hold";
        let phaseStart = performance.now();
        let fromRect: Rect = VIEW;
        let toRect: Rect = VIEW;
        let announced = -1;

        const resize = () => {
            const rect = wrap.getBoundingClientRect();
            const w = Math.max(280, rect.width);
            const h = Math.max(220, rect.height);
            dpr = Math.min(window.devicePixelRatio || 1, 2);
            canvas.width = w * dpr;
            canvas.height = h * dpr;
            canvas.style.width = `${w}px`;
            canvas.style.height = `${h}px`;
            ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
            sizeRef.current = { w, h };
            if (phase === "hold") camera = rectForStep(STEPS[stepIdx]);
        };

        const drawScene = (now: number) => {
            const { w, h } = sizeRef.current;
            const project = makeProjector(camera, w, h);
            ctx.clearRect(0, 0, w, h);

            ctx.strokeStyle = `rgba(${COAST}, 0.45)`;
            ctx.lineWidth = 1.1;
            (geo.coastlines as [number, number][][]).forEach((seg) => {
                ctx.beginPath();
                seg.forEach(([lat, lon], i) => {
                    const [x, y] = project(lat, lon);
                    if (i === 0) ctx.moveTo(x, y);
                    else ctx.lineTo(x, y);
                });
                ctx.stroke();
            });

            (geo.fir as [number, number][][]).forEach((ring) => {
                ctx.beginPath();
                ring.forEach(([lat, lon], i) => {
                    const [x, y] = project(lat, lon);
                    if (i === 0) ctx.moveTo(x, y);
                    else ctx.lineTo(x, y);
                });
                ctx.closePath();
                ctx.fillStyle = `rgba(${GREEN}, 0.04)`;
                ctx.fill();
                ctx.strokeStyle = `rgba(${GREEN}, 0.5)`;
                ctx.lineWidth = 1.2;
                ctx.stroke();
            });

            const placed: { x: number; y: number; w: number; h: number }[] = [];
            const overlaps = (bx: { x: number; y: number; w: number; h: number }) =>
                placed.some((p) => bx.x < p.x + p.w && bx.x + bx.w > p.x && bx.y < p.y + p.h && bx.y + bx.h > p.y);
            const airports = [...airportData.airports].sort((a, b) => Number(b.big) - Number(a.big));
            ctx.font = font(9);
            airports.forEach((a) => {
                const [x, y] = project(a.c[0], a.c[1]);
                if (x < 0 || x > w || y < 0 || y > h) return;
                ctx.fillStyle = a.big ? `rgba(${GREEN_BRIGHT}, 0.85)` : `rgba(${GREEN}, 0.6)`;
                ctx.beginPath();
                ctx.arc(x, y, a.big ? 2.4 : 1.6, 0, Math.PI * 2);
                ctx.fill();
                if (a.big) {
                    ctx.strokeStyle = `rgba(${GREEN_BRIGHT}, 0.4)`;
                    ctx.lineWidth = 1;
                    ctx.beginPath();
                    ctx.arc(x, y, 5, 0, Math.PI * 2);
                    ctx.stroke();
                }
                const bx = { x: x + 4, y: y - 9, w: a.icao.length * 5.6 + 2, h: 10 };
                if (!overlaps(bx)) {
                    placed.push(bx);
                    ctx.fillStyle = a.big ? "rgba(190, 240, 205, 0.85)" : "rgba(150, 200, 165, 0.6)";
                    ctx.fillText(a.icao, x + 5, y - 1);
                }
            });

            const span = camera.latMax - camera.latMin;
            const zoomA = Math.max(0, Math.min(1, (9 - span) / 3));
            if (zoomA > 0.02) {
                const cities: ScopeKey[] = ["OEJN", "OERK"];
                type Layer = "struct" | "ecl" | "mrva" | "star" | "sid";
                const strokeLayer = (layer: Layer, alpha: number, width: number) => {
                    ctx.strokeStyle = `rgba(${GREEN_BRIGHT}, ${alpha * zoomA})`;
                    ctx.lineWidth = width;
                    ctx.beginPath();
                    cities.forEach((city) => {
                        (scope[city][layer] as [number, number][][]).forEach((s) => {
                            const [x1, y1] = project(s[0][0], s[0][1]);
                            const [x2, y2] = project(s[1][0], s[1][1]);
                            if (
                                (x1 < -40 && x2 < -40) ||
                                (x1 > w + 40 && x2 > w + 40) ||
                                (y1 < -40 && y2 < -40) ||
                                (y1 > h + 40 && y2 > h + 40)
                            )
                                return;
                            ctx.moveTo(x1, y1);
                            ctx.lineTo(x2, y2);
                        });
                    });
                    ctx.stroke();
                };
                strokeLayer("mrva", 0.14, 0.6);
                strokeLayer("sid", 0.22, 0.8);
                strokeLayer("star", 0.32, 0.8);
                strokeLayer("ecl", 0.28, 0.8);
                strokeLayer("struct", 0.5, 1);
            }

            const pulse = 0.6 + 0.4 * Math.sin(now / 500);
            acRef.current.forEach((p) => {
                if (typeof p.lat !== "number") return;
                const [x, y] = project(p.lat, p.lon);
                if (x < -20 || x > w + 20 || y < -20 || y > h + 20) return;

                if (typeof p.hdg === "number" && (p.gs ?? 0) > 40) {
                    const hb = (p.hdg * Math.PI) / 180;
                    ctx.beginPath();
                    ctx.moveTo(x, y);
                    ctx.lineTo(x + 13 * Math.sin(hb), y - 13 * Math.cos(hb));
                    ctx.strokeStyle = `rgba(${GREEN_BRIGHT}, 0.45)`;
                    ctx.lineWidth = 1;
                    ctx.stroke();
                }

                ctx.save();
                ctx.translate(x, y);
                ctx.rotate(((p.hdg || 0) * Math.PI) / 180);
                ctx.beginPath();
                ctx.moveTo(0, -4);
                ctx.lineTo(3, 3);
                ctx.lineTo(0, 1.4);
                ctx.lineTo(-3, 3);
                ctx.closePath();
                ctx.fillStyle = `rgba(${GREEN_BRIGHT}, ${0.85 * pulse + 0.15})`;
                ctx.shadowColor = `rgba(${GREEN_BRIGHT}, 0.9)`;
                ctx.shadowBlur = 6;
                ctx.fill();
                ctx.restore();
                ctx.shadowBlur = 0;

                if (p.callsign) {
                    const bx = { x: x + 5, y: y - 14, w: p.callsign.length * 5.4 + 4, h: 18 };
                    if (!overlaps(bx)) {
                        placed.push(bx);
                        ctx.fillStyle = "rgba(200, 245, 212, 0.95)";
                        ctx.font = font(9);
                        ctx.fillText(p.callsign, x + 6, y - 6);
                        ctx.fillStyle = `rgba(${GREEN_BRIGHT}, 0.6)`;
                        ctx.font = font(8);
                        const fl = p.alt ? `FL${String(Math.round(p.alt / 100)).padStart(3, "0")}` : "";
                        ctx.fillText(fl, x + 6, y + 2);
                    }
                }
            });
        };

        resize();
        const ro = new ResizeObserver(resize);
        ro.observe(wrap);

        let raf = 0;
        let running = true;

        const tick = (now: number) => {
            if (announced !== stepIdx) {
                announced = stepIdx;
                viewCbRef.current?.(STEPS[stepIdx].name);
            }

            if (phase === "hold") {
                if (now - phaseStart >= STEPS[stepIdx].hold) {
                    const next = (stepIdx + 1) % STEPS.length;
                    fromRect = rectForStep(STEPS[stepIdx]);
                    toRect = rectForStep(STEPS[next]);
                    stepIdx = next;
                    phase = "transition";
                    phaseStart = now;
                }
            } else {
                const t = Math.min(1, (now - phaseStart) / TRANSITION_MS);
                camera = lerpRect(fromRect, toRect, easeInOut(t));
                if (t >= 1) {
                    camera = toRect;
                    phase = "hold";
                    phaseStart = now;
                    announced = -1;
                }
            }

            drawScene(now);
            if (running) raf = requestAnimationFrame(tick);
        };
        raf = requestAnimationFrame(tick);

        const onVis = () => {
            if (document.hidden) {
                running = false;
                cancelAnimationFrame(raf);
            } else {
                resize();
                if (!running) {
                    running = true;
                    raf = requestAnimationFrame(tick);
                }
            }
        };
        document.addEventListener("visibilitychange", onVis);

        return () => {
            running = false;
            cancelAnimationFrame(raf);
            ro.disconnect();
            document.removeEventListener("visibilitychange", onVis);
        };
    }, []);

    return (
        <div ref={wrapRef} className="absolute inset-0 h-full w-full">
            <canvas ref={canvasRef} className="h-full w-full" />
        </div>
    );
}
