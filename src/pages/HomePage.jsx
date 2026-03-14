import Sidebar from '../components/Sidebar'
import CardHome from '../components/CardHome'

export default function HomePage(props) {
    return (
        <>
            <main className="w-full min-h-screen flex justify-center items-center">
                <div className='w-screen h-screen p-5 flex items-center gap-5'>
                    <Sidebar />
                    <section className='w-full h-full bg-white/10 border-1 border-white/20 rounded-lg flex flex-col gap-3 items-center p-10'>
                        <div className='w-full'>
                            <h2 className='text-6xl text-sky-500 font-bold italic'>Parabot</h2>
                            <h4 className='text-white'>Olá, {props.name || "Convidado"}! </h4>
                        </div>
                        <div className='w-full flex flex-wrap gap-10'>
                            <CardHome />
                            <CardHome />
                            <CardHome />
                        </div>
                    </section>
                </div>
            </main>
        </>
    )
}