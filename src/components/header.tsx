export function Header() {
    return (
        <header className="flex justify-between items-center p-4 h-[100px] fixed top-0 left-0 right-0 border-b border-black shadow-lg">
            <div className="text-white">
                Eduardo Sá
            </div>
            <nav className="flex gap-4 ml-auto">
                <a href="#" className="text-blue-500 hover:text-blue-700">Link 1</a>
                <a href="#" className="text-blue-500 hover:text-blue-700">Link 2</a>
                <a href="#" className="text-blue-500 hover:text-blue-700">Link 3</a>
                <a href="#" className="text-blue-500 hover:text-blue-700">Link 4</a>
            </nav>
        </header>
    );
}
