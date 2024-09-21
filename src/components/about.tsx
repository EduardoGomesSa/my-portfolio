export function About() {
    return (
        <div className="w-full h-full flex justify-center items-center">
            {/* Container principal */}
            <div className="w-[90vw] bg-white bg-opacity-10 p-8 rounded-lg shadow-lg mx-auto mt-10 flex">
                
                {/* Parte esquerda - Imagem */}
                <div className="w-1/2 h-full bg-cover bg-center rounded-lg">
                    <img src="/assets/nerd.png" alt="Imagem do ilustrativa do sobre" />
                    {/* A imagem será usada como plano de fundo */}
                </div>

                {/* Parte direita - Texto */}
                <div className="w-1/2 flex flex-col justify-center pl-8">
                    <div>
                        <p>Tecnologias</p>
                    </div>
                    <p>Sobre mim</p>
                    <p>Eu sou um aficcionado por desenvolvimento de software e tecnologia. Sempre em busca de novos desafios.</p>
                    <p>Beyond coding, I'm a coffee enthusiast, a cat lover, and a self-taught artist who enjoys
                        spending my free time doodling. I am currently seeking opportunities to bring my skills
                        and enthusiasm to a tech company in the United States or Europe and am
                        excited about the prospect of relocating to pursue new challenges.
                    </p>
                    <button className="bg-[#8A42DB] text-white py-2 px-4 rounded hover:bg-blue-700 mt-4">
                        Meu currículo
                    </button>
                </div>
            </div>
        </div>
    )
}
