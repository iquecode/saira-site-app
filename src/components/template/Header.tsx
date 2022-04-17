import Image from 'next/image'

export default function Header() {

    return (

        <div className='flex justify-center w-full py-5'>
            <Image
                priority
                src="/images/logo.png" 
                height={300}
                width={500}
                alt="Logo"
            />
        </div>
        
    )


}