import Card from "./Card"
import Donate from "./Donate"
import Hero from "./Hero"
import Projects from "./Projects"



export default function Body() {
    return (
        


        <>



        {/* <div className="hero py-20">
        <div className="hero-content text-center">
            <div className="max-w-xg">
            <h1 className="text-5xl font-bold text-gray-600">Por um mundo...</h1>
            <p className="py-6 text-2xl text-gray-500">...com respeito aos seres, integração com a natureza e decisões consentidas, para um vida plena, feliz e onde a evolução das potencialidades diversas do ser humano é incentivada e coaduna com a preservação e com a regeneração do planeta e da vida nele contida.</p>
            <button className="btn btn-info text-base-100 border-0 hover:bg-gray-600 w-64 m-4">Faça parte</button>
            <button className="btn btn-primary text-base-100 border-0 hover:bg-gray-600 w-64 m-4">LogIn</button>
            </div>
        </div>
        </div>  */}

        <Hero/>

        <div className="min-h-screen bg-accent flex flex-col justify-center">
            <h1 className="w-full text-center text-3xl font-bold text-gray-600 bg-accent pt-20"># Os princípios</h1>
            <div className="flex w-full justify-center items-center align-middle bg-accent flex-col xl:px-20 pb-20">
                <div className="flex max-xg justify-center items-center flex-col md:flex-row w-full">
                    <Card 
                        color="bg-primary" 
                        title="Abolicionismo animal" 
                        modalText={[`Toda a forma de vida animal senciente não humana têm os mesmos direitos que os humanos de viver plenamente e de ter suas 
                                    necessidades atendidas em nosso planeta.`,
                                    `Pessoas que não se consideram veganas são bem vindas a se associar ao Instituto, contanto que haja respeito ao princípio nos projetos e atividades.`]}
                        modalTitle="Abolicionismo animal" 
                        text="Terráqueos dividem o mesmo planeta..."
                        index="0"
                        />
                    <Card 
                        color="bg-secondary" 
                        title="Autogestão" 
                        text="Precisadmos ir além da democracia..." 
                        modalTitle="Autogestão" 
                        modalText={['Autonomia, autogestão e horizontalidade no poder decisório, baseando a Governança do Instituto no modelo de Sociocracia e/ou em modelos similares que venham a ser aperfeiçoados.']}
                        index="1"
                        />
                </div>
                <div className="flex max-w-xg justify-center items-center flex-col md:flex-row w-full">
                <Card 
                        color="bg-warning" 
                        title="Sustentabilidade" 
                        text="Humanos são parte da natureza..." 
                        modalTitle="Sustentabilidade e integração com a natureza" 
                        modalText={['A ocupação de terras gerada pelas atividades do Instituto deve ser de caráter ecológico dentro das características da respectiva biorregião, norteado pelos princípios da sustentabilidade, isto é, que busca o equilíbrio entre as dimensões (I) econômica, (II) ambiental e (III) a social, combinadas numa abordagem que estimula o desenvolvimento comunitário e pessoal fundamentados na gestão participativa e na diversidade cultural.']}
                        index="2"
                        />
                <Card 
                        color="bg-info" 
                        title="Comunidade" 
                        text="Solidariedade e empatia..." 
                        modalTitle="Comunidade" 
                        modalText={['Solidariedade, empatia e senso de comunidade, com o uso de ferramentas que busquem a lógica restaurativa em relação aos conflitos, com compaixão empatia e o princípio da não violência.']} 
                        index="3"
                        />
                </div>
            </div>
        </div>
        

      


        <Projects/>

        <Donate/>


            
       
        
        </>











        
    )
}
