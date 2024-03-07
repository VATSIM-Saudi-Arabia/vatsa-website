import "./globals.css";

import type { Metadata, Viewport } from "next";

import SiteConfig from "@/config/site";
import Header from "@/components/header/main-header";
import Footer from "@/components/footer/main-footer";
import { Mulish } from "next/font/google";
import { cn } from "@/lib/utils";

const mulish = Mulish({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: SiteConfig.title,
    description: SiteConfig.description,
    openGraph: {
        title: SiteConfig.title,
        description: SiteConfig.description,
        url: "https://vatsimsa.com",
        siteName: SiteConfig.title,
        images: [
            {
                url: "https://vatsimsa.com/assets/logo.png",
                width: 200,
                height: 200,
            },
        ],
        locale: "en_US",
        type: "website",
    },
};

export const viewport: Viewport = {
    themeColor: "#16a34a",
    colorScheme: "dark",
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
