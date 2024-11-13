import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Navbar from "./components/navbar/Navbar"
import NotFound from './pages/NotFound'
import Registration from './pages/Registration'

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/registration' element={<Registration />} />
        <Route path='*' element={<NotFound />} />
      </Routes>

    </>
  )
}

export default App
