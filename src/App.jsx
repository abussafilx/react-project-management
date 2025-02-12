import { Routes, Route } from "react-router-dom"
import Navbar from "./components/Navbar"
import HomePage from "./pages/Homepage"
import ProjectListPage from "./pages/ProjectListPage"

function App() {
  

  return (
    <>

      <Navbar></Navbar>

      <Routes>
        <Route path="/" element={<HomePage/>} />
        <Route path="/projects" element={<ProjectListPage></ProjectListPage>} />
      </Routes>

      
    </>
  )
}

export default App
