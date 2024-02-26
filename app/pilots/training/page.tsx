import Divider from "@/components/ui/divider";
import Image from "next/image";

export default async function Pilots() {
    return (
        <main className="flex flex-col">
            <section className="h-screen bg-[url('/assets/pt_background.png')] bg-cover bg-no-repeat bg-center">
                <div className="h-full bg-black/30">
                    <div className="container flex flex-col justify-center items-center h-full">
                        <Image
                            src="/assets/pt_logo.png"
                            alt="PT Logo"
                            width={0}
                            height={0}
                            sizes="75vh"
                            className="w-[25vw]"
                        />
                        <h1 className="text-6xl">Coming Soon</h1>
                    </div>
                </div>

                <div className="relative text-background">
                    <div className="absolute bottom-0 h-16 w-full overflow-hidden leading-0 rotate-180">
                        <Divider className="absolute bottom-0" />
                    </div>
                </div>
            </section>
        </main>
    );
}
