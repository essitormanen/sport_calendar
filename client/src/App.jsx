import { useState } from 'react'
import './App.css'
import Navbar from './components/navBar.jsx'
import {Route, Routes, Link} from 'react-router-dom'

import Calendar from './components/Calendar.jsx'
import AddEvent from './components/AddEvent.jsx'

function App() {

  return (
    <>  
      <h1> Sport Calendar </h1>
      <Navbar> </Navbar>
      <Routes>
           <Route path='/' element={<Calendar/>}/> 
           <Route path ='/addEvent' element={<AddEvent/>}/> 
        
      </Routes>
      <Calendar> </Calendar>
    </>
  )
}

export default App
