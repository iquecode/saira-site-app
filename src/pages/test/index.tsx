import { useState } from "react"
import FormInput from "../../components/forms/formImput"



export default function Test() {

    //const { cadastrar, login, loginGoogle } = useAuth();


    const [email, setEmail] = useState('')
    const [fullname, setFullname] = useState('')
    const [nickname, setNickname] = useState('')
    const [password, setPassword] = useState('')

    const [erro, setError] = useState(null)
   
    function submit() {
        console.log(fullname)
      
    //     try {
    //         if(modo === 'login') {
    //             await login(email, senha)
    //         } 
    //         else {
    //             await cadastrar(email, senha)
    //         }
    //    } catch(e) {
    //         exibirErro(e?.message ?? 'Ocorreu um erro') 
    //    }
    }


    return (

        <div className={`flex h-screen flex-col items-center justify-center`}>
            
            <div className="flex flex-col items-center justify-center w-full">


            <FormInput
                label="Email"
                type="email"
                value={email}
                valueChange={setEmail}
                required
            />
             <FormInput
                label="Nome completo"
                type="text"
                value={fullname}
                valueChange={setFullname}
                required
            />
             <FormInput
                label="Como quer ser chamad@?"
                type="text"
                value={nickname}
                valueChange={setNickname}
                required
            />
            <FormInput
                label="Senha"
                type="password"
                value={password}
                valueChange={setPassword}
                required
            />

            <button onClick={submit} className={`btn btn-info text-base-100 border-0 hover:bg-gray-600 w-full m-4
                
            `}>
                Cadastrar
            </button>

            <hr className="my-6 border-gray-300 w-full" />

            

           
                <p className="mt-8">
                    Novo por aqui?
                    <a onClick={ () => setModo('cadastro')} className={`
                        text-blue-500 hover:text-blue-700 font-semibold
                        cursor-pointer
                    
                    `}> Crie uma conta gratuitamente</a>
                </p>





            </div>
           
            

           

                
           

        </div>





        
    )
}
  