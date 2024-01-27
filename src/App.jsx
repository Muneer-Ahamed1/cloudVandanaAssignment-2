import React from 'react'
import ValidationPage,{ValidationDescription } from './pages/ValidationPage'
import Header from './pages/Header'

import { Outlet } from 'react-router-dom'
function App() {
  return (
    <div className="App container">
      <Header/>
      <ValidationDescription/>
      <Outlet></Outlet>

    </div>
  )
}

export default App