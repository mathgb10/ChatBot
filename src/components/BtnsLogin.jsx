
export default function BtnsLogin(props){
    return(
        <>
            <button className={props.name == 'Entrar' ? "w-full bg-sky-400 font-bold text-white p-3 rounded-lg cursor-pointer flex justify-between items-center" : "w-fit font-light text-white cursor-pointer flex justify-center items-center hover:underline"}>
                {props.name}
            </button>
        </>
    )
}