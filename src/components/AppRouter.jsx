import React, { useContext } from 'react'
import { Route, Routes } from 'react-router-dom'
import { AuthContext } from './../context/index'
import { Navbar } from './../UI/navbar/Navbar'
import { About } from './../pages/About'
import { Posts } from './../pages/Posts'
import { Post } from '../pages/Post'
import { Login } from './../pages/Login'

export const AppRouter = () => {
  const { isAuth } = useContext(AuthContext)

  return (
    <>
      {isAuth ? (
        <>
          <Navbar />
          <Routes>
            <Route path='*' element={<About />} />
            <Route path='posts' element={<Posts />} />
            <Route path='posts/:postId' element={<Post />} />
          </Routes>
        </>
      ) : (
        <Routes>
          <Route path='*' element={<Login />} />
        </Routes>
      )}
    </>
  )
}
