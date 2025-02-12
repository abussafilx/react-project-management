import { Routes, Route } from "react-router-dom"
import Navbar from "./components/navbar"
import HomePage from "./pages/Homepage"

function App() {
  

  return (
    <>

      <Navbar></Navbar>

      <Routes>
        <Route path="/" element={<HomePage/>} />
        <Route path="/projects" element={<p>Project List Page</p>} />
      </Routes>

      
    </>
  )
}

export default App
