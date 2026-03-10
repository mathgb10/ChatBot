import { IoPersonCircle } from "react-icons/io5"
import { RiLockPasswordFill } from "react-icons/ri"

export default function InputsLogin(props){

    return (
        <div className="flex flex-col gap-1">
            <label htmlFor="" className="flex items-center gap-2 text-lg text-white">{props.name == 'Nome' ? <IoPersonCircle/> : <RiLockPasswordFill/> }{props.name} :</label>
            <input type={props.name == 'Nome' ? 'text' : 'password' } placeholder={props.name == 'Nome' ? 'Exemplo da Silva' : '*****' } name="nome_usuario" id="nome_usuario" className="border-1 border-white/25 p-2 rounded-lg outline-none focus:bg-white/25" />
        </div>
    )
}