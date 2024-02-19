import "./globals.css";

import type { Metadata } from "next";

import Config from "@/config/site";
import Header from "@/components/header/main-header";
import { Mulish } from "next/font/google";
import { cn } from "@/lib/utils";

const mulish = Mulish({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: Config.title,
    description: Config.description,
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className={cn("dark", mulish.className)}>
                <Header />
                {children}
                <footer className="flex justify-center items-center h-40 w-full">
                    made by wookie :)
                </footer>
            </body>
        </html>
    );
}
