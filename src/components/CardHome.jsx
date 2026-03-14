import { LiaRobotSolid } from "react-icons/lia";

export default function CardHome(props) {
    return (
        <div className="flex flex-col gap-3 flex-1 border-1 border-white/25 rounded-lg p-3 transition-all duration-500 ease-in-out bg-white/25 text-white hover:shadow-2xl hover:scale-105">
            <div className="flex justify-between items-center border-b-1">
                <h4>Titulo</h4>
                <LiaRobotSolid />
            </div>
            <div>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium cupiditate magni unde beatae error, temporibus voluptas tempora atque quo delectus et ad cumque nesciunt facilis sequi, ipsam sapiente inventore aspernatur.</p>
            </div>
        </div>
    )
}