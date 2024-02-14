export default function Home() {
    return (
        <main className="flex flex-col">
            <div className="h-[80vh] bg-[url('/assets/background.png')] bg-cover bg-no-repeat bg-center">
                <div className="h-full bg-black/50">
                    <div className="container flex flex-col justify-center h-full">
                        <div className="text-6xl">
                            <h1>Welcome to </h1>
                            <h1 className="font-bold text-green-600">
                                VATSIM Saudi Arabia
                            </h1>
                        </div>

                        <h2 className="text-xl">
                            Providing VATSIM services in the Middle East & North
                            Africa, from Morocco to Oman and everything in
                            between.
                        </h2>
                    </div>
                </div>
            </div>

            <div className="flex items-center justify-center bg-[url('/assets/background.png')] bg-cover">
                Second content
            </div>
        </main>
    );
}
