import { useFetch } from "../../hooks/useFetch";

export default function Test2() {

    const { data } = useFetch("get-product-list");
    

    if(!data) {
        return <p>carregando...</p>
    }

    
    
       // {console.log(data)} 
     
    return (
      data.result.map(p => {
        return (
          <li key={p.id}>
            {p.title}
          </li>
        ) 
      })
    )   
    




}