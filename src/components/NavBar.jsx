import { FaHouse } from "react-icons/fa6"
import { MdOutlinePreview } from "react-icons/md"
import { FaGear } from "react-icons/fa6"
import { FaDoorClosed } from "react-icons/fa"
import { Link } from "react-router-dom"
import { useEffect, useState } from "react"

export default function NavBar(){

    const [urlAtual, setUrlAtual] = useState("");

    useEffect(()=>{
        setUrlAtual(window.location.href)
    },[]);

    console.log(urlAtual);

    return(
        <>
            <nav className="w-2/12 h-11/12 left-11 mt-auto flex flex-col items-center justify-between fixed text-white bg-white/20 border-1 backdrop:blur-4xl border-white/25 rounded-lg p-5">
                <div className="border-b-1 border-white/25 pb-5">
                    <h2 className="text-sky-400 text-2xl font-bold italic">ParaBOT</h2>
                </div>
                <div className="w-fit flex flex-col items-center gap-15 border-1 border-white/25 p-10 rounded-full">
                    <Link to="/home" className={urlAtual == "/home" && "rounded-full border-1 border-white/25 bg-white/20"}><FaHouse/></Link>
                    <Link to='/previa' className={urlAtual == "/previa" && "rounded-full border-1 border-white/25 bg-white/20"}><MdOutlinePreview/></Link>
                    <Link to='/configuracoes' className={urlAtual == "/configuracoes" && "rounded-full border-1 border-white/25 bg-white/20"}><FaGear /></Link>
                </div>
                <div className="w-12/12">
                    <button className="bg-red-500 w-full rounded-md p-3 flex items-center justify-center cursor-pointer hover:bg-red-600"><FaDoorClosed /></button>
                </div>
            </nav>
        </>
    )
}
