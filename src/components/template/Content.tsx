interface ContentProps {
    children?: any
 }
 
 export default function Content(props: ContentProps) {
     return (
         <div className={`
            flex flex-col
         `}>
             {props.children}
         </div>
     )
 }