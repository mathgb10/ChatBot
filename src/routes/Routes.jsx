import { Routes, Route } from "react-router-dom"
import LoginPage from '../pages/LoginPage'
import ErrorPage from '../pages/ErrorPage'
import HomePage from "../pages/HomePage"

export default function Rotas(){
    return (
        <Routes>
            <Route path="/" element={<LoginPage />} />
            <Route path="/home" element={<HomePage />} />
            <Route path="*" element={<ErrorPage />} />
        </Routes>
    )
}