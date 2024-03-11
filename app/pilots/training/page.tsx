import Image from "next/image";
import Divider from "@/components/ui/divider";
import { Card, CardHeader } from "@/components/ui/card";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

import Discord from "@/public/assets/icons/discord.svg";

export default async function PilotTraining() {
    return (
        <main className="flex flex-col">
            <section className="h-[40vh]">
                <video autoPlay loop muted playsInline className="fixed object-cover w-full h-full -z-10">
                    <source src="/assets/backgrounds/pt.mp4" type="video/mp4" />
                </video>

                <div className="h-full bg-black/40">
                    <div className="container flex flex-col justify-center items-center h-full">
                        <Image
                            src="/assets/pt_logo.png"
                            alt="PT Logo"
                            width={0}
                            height={0}
                            sizes="75vh"
                            className="w-[30vw] sm:w-[15vw]"
                        />
                    </div>
                </div>

                <div className="relative text-background">
                    <div className="absolute bottom-0 h-16 w-full overflow-hidden leading-0 rotate-180">
                        <Divider className="absolute bottom-0" cNameBottom="text-vacc-yellow" />
                    </div>
                </div>
            </section>

            <section className="bg-background">
                <div className="container flex flex-col gap-6 py-10">
                    <div className="flex flex-col gap-4">
                        <h2 className="text-4xl text-vacc-green">Ready to join?</h2>

                        <div className="flex justify-center gap-4">
                            <Card>
                                <CardHeader>Lorem Ipsum</CardHeader>
                            </Card>

                            <Card>
                                <CardHeader>Lorem Ipsum</CardHeader>
                            </Card>
                        </div>
                    </div>
                </div>
            </section>

            <section className="relative bg-black/40 h-[40vh]">
                <div className="absolute top-0 w-full text-background">
                    <div className="relative h-16 w-full overflow-hidden leading-0">
                        <Divider className="absolute" cNameBottom="text-vacc-red" />
                    </div>
                </div>

                <div className="absolute bottom-0 w-full text-background ">
                    <div className="relative h-16 w-full overflow-hidden leading-0 rotate-180">
                        <Divider className="absolute bottom-0" cNameBottom="text-vacc-blue" />
                    </div>
                </div>
            </section>

            <section className="bg-background">
                <div className="container flex flex-col gap-6 py-10">
                    <div className="flex flex-col gap-4">
                        <h2 className="text-4xl text-vacc-green">Lorem Ipsum</h2>
                    </div>
                </div>
            </section>

            <section className="relative bg-black/40 h-[40vh]">
                <div className="absolute top-0 w-full text-background">
                    <div className="relative h-16 w-full overflow-hidden leading-0">
                        <Divider className="absolute" cNameBottom="text-vacc-blue-dark" />
                    </div>
                </div>

                <div className="absolute bottom-0 w-full text-background ">
                    <div className="relative h-16 w-full overflow-hidden leading-0 rotate-180">
                        <Divider className="absolute bottom-0" cNameBottom="text-vacc-green-light" />
                    </div>
                </div>
            </section>
        </main>
    );
}
