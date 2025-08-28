import React from 'react'
import { Outlet } from 'react-router-dom'
import { Footer, Footer1, Header } from './Components'

function Layout() {
  return (
    <div>
      <Header />
        
      <Outlet />

      <Footer1 />
      <Footer />
    </div>
  )
}

export default Layout