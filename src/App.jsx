import { Routes, Route } from "react-router-dom"
import LoginPage from './pages/LoginPage'
import ErrorPage from './pages/ErrorPage'

function App() {

  return (
    <Routes>
      <Route path="/" element={<LoginPage/>}/>
      <Route path="*" element={<ErrorPage/>}/>
    </Routes>
  )
}

export default App
