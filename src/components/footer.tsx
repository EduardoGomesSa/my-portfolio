export function Footer() {
    var currentYar = new Date().getFullYear()
    return (
        <footer className="flex justify-between items-center p-4 h-[100px] bottom-0 left-0 right-0">
            {/* <p>&copy;Eduardo Sa - {currentYar}</p> */}
            <div className="text-white">
            &copy;Eduardo Sa - {currentYar}
            </div>
            <nav className="flex gap-4 ml-auto">
                <a href="#" className="text-white hover:text-blue-500">GitHub</a>
                <a href="#" className="text-white hover:text-blue-500">Linkedln</a>
                <a href="#" className="text-white hover:text-blue-500">Instagram</a>
                <a href="#" className="text-white hover:text-blue-500">Voltar</a>
            </nav>
        </footer>
        
    );
}