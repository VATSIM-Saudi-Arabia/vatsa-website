import "./globals.css";

import type { Metadata } from "next";

import Config from "@/config/site";
import Header from "@/components/header/main-header";
import Footer from "@/components/footer/main-footer";
import { Mulish } from "next/font/google";
import { cn } from "@/lib/utils";

const mulish = Mulish({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: Config.title,
    description: Config.description,
    openGraph: {
        title: Config.title,
        description: Config.description,
        url: "https://vatsimsa.com",
        siteName: Config.title,
        images: [
            {
                url: "https://vatsimsa.com/assets/logo.png", // Must be an absolute URL
                width: 200,
                height: 200,
            },
        ],
        locale: "en_US",
        type: "website",
    },
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
                <Footer />
            </body>
        </html>
    );
}
