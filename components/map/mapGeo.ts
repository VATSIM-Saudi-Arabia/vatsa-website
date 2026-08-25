import geo from "./saudiGeo.json";

export const VIEW = geo.view as { latMin: number; latMax: number; lonMin: number; lonMax: number };

const latC = (VIEW.latMin + VIEW.latMax) / 2;
export const KX = Math.cos((latC * Math.PI) / 180);

export const inView = (lat: number, lon: number) =>
    lat >= VIEW.latMin && lat <= VIEW.latMax && lon >= VIEW.lonMin && lon <= VIEW.lonMax;

export type Rect = { latMin: number; latMax: number; lonMin: number; lonMax: number };
export type Projector = (lat: number, lon: number) => [number, number];

export function makeProjector(view: Rect, w: number, h: number): Projector {
    const kx = Math.cos((((view.latMin + view.latMax) / 2) * Math.PI) / 180);
    const spanX = (view.lonMax - view.lonMin) * kx;
    const spanY = view.latMax - view.latMin;
    const scale = Math.min(w / spanX, h / spanY);
    const offX = (w - spanX * scale) / 2;
    const offY = (h - spanY * scale) / 2;
    return (lat, lon) => [offX + (lon - view.lonMin) * kx * scale, offY + (view.latMax - lat) * scale];
}

export function boxAround(lat: number, lon: number, latSpan: number, w: number, h: number): Rect {
    const kx = Math.cos((lat * Math.PI) / 180);
    const lonSpan = (latSpan * (w / h)) / kx;
    return { latMin: lat - latSpan / 2, latMax: lat + latSpan / 2, lonMin: lon - lonSpan / 2, lonMax: lon + lonSpan / 2 };
}

export function lerpRect(a: Rect, b: Rect, t: number): Rect {
    const m = (x: number, y: number) => x + (y - x) * t;
    return { latMin: m(a.latMin, b.latMin), latMax: m(a.latMax, b.latMax), lonMin: m(a.lonMin, b.lonMin), lonMax: m(a.lonMax, b.lonMax) };
}

export const easeInOut = (t: number) => (t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2);
