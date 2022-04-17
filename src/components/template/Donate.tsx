import Image from "next/image"

export default function Donate() {
    const style =  {
        backgroundImage: 'url(/images/fundo2.webp);'}
    
    const dataTip = 
    "Os Tokens Saíra representarão um ativo construído com tecnologia de BlockChain. As possibilidades de uso serão enormes e, consequentemente, a possibilidade de valorização monetária futura também : ).";

    return (

        <>
        
       
        <div className="hero min-h-screen bg-secondary" >
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content">
            <div className="max-w-md">
            <h1 className="mb-5 text-5xl font-bold">Ajude o Saíra a voar</h1>
            <p className="mb-5 text-2xl">Apoie financeiramente com o que você pode e receba <span className="hover:cursor-pointer tooltip text-primary" data-tip={dataTip} >Tokens Saíra</span> em caso de doações recorrentes.</p>
            <p className="mb-5 text-2xl">Você pode fazer a difença, mesmo com um valor pequeno :)</p>
            <button className="btn btn-primary">Veja como apoiar...</button>
            </div>
        </div>
        </div>


        
        
        
        
        
        
        </>

       
    )



}