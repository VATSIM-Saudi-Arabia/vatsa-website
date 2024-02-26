// Made by Wookie, not a part of Shadcn UI

import { cn } from "@/lib/utils";

export default function Divider({ className }: { className?: string }) {
    return (
        <>
            <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 1200 120"
                preserveAspectRatio="none"
                className={cn("h-16 w-[calc(100%+1.3px)] opacity-50", className)}
            >
                <path d="M1200 120L0 16.48 0 0 1200 0 1200 120z" fill="currentColor"></path>
            </svg>
            <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 1200 120"
                preserveAspectRatio="none"
                className={cn("h-16 w-[calc(100%+1.3px)] [transform:rotateY(180deg)]", className)}
            >
                <path d="M1200 120L0 16.48 0 0 1200 0 1200 120z" fill="currentColor"></path>
            </svg>
        </>
    );
}
