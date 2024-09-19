import { SunIcon } from "@heroicons/react/16/solid";

export function Header() {
    return (
        <header className="flex justify-between items-center p-4 h-[100px] fixed top-0 left-0 right-0 border-b border-black shadow-lg">
            <div className="text-white">
                Eduardo Sá
            </div>
            <nav className="flex gap-4 ml-auto">
                <a href="#" className="text-white hover:text-blue-500">Home</a>
                <a href="#" className="text-white hover:text-blue-500">About</a>
                <a href="#" className="text-white hover:text-blue-500">Projects</a>
                <a href="#" className="text-white hover:text-blue-500">Contacts</a>
                <a href="#" className="text-white hover:text-blue-500">PT</a>
                <a href="#" className="text-white hover:text-blue-500"><SunIcon className="h-6 w-6 text-white" /></a>
            </nav>
        </header>
    );
}
