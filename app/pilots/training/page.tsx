import SiteConfig from "@/config/site";
import Image from "next/image";
import Divider from "@/components/ui/divider";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";

import { ChevronDown } from "lucide-react";

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
                            className="w-[30vw] sm:w-[10vw]"
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
                <div className="container flex flex-col gap-4 my-10">
                    <h1 className="text-4xl text-vacc-green">Looking for flight training?</h1>

                    <p>
                        Welcome to the Saudi Pilot Training Program! An upcoming authorized training organization within
                        VATSIM. Our mission is to provide comprehensive training for the initial pilot rating, P1, and
                        equip aspiring virtual pilots with essential skills and knowledge. Join our waitlist today to
                        receive priority access to our high-quality training programs, as we work towards establishing a
                        realistic and immersive virtual environment, supported by experienced instructors and a vibrant
                        community of virtual pilots. Get ready to embark on an exciting journey towards becoming a
                        proficient virtual pilot with the ATO.
                    </p>

                    <ChevronDown size={50} className="mx-auto text-vacc-green" />
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
                <div className="container flex flex-col md:flex-row justify-center gap-6 my-10">
                    <a
                        href={SiteConfig.links.pilot_training.pilot}
                        target="_blank"
                        rel="noreferrer noopener"
                        className="basis-1/2"
                    >
                        <Card className="relative overflow-hidden">
                            <div className="absolute inset-0 flex items-center justify-center opacity-0 hover:opacity-100 hover:bg-black/75">
                                <p className="text-6xl text-center text-white">Apply Here!</p>
                            </div>

                            <CardContent className="p-0">
                                <Image
                                    src="/assets/images/pt_1.png"
                                    alt="Card Image"
                                    width={0}
                                    height={0}
                                    sizes="75vh"
                                    className="w-full h-auto"
                                    priority
                                />
                            </CardContent>

                            <CardHeader>
                                <CardTitle>Want to become a pilot?</CardTitle>
                            </CardHeader>

                            <CardContent>
                                <p>
                                    Are you looking to elevate your virtual flying experience new heights? Do you want
                                    to immerse yourself in a realistic and engaging virtual aviation environment? If so,
                                    we have something exciting in store for you!
                                </p>
                            </CardContent>
                        </Card>
                    </a>

                    <a
                        href={SiteConfig.links.pilot_training.instructor}
                        target="_blank"
                        rel="noreferrer noopener"
                        className=" basis-1/2"
                    >
                        <Card className="relative overflow-hidden">
                            <div className="absolute inset-0 flex items-center justify-center opacity-0 hover:opacity-100 hover:bg-black/75">
                                <p className="text-6xl text-center text-white">Apply Here!</p>
                            </div>

                            <CardContent className="p-0">
                                <Image
                                    src="/assets/images/pt_2.png"
                                    alt="Card Image"
                                    width={0}
                                    height={0}
                                    sizes="75vh"
                                    className="w-full h-auto"
                                    priority
                                />
                            </CardContent>

                            <CardHeader>
                                <CardTitle>Want to become an instructor?</CardTitle>
                            </CardHeader>

                            <CardContent>
                                <p>
                                    Are you a flight instructor with a passion for teaching and a commitment to safety?
                                    Do you have experience in both flight training and ground instruction? If so, we
                                    want to hear from you!
                                </p>
                            </CardContent>
                        </Card>
                    </a>
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
                <div className="container flex flex-col items-center gap-8 h-[80vh] md:h-[50vh]">
                    <div className="flex flex-col justify-center items-center h-full">
                        <Carousel opts={{ loop: true }} orientation="vertical" className="w-full">
                            <CarouselContent className="h-[60vh] md:h-[30vh] items-start">
                                <CarouselItem className="w-full flex justify-center items-center">
                                    <Card>
                                        <CardHeader>
                                            <h2 className="text-4xl text-vacc-green">The Vision</h2>
                                        </CardHeader>

                                        <CardContent>
                                            <p>
                                                Our vision is to be a leading Authorized Training Organization within
                                                VATSIM, setting the benchmark for excellence in virtual air traffic
                                                control services. We strive to create an inclusive community, where air
                                                traffic controllers can enhance their skills, virtual pilots can
                                                experience realistic operations, and our ATO becomes a hub for
                                                innovation, learning, and advancement in the virtual aviation space.
                                            </p>
                                        </CardContent>
                                    </Card>
                                </CarouselItem>

                                <CarouselItem className="w-full flex justify-center items-center">
                                    <Card>
                                        <CardHeader>
                                            <h2 className="text-4xl text-vacc-green">The Mission</h2>
                                        </CardHeader>

                                        <CardContent>
                                            <p>
                                                Our mission is to deliver exceptional pilot training within VATSIM Saudi
                                                Arabia, fostering a realistic and immersive virtual aviation
                                                environment. We are committed to ensuring the highest standards of
                                                safety, proficiency, and professionalism among our student pilots.
                                                Through comprehensive training programs, we aim to equip them with the
                                                necessary skills, knowledge, and confidence to excel as virtual
                                                aviators. We foster collaboration and mentorship, promoting a supportive
                                                community that encourages continuous learning and growth in the field of
                                                virtual aviation.
                                            </p>
                                        </CardContent>
                                    </Card>
                                </CarouselItem>

                                <CarouselItem className="w-full flex justify-center items-center">
                                    <Card>
                                        <CardHeader>
                                            <h2 className="text-4xl text-vacc-green">When Does It Start?</h2>
                                        </CardHeader>

                                        <CardContent>
                                            <p>
                                                The Saudi Pilot Training Program is currently under development and is
                                                not yet recognized as an authorized training organization (ATO) by
                                                VATSIM. It is expected to begin operations in the Third Quarter of 2024.
                                                We are diligently working towards establishing a high-quality training
                                                program.
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
