import { useState } from 'react'
import './App.css'
import Home from './pages/Home.jsx'
import Projects from './pages/Projects.jsx'
import Case from './pages/Case.jsx'
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  const [count, setCount] = useState(0)

  return (
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/case/:projectIndex" element={<Case />} />
      </Routes>
  )
}

export default App