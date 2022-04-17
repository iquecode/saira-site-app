import Image from "next/image"

export default function Hero() {
    const style =  {
        backgroundImage: 'url(/images/fundo3.webp);'}

    return (

        <>
        
       
        <div className="hero min-h-screen">
        {/* <div className="hero-overlay bg-opacity-70"></div>  */}
        <div className="hero-content text-center text-gray-500">
            <div className="max-w-xg">
            <h1 className="mb-5 text-5xl font-bold">Por um mundo...</h1>
            <p className="mb-5 py-6 text-3xl">...com respeito aos seres, integração com a natureza e decisões consentidas, para uma vida plena, feliz e onde a evolução das potencialidades do ser humano é incentivada.</p>
            <button className="btn btn-info text-base-100 border-0 hover:bg-gray-600 w-64 m-4">Faça parte</button>
            <button className="btn btn-primary text-base-100 border-0 hover:bg-gray-600 w-64 m-4">LogIn</button>
            </div>
        </div>
        </div>


        
        
        
        
        
        
        </>

       
    )



}