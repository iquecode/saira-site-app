import { useState } from "react"

export default function Hero() {
    const [boxLogin, setBoxLogin]  = useState<'hidden' | ''>('hidden') 
    const [boxSignUp, setBoxSignUp] = useState<'hidden' | ''>('hidden')
    const [boxHero, setBoxHero]     = useState<'hidden' | ''>('')


    
    

    return (

        <>
        
       
        <div className={`${boxSignUp} hero min-h-screen`}>
            SIGNUP!!!!!
        </div>

        <div className={`${boxLogin} hero min-h-screen`}>
            LOGIN!!!!!
        </div>


        <div className={`${boxHero} hero min-h-screen`}>
        <div className="hero-content text-center text-gray-500">
            <div className="max-w-xg">
            <h1 className="mb-5 text-5xl font-bold">Por um mundo...</h1>
            <p className="mb-5 py-6 text-3xl">...com respeito aos seres, integração com a natureza e decisões consentidas, para uma vida plena, feliz e onde a evolução das potencialidades do ser humano é incentivada.</p>
            <button 
                className="btn btn-info modal-button text-base-100 border-0 hover:bg-gray-600 w-64 m-4"
                onClick={() => {
                    setBoxSignUp('')
                    setBoxHero('hidden')
                }}>
                Faça parte
            </button>
            <button 
                className="btn btn-primary text-base-100 border-0 hover:bg-gray-600 w-64 m-4"
                onClick={() => {
                    setBoxLogin('')
                    setBoxHero('hidden')
                }}>
                LogIn
                </button>
            </div>
        </div>
        </div>


       

        
        
        
        
        
        
        </>

       
    )



}