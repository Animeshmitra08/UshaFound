import './App.css'

import Appbar from './components/Appbar'
import AboutUs from './Pages/AboutUs';
import Causes from './Pages/Causes';
import ContactUs from './Pages/ContactUs';
import LandingPage from './Pages/LandingPage'

import { Routes, Route, Navigate } from "react-router-dom";

function App() {

  return (
    <>  
      <Appbar/>
      <Routes>
        <Route path='/' element={<LandingPage/>}/>
        <Route path='/about' element={<AboutUs/>}/>        
        <Route path='/contact' element={<ContactUs/>}/>    
        <Route path='/initiatives' element={<Causes/>}/>
        <Route path='*' element={<Navigate to='/' replace/>}/>
      </Routes>  
    </>
  )
}

export default App
