import Image from 'next/image'
import { UrlWithStringQuery } from 'url';

interface ProjectCardProps {
    title: string;
    text: String;
    image: any;
}


export default function ProjectCard(props: ProjectCardProps) {

    return (
        <>
        <div className="card m-8 card-compact w-96 bg-base-100 shadow-xl">
            <figure>

                <Image
                    priority
                    src={props.image} 
                    height={225}
                    width={400}
                    alt="Project"
                />
            </figure>
            <div className="card-body">
                <h2 className="card-title">{props.title}</h2>
                <p>{props.text}</p>
                <div className="card-actions justify-end">
                <button className="btn btn-primary">Saiba mais...</button>
                </div>
            </div>
        </div>
        </>
    )
}