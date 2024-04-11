import Divider from "@/components/ui/divider";
import FeedbackForm from "@/components/FeedbackForm";

import { MessageCircleHeart } from "lucide-react";

export default function vACCStaff() {
    return (
        <main className="flex flex-col">
            <section className="h-[35vh] bg-[url('/assets/backgrounds/pt.png')] bg-cover bg-no-repeat bg-center">
                <div className="h-full bg-black/30">
                    <div className="container flex flex-col justify-center items-center gap-2 h-full">
                        <MessageCircleHeart size={50} />
                        <h1 className="text-2xl sm:text-4xl">ATC Feedback</h1>
                    </div>
                </div>

                <div className="relative text-background">
                    <div className="absolute bottom-0 h-16 w-full overflow-hidden leading-0 rotate-180">
                        <Divider className="absolute bottom-0" />
                    </div>
                </div>
            </section>

            <section className="bg-background">
                <div className="container my-10">
                    <FeedbackForm />
                </div>
            </section>
        </main>
    );
}
