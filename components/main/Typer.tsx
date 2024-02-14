"use client";

import Typewriter from "typewriter-effect";

export default function Typer({ content }: { content: string[] }) {
    return (
        <Typewriter
            options={{
                strings: content,
                autoStart: true,
                loop: true,
                delay: 50,
                deleteSpeed: 20,
            }}
        />
    );
}
