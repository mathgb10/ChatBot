import InputsLogin from '../components/InputsLogin'
import BtnsLogin from '../components/BtnsLogin'

export default function SizeBox(props) {
    return (
        <div className='flex h-[500px] flex-1 rounded-lg items-center justify-around'>
            <div className="w-11/12 h-11/12">
                {
                    props.conteudo == 'LadoUm' && (
                        <div className="w-full h-full flex flex-col justify-around py-5 items-center border-1 border-white/25 bg-white/25 rounded-lg p-5">
                            <h3 className='text-sky-400 text-6xl font-bold'>ParaBOT</h3>
                            <p className='text-white text-center'>Olá, seja bem-vindo ao ParaBOT!</p>
                            <p className='text-white text-center'>Uma plataforma onde você pode gerenciar agentes, para algumas plataformas virtuais.</p>
                            <p className='text-white text-center'>Acesse a plataforma realizando o login.</p>
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
