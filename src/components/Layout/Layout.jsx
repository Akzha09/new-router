import React from 'react'
import Heder from '../Heder/Heder'
import Footer from '../Footer/Footer'
import { Outlet } from 'react-router-dom'


function Layout() {
  return (
    <div>
      <Heder/>
      <Outlet/>
      <Footer/>
    </div>
  )
}

export default Layout
