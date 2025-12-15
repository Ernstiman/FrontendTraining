import { useEffect, useState } from 'react'
import './App.css'
import Menu from './Menu'
import Header from './Header'
import './Menu.css'
import {Routes, Route, BrowserRouter } from 'react-router-dom';
import FrågaTaesk from './FrågaTaesk'

function App() {


  return (
    <>  
    
    <BrowserRouter>
      <Header></Header>
      <Routes>
        <Route path='/' element={<Menu/>}/>
        <Route path='/FrågaTaesk' element={<FrågaTaesk/>}/>
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
