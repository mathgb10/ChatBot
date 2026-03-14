import { Link } from "react-router-dom"
import { FaGear } from "react-icons/fa6";
import { MdHome, MdOutlineMenu, MdPreview } from "react-icons/md";
import { IoPersonCircle } from "react-icons/io5";

export default function Sidebar() {

    const items = [{ id: 1, link: "/home", icone: <MdHome />, titulo: "Home" }, { id: 2, link: "/preview", icone: <MdPreview />, titulo: "Prévia" }, {
        id: 3, link: "/config", icone: <FaGear />, titulo: "Configurações"
    }]

    return (
        <>
            <nav className="w-1/12 max-w-[95px] h-12/12 bg-white/10 border-1 border-white/25 rounded-lg p-5 text-3xl text-white flex items-center justify-between flex-col">
                <header>
                    <button><MdOutlineMenu /></button>
                </header>

                <ul className="flex flex-col gap-10 rounded-full border-1 border-white/25 bg-white/25 p-3 text-2xl">
                    {items.map((m) => (
                        <li key={m.id}><Link to={m.link} className={
                            window.location.href.includes(m.link) && "text-sky-500"
                        } title={m.titulo}>{m.icone}</Link></li>
                    ))}
                </ul>

                <div>
                    <div>
                        <IoPersonCircle />
                    </div>
                </div>
            </nav>
        </>
    )
} 