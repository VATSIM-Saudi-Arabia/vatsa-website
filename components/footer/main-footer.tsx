import { Separator } from "@/components/ui/separator";
import Image from "next/image";

export default function Footer() {
    return (
        <footer className="container w-full">
            <Separator />

            <div className="flex flex-wrap justify-between py-10">
                <div className="flex flex-col gap-2 items-center">
                    <Image
                        src="/assets/logo.png"
                        alt="Logo"
                        width={80}
                        height={80}
                    />
                    <p>© VATSIM Saudi Arabia 2024</p>
                </div>
                <div>I</div>
                <div>am</div>
                <div>professional</div>
                <div>monkey</div>
            </div>

            <h2 className="py-4 text-center">made by wookie :)</h2>
        </footer>
    );
}
