import ProjectCard from "./ProjectCard"

export default function Projects() {


    return (
        <>
        
        <div className="min-h-screen flex flex-col justify-center py-20">
            <h1 className="w-full text-center text-3xl font-bold text-gray-600"># Projetos em andamento</h1>
            <div className="flex max-xg justify-center items-center flex-col md:flex-row align-middle">
                <ProjectCard 
                    title="Semeando o bem Viver" 
                    text="Oficinas e disseminação da Agroecologia, Permacultura e Produção Local na Bahia..."
                    image="/images/projects/semeando-bem-viver.jpg"
                    />
                <ProjectCard 
                    title="Guia Cultural Achados e Perdidos" 
                    text="Um guia cultural do que acontece de legal no bairro RockDale, em Osasco/SP..."
                    image="/images/projects/rockdale.jpg"
                    />
                <ProjectCard 
                    title="Ecovila Saíra" 
                    text="Criação da primeira ecovila do projeto, a definir o localidade..."
                    image="/images/projects/ecovila.jpg"
                    />
                
                <ProjectCard 
                    title="Token Saíra" 
                    text="Moeda alternativa, recompensa para quem apoia, ferramenta de financiamento de projetos..."
                    image="/images/projects/token.jpg"
                    />
            </div>
        </div>

        
        </>
    )
}
