import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Login from './Login'
import Browse from './Browse'


function Body () {
  return (
    <>
    <Routes>
        <Route path="/" element={<Login/>}/>
        <Route path="/browse" element={<Browse/>}/>
    </Routes>
    </>

  )
}

export default Body