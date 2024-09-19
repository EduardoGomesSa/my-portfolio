export function Apresentation() {
    return (
        <div>
            <h1 className="text-4xl text-[#4E4563]">Olá, Eu Sou Eduardo</h1>
            <h2>Desenvolvedor Full-stack e entusasta de tecnologia e inovação</h2>
            <p>Já estou na área a mais de 2 anos. Trabalho com desenvilmento de
                aplicativos e sites, utilizando as seguintes tecnologias Flutter,
                React, Laravel e MySQL
            </p>

            <div className="flex gap-4">
            <button className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700">
                Meu currículo
            </button>
            <button className="bg-green-500 text-white py-2 px-4 rounded hover:bg-green-700">
                Entre em contato
            </button>
        </div>
        </div>
    )
}