import Image from "next/image";

export default async function PilotTraining() {
    return (
        <main className="flex flex-col">
            <section className="h-screen">
                <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="fixed object-cover w-full h-full -z-10"
                >
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
                            className="w-[50vw] sm:w-[25vw]"
                        />
                        <h1 className="text-4xl sm:text-6xl">Coming Soon</h1>
                    </div>
                </div>
            </section>
        </main>
    );
}
