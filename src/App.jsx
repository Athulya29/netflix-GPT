import { useState } from 'react'
import { BrowserRouter } from "react-router-dom";
import './App.css'
import Body from './components/Body'

function App() {
 
  return (
    <>
    <BrowserRouter>
      <Body />
    </BrowserRouter>
    </>
  )
}

export default App
