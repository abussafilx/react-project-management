import { Routes, Route } from "react-router-dom"
import Navbar from "./components/Navbar"
import HomePage from "./pages/Homepage"
import ProjectListPage from "./pages/ProjectListPage"
import CreateProjectPage from "./pages/CreateProjectPage"

function App() {
  

  return (
    <>

      <Navbar></Navbar>

      <Routes>
        <Route path="/" element={<HomePage/>} />
        <Route path="/projects" element={<ProjectListPage></ProjectListPage>} />
        <Route path="/projects/create" element={<CreateProjectPage/>} />
       
      </Routes>

      
    </>
  )
}

export default App
