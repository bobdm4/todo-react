import React, { useState } from 'react'
import { BrowserRouter } from 'react-router-dom'
import './styles/App.css'
import { AuthContext } from './context/index'
import { AppRouter } from './components/AppRouter'

function App() {
  const [isAuth, setIsAuth] = useState(false)
  return (
    <AuthContext.Provider
      value={{
        isAuth,
        setIsAuth,
      }}
    >
      <BrowserRouter>
        <AppRouter />
      </BrowserRouter>
    </AuthContext.Provider>
  )
}

export default App
