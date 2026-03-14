import { Routes, Route } from "react-router-dom"
import LoginPage from '../pages/LoginPage'
import HomePage from "../pages/HomePage"
import ConfigPage from "../pages/ConfigPage"
import PreviewPage from "../pages/PreviewPage"
import ErrorPage from '../pages/ErrorPage'

export default function Rotas() {
    return (
        <Routes>
            <Route path="/" element={<LoginPage />} />
            <Route path="/home" element={<HomePage />} />
            <Route path="/preview" element={<PreviewPage />} />
            <Route path="/config" element={<ConfigPage />} />
            <Route path="*" element={<ErrorPage />} />
        </Routes>
    )
}