import React, { useContext } from 'react'
import { MyButton } from '../UI/button/MyButton'
import { MyInput } from './../UI/input/MyInput'
import { AuthContext } from './../context/index'

export const Login = () => {
  const { setIsAuth } = useContext(AuthContext)
  const login = event => {
    event.preventDefault()
    setIsAuth(true)
  }
  return (
    <div>
      <h1>Страница авторизации</h1>
      <form onSubmit={login}>
        <MyInput type='text' placehlder='Введите логин' />
        <MyInput type='password' placehlder='Введите пароль' />
        <MyButton>Войти</MyButton>
      </form>
    </div>
  )
}
