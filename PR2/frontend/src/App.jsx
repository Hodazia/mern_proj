import { useState } from 'react'
import './App.css'
import {Routes, Route} from 'react-router-dom';
import Home from './pages/Home'
import About from './pages/About'
import Signup from './pages/Signup'
import Login from './pages/Login'
import Blogs from './pages/Blogs'
import SingleBlog from './pages/SingleBlog'
import Contact from './pages/Contact'
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import { ToastContainer } from 'react-toastify'

function App() {

  return (
    <>
    <div className='max-w-7xl mx-auto'>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Signup />} />
        <Route path="/blog/:id" element={<SingleBlog />} />
      </Routes>
      <Footer />
      <ToastContainer />
    </div>
    </>
  )
}

export default App
