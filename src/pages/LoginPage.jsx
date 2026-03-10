import { useState, useEffect } from 'react'
import BackgroundSG from '../components/BackgroundSG'
import SizeBox from '../components/SizeBox'

export default function LoginPage() {

    const [tema, setTema] = useState(()=>{return localStorage.getItem('tema_chatbot') == 'true' || false})
    useEffect(()=>{
        localStorage.setItem('tema_chatbot',tema)
    },[tema])

    return (
        <>
            <BackgroundSG tema={tema} />
            <main className='w-full min-h-screen flex justify-center items-center'>
                <section className="w-full h-full flex justify-center items-center">
                    <div className='w-9/12 p-5 flex items-center justify-around rounded-lg border-1 border-white/25 bg-white/20'>
                        <SizeBox conteudo='LadoUm'/>
                        <SizeBox conteudo='LadoDois'/>
                    </div>
                </section>
            </main>
        </>
    )
}