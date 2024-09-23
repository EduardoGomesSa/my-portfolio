"use client"; // Certifica que o componente só será renderizado no cliente

import { Swiper, SwiperSlide } from 'swiper/react'; // Importa os componentes do Swiper
import 'swiper/swiper-bundle.css'; // Importa os estilos do Swiper
import { Autoplay, Pagination } from 'swiper'; // Importa os módulos necessários

export function ProjectsCarousel() {
    const projects = [
        { title: 'Projeto 1', description: 'Descrição do projeto 1' },
        { title: 'Projeto 2', description: 'Descrição do projeto 2' },
        { title: 'Projeto 3', description: 'Descrição do projeto 3' },
        { title: 'Projeto 4', description: 'Descrição do projeto 4' },
        { title: 'Projeto 5', description: 'Descrição do projeto 5' },
    ];

    return (
        <Swiper
            modules={[Autoplay, Pagination]} // Registra os módulos que você está usando
            spaceBetween={20}
            slidesPerView={3}
            loop={true}
            autoplay={{
                delay: 3000,
                disableOnInteraction: false,
            }}
            pagination={{ clickable: true }}
            className="w-full max-w-4xl"
        >
            {projects.map((project, index) => (
                <SwiperSlide key={index}>
                    <div className="bg-white p-6 shadow-md rounded-lg h-40 flex flex-col justify-center items-center">
                        <h3 className="text-lg font-semibold mb-2 text-black">{project.title}</h3>
                        <p className="text-black">{project.description}</p>
                    </div>
                </SwiperSlide>
            ))}
        </Swiper>
    );
}
