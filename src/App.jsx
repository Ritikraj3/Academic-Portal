import { BrowserRouter, Route, Routes } from 'react-router-dom'
import PersonalData from './pages/PersonalData'
import './App.css'
import CGPA from './pages/CGPA'
import Courses from './pages/Courses'
import Dashboard from './components/Dashboard'
import Assignment from './pages/Assignment'

function App() {

  return (
    <>
      <BrowserRouter>
    <div>
      <Dashboard />
        <Routes>
           <Route path="/" element={<PersonalData/>} /> 
           <Route path="/courses" element={<Courses/>} /> 
           <Route path="/assignment" element={< Assignment/>} /> 
           <Route path="/cgpa" element={<CGPA/>} /> 
        </Routes>
    </div>
    </BrowserRouter>
    </>
  )
}

export default App
