import BackgroundSG from "../components/BackgroundSG";
import { FaGear } from "react-icons/fa6";

export default function ErrorPage() {
    return (
        <>
            <BackgroundSG />
            <main className="w-full min-h-screen flex justify-center items-center">
                <div className="w-fit flex flex-col gap-5 items-center justify-center text-2xl text-white absolute">
                    <FaGear className="text-8xl animate-spin" />
                    <div className="text-center">
                        <h2 className="text-rose-600">404 Error</h2>
                        <p className="text-lg">Página não encontrada</p>
                    </div>
                </div>
            </main>
        </>
    )
}
