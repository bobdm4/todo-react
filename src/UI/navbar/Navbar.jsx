import React, { useContext } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { MyButton } from '../button/MyButton'
import { AuthContext } from './../../context/index'

export const Navbar = () => {
  const { isAuth, setIsAuth } = useContext(AuthContext)
  const navigate = useNavigate()

  const logout = () => {
    setIsAuth(false)
    navigate('/')
  }
  return (
    <div className='navbar'>
      <MyButton onClick={logout}>Выйти</MyButton>
      <div>
        <Link to='/' className='navbar__link'>
          О сайте
        </Link>
        <Link to='posts' className='navbar__link'>
          Посты
        </Link>
      </div>
    </div>
  )
}
