import { ProjectsCarousel } from '../components/projects_carousel';

export function Projects() {
    return (
        <div className="flex flex-col items-center">
            <h2 className="text-[#7DFFAF] text-base">Projetos</h2>
            <h1 className="text-[24px] leading-[32px] mb-8">Dê uma olhada nos meus projetos em destaque</h1>

            {/* Renderiza o carrossel */}
            <ProjectsCarousel />
        </div>
    );
}
