import Divider from "@/components/ui/divider";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent, CardHeader } from "@/components/ui/card";

import { Info } from "lucide-react";

export default function vACCAboutUs() {
    return (
        <main className="flex flex-col">
            <section className="h-[35vh] bg-[url('/assets/backgrounds/pt.png')] bg-cover bg-no-repeat bg-center">
                <div className="h-full bg-black/30">
                    <div className="container flex flex-col justify-center items-center gap-2 h-full">
                        <Info size={50} />
                        <h1 className="text-2xl sm:text-4xl">About Us</h1>
                    </div>
                </div>

                <div className="relative text-background">
                    <div className="absolute bottom-0 h-16 w-full overflow-hidden leading-0 rotate-180">
                        <Divider className="absolute bottom-0" />
                    </div>
                </div>
            </section>

            <section className="bg-background">
                <div className="h-[80vh] md:h-[50vh]">
                    <div className="container flex flex-col justify-center items-center h-full">
                        <Carousel opts={{ loop: true }} orientation="vertical" className="w-full">
                            <CarouselContent className="h-[60vh] md:h-[30vh] items-start">
                                <CarouselItem className="w-full flex justify-center items-center">
                                    <Card>
                                        <CardHeader>
                                            <h2 className="text-4xl text-vacc-green">
                                                The Mission
                                            </h2>
                                        </CardHeader>
                                        <CardContent>
                                            <p>
                                                The objective of Saudi Arabia vACC is to provide
                                                regular, high quality Air Traffic Control (ATC) and
                                                Flight Information Service (FIS) in Jeddah Flight
                                                Information Region (FIR) on VATSIM network. Saudi
                                                Arabia vACC shall strive to offer a professional,
                                                realistic approach to flight simulation and at the
                                                same time give pilots utmost respect and courtesy,
                                                while learning about air traffic control or flying.
                                                The vACC maintains a strict policy of quality
                                                training with no compromise on nuisance and
                                                vacillating between resident or visitor members.
                                            </p>
                                        </CardContent>
                                    </Card>
                                </CarouselItem>
                                <CarouselItem className="w-full flex justify-center items-center">
                                    <Card>
                                        <CardHeader>
                                            <h2 className="text-4xl text-vacc-green">The Goal</h2>
                                        </CardHeader>
                                        <CardContent>
                                            <p>
                                                Our goal is to become the one of the most active
                                                vACC on the network providing world class training
                                                and services to our members. We plan to make our
                                                vACC open to the virtual world of VATSIM to come and
                                                control our airspace as visitors and enjoy our
                                                regular events and activities.
                                            </p>
                                        </CardContent>
                                    </Card>
                                </CarouselItem>
                                <CarouselItem className="w-full flex justify-center items-center">
                                    <Card>
                                        <CardHeader>
                                            <h2 className="text-4xl text-vacc-green">Relations</h2>
                                        </CardHeader>
                                        <CardContent>
                                            <p>
                                                The Saudi Arabia Virtual Area Control Center ( vACC
                                                ) is the official organization representing the
                                                local area of Saudi Arabia within the VATMENA
                                                division. Saudi Arabia vACC is a branch of the
                                                VATSIM Network structure.
                                            </p>
                                        </CardContent>
                                    </Card>
                                </CarouselItem>
                                <CarouselItem className="w-full flex justify-center items-center">
                                    <Card>
                                        <CardHeader>
                                            <h2 className="text-4xl text-vacc-green">
                                                Airspace Coverage
                                            </h2>
                                        </CardHeader>
                                        <CardContent>
                                            <p>
                                                In Saudi Arabia vACC, the Saudi Arabian airspace is
                                                controlled upto FL660, therefore en-route services
                                                will not be given to any traffic flying above FL660.
                                            </p>
                                        </CardContent>
                                    </Card>
                                </CarouselItem>
                                <CarouselItem className="w-full flex justify-center items-center">
                                    <Card>
                                        <CardHeader>
                                            <h2 className="text-4xl text-vacc-green">
                                                Responsibilities
                                            </h2>
                                        </CardHeader>
                                        <CardContent>
                                            <p>
                                                Responsible for the area covered by the following
                                                Flight Information Region: Kingdom of Saudi Arabia,
                                                Jeddah FIR (OEJD). vACC Saudi Arabia is organized in
                                                the VATSIM Middle East and North Africa Division
                                                Division (VATMENA). All material (documents, images
                                                and programs) produced specifically for the Saudi
                                                Arabia vACC , becomes the ownership of VATSIM. Saudi
                                                Arabia vACC will never publish resources which are
                                                to be used for real life operations, instead for
                                                simulation only! Saudi Arabia vACC will not be
                                                responsible for any damages caused due to any of the
                                                vACC&apos;s publications, users are always requested
                                                to cross check the vACC&apos;s resources and the
                                                vACC is always welcome to valid corrections.
                                            </p>
                                        </CardContent>
                                    </Card>
                                </CarouselItem>
                                <CarouselItem className="w-full flex justify-center items-center">
                                    <Card>
                                        <CardHeader>
                                            <h2 className="text-4xl text-vacc-green">
                                                Getting In Touch
                                            </h2>
                                        </CardHeader>
                                        <CardContent>
                                            <p>
                                                VATSIM Saudi Arabia is always reachable via our
                                                support email address at info@vatsimsa.com. Emailing
                                                us at this address will get the attention of all
                                                departments. Once your email has been received, the
                                                appropriate department will respond to the
                                                sender&apos;s query and offering support as needed.
                                                Please allow 48 hours for a response from the vACC
                                                management or it&apos;s departments.
                                            </p>
                                        </CardContent>
                                    </Card>
                                </CarouselItem>
                            </CarouselContent>
                            <CarouselPrevious />
                            <CarouselNext />
                        </Carousel>
                    </div>
                </div>
            </section>
        </main>
    );
}
