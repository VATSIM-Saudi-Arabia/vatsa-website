import "./globals.css";

import type { Metadata } from "next";

import { Mulish } from "next/font/google";
import Config from "@/config/site";
import Header from "@/components/header/main-header";

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
            <body className={mulish.className}>
                <Header />
                {children}
            </body>
        </html>
    );
}
