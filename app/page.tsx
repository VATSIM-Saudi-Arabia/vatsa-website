import Typer from "@/components/main/Typer";
import Config from "@/config/site";

export default function Home() {
    return (
        <main className="flex flex-col">
            <div className="h-[80vh] bg-[url('/assets/background.png')] bg-cover bg-no-repeat bg-center">
                <div className="h-full bg-black/30">
                    <div className="container flex flex-col justify-center h-full">
                        <div className="text-4xl sm:text-6xl">
                            <h1>Welcome to </h1>
                            <h1 className="font-bold text-green-600">
                                VATSIM Saudi Arabia
                            </h1>
                        </div>

                        <h2 className="text-md sm:text-xl">
                            <Typer content={Config.subheadings} />
                        </h2>
                    </div>

                    <div className="relative">
                        <div className="absolute bottom-0 left-0 h-16 w-full overflow-hidden leading-0 rotate-180 text-green-900">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 1200 120"
                                preserveAspectRatio="none"
                                className="absolute bottom-0 h-16 w-[calc(100%+1.3px)] opacity-50"
                            >
                                <path
                                    d="M1200 120L0 16.48 0 0 1200 0 1200 120z"
                                    fill="currentColor"
                                ></path>
                            </svg>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 1200 120"
                                preserveAspectRatio="none"
                                className="absolute bottom-0 h-16 w-[calc(100%+1.3px)] [transform:rotateY(180deg)]"
                            >
                                <path
                                    d="M1200 120L0 16.48 0 0 1200 0 1200 120z"
                                    fill="currentColor"
                                ></path>
                            </svg>
                        </div>
                    </div>
                </div>
            </div>

            <div className="h-[400px] flex items-center justify-center bg-green-900">
                made by wookie :)
            </div>
        </main>
    );
}
