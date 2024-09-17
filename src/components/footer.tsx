export function Footer() {
    var currentYar = new Date().getFullYear()
    return (
        <div className="flex justify-center items-center bg-red-500 w-full h-[100px] fixed bottom-0 left-0">
            <p>&copy;Eduardo Sa - { currentYar }</p>
        </div>
        
    );
}