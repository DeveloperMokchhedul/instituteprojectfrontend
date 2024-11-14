import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Navbar from "./components/navbar/Navbar"
import NotFound from './pages/NotFound'
import Registration from './pages/Registration'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Signin from './pages/Signin'
import Profile from './pages/Profile'
import Dashboard from './pages/Dashboard'
import Books from './pages/Books'
import SingleBook from './pages/SingleBook'

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/registration' element={<Registration />} />
        <Route path='/signin' element={<Signin />} />
        <Route path='/profile' element={<Profile />} />
        <Route path='/books' element={<Books />} />
        <Route path='/books/:id' element={<SingleBook />} />
        <Route path='/dashboard' element={<Dashboard />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
      <ToastContainer />

    </>
  )
}

export default App
