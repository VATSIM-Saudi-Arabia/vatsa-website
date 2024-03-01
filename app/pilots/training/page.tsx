import Image from "next/image";

export default async function PilotTraining() {
    return (
        <main className="flex flex-col">
            <section className="h-screen bg-[url('/assets/backgrounds/pt.png')] bg-cover bg-no-repeat bg-center">
                <div className="h-full bg-black/30">
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
