import MainNav from "./main-nav";
import Config from "@/config/site";

export default function Header() {
    return (
        <header className="fixed w-full">
            <MainNav items={Config.navigation} />
        </header>
    );
}
