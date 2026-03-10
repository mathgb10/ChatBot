import InputsLogin from '../components/InputsLogin'
import BtnsLogin from '../components/BtnsLogin'
import Logo from "../assets/parabot.png"

export default function SizeBox(props) {
    return (
        <div className='flex h-[500px] flex-1 rounded-lg items-center justify-around'>
            <div className="w-11/12 h-11/12">
                {
                    props.conteudo == 'LadoUm' && (
                        <div className="w-full h-full border-1 border-white/25 bg-white/25 rounded-lg p-5">
                            <img src={Logo} alt="Logo" className="rounded-md" />
                        </div>
                    )
                }
                {
                    props.conteudo == 'LadoDois' && (
                        <div className="w-full flex flex-col gap-15">
                            <div className="w-full text-center font-bold text-4xl text-white">
                                <h2>Login</h2>
                            </div>
                            <div className="flex flex-col gap-10">
                                <InputsLogin name='Nome' />
                                <InputsLogin name='Senha' />
                            </div>
                            <div className="w-full flex items-center justify-center flex-col gap-2">
                                <BtnsLogin name='Entrar' />
                                <div className='w-full flex items-center justify-center gap-10'>
                                    <BtnsLogin name='Esqueceu' />
                                    <BtnsLogin name='Registrar' />
                                </div>
                            </div>
                        </div>
                    )
                }
            </div>
        </div>
    )
}