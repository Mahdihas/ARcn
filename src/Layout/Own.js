import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../component/Navbar'

const Own = () => {
  return (
      <div>
          
          <Navbar></Navbar>
          <Outlet></Outlet>

    </div>
  )
}

export default Own