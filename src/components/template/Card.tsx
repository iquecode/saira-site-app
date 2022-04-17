interface CardProps {
    title: string;
    text: String;
    color: String;
    modalTitle: String;
    modalText: Array<String>;
    index: String;
}


export default function Card(props: CardProps) {

return (


    <>

    <div className="w-full bg-accent">
    <label htmlFor={`modal-card${props.index}`} className="modal-button w-full lg:w-auto flex justify-center" >
        <div className={`${props.color} hover:bg-gray-600 cursor-pointer card w-full md:w-96 xl:w-full shadow-xl m-8 text-base-100`}>
            <div className="card-body">
                <h2 className="card-title">{props.title}</h2>
                <p>{props.text}</p>
                <div className="card-actions justify-end">
                </div>
          </div>
         </div> 
    </label>
    </div>

    
   
    <input type="checkbox" id={`modal-card${props.index}`} className="modal-toggle"></input>
    <div className="modal">
    <div className="modal-box relative">
        <label htmlFor={`modal-card${props.index}`} className={`btn border-0 btn-sm ${props.color} btn-circle absolute right-2 top-2`}>✕</label>
        <h3 className="text-lg font-bold">{props.modalTitle}</h3>

        {
            props.modalText.map((text, index) => {
                return ( <p key={index}>{text}</p>)
            })
        }
       

       
    </div>
    </div>
       
    </>
    
)

}