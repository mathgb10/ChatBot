import { useState, useEffect } from 'react'
import InputsLogin from '../components/InputsLogin'
import BtnsLogin from '../components/BtnsLogin'



export default function LoginPage() {

    const [nome, setNome] = useState('')
    const [senha, setSenha] = useState('')    

    const handleLogin = async (e) => {
        e.preventDefault()

        const dadosColetados = { nome, senha }
        const resposta = await fetch('http://localhost:3001/login', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(dadosColetados)
        })

        const resultado = await resposta.json()
        console.log(resultado)
    }

    return (
        <>
            <main className='w-full min-h-screen flex justify-center items-center'>
                <section className="w-full h-full flex justify-center items-center">
                    <div className='w-6/12 max-w-[560px] p-5 flex items-center justify-around rounded-lg border-1 border-white/25 bg-white/20'>
                        <div className='flex h-[500px] flex-1 rounded-lg items-center justify-around'>
                            <form onSubmit={handleLogin} className="w-full flex flex-col gap-15">
                                <div className="w-full text-center font-bold text-4xl text-white">
                                    <h2>Login</h2>
                                </div>
                                <div className="flex flex-col gap-10">
                                    <InputsLogin name='Nome' salvar={setNome} />
                                    <InputsLogin name='Senha' salvar={setSenha} />
                                </div>
                                <div className="w-full flex items-center justify-center flex-col gap-2">
                                    <BtnsLogin name='Entrar' type='submit' />
                                    <div className='w-full flex items-center justify-center gap-10'>
                                        <BtnsLogin name='Esqueceu' type='button' />
                                        <BtnsLogin name='Registrar' type='button' />
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </section>
            </main>
        </>
    )
}
