import { Route, Routes } from "react-router-dom"
import Index from './Pages/Index'
import About from './Pages/About'
import Project from './Pages/Project'
import Contact from './Pages/Contact'
import Error from './Pages/Error'
import { Navbar } from "./Components/Navbar"


function App() {

  return (
    <div className="bg-black font-sans h-100vh">
      <Navbar />
      
      <Routes>
        <Route path="/" element={ <Index /> } />
        <Route path="/about" element={ <About />} />
        <Route path="/contact" element={ <Contact />} />
        <Route path="/portfolio" element={ <Project />} />
        <Route path="*" element={ <Error/> } />
      </Routes>
    </div>
  )
}

export default App
