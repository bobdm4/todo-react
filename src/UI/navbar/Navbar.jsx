import React from 'react'
import { Link } from 'react-router-dom'

export const Navbar = () => {
  return (
    <div className='navbar'>
      <Link to='/' className='navbar__link'>
        О сайте
      </Link>
      <Link to='posts' className='navbar__link'>
        Посты
      </Link>
    </div>
  )
}
