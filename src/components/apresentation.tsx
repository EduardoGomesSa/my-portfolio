export function Apresentation() {
    return (
        <div className="w-full h-full flex justify-center items-center">
            <div className="w-[90vw] p-8 rounded-lg shadow-lg mx-auto mt-10 flex">
                <div className="w-1/2 flex flex-col justify-center pl-8">
                    <h1 className="text-4xl text-[#4E4563] pb-14">Olá! Eu sou Eduardo</h1>
                    <h2 className="text-2xl text-white pb-6">Desenvolvedor Full-stack e entusasta de tecnologia e inovação</h2>
                    <p className="pb-6">Já estou na área a mais de 2 anos. Trabalho com desenvilmento de
                        aplicativos e sites, utilizando as seguintes tecnologias Flutter,
                        React, Laravel e MySQL
                    </p>

                    <div className="flex gap-4">
                        <button className="bg-[#413A4F] text-white py-2 px-4 rounded hover:bg-blue-700">
                            Meu currículo
                        </button>
                        <button className="bg-[#8A42DB] text-white py-2 px-4 rounded hover:bg-green-700">
                            Entre em contato
                        </button>
                    </div>
                </div>
                

                <div className="w-1/2 h-full bg-cover bg-center rounded-lg">
                    <img src="/assets/nerd.png" alt="Imagem do ilustrativa do sobre" />
                    {/* A imagem será usada como plano de fundo */}
                </div>
            </div>
            
        </div>
    )
}