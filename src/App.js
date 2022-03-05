import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './styles/App.css'
import { Navbar } from './UI/navbar/Navbar'
import { About } from './pages/About'
import { Posts } from './pages/Posts'
import { Post } from './pages/Post'

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='*' element={<About />} />
        <Route path='posts' element={<Posts />} />
        <Route path='posts/:postId' element={<Post />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
