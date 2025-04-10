import React from 'react'

import Fpage from './Fpage'
import Portfolio from './Portfolio'
import About from './About'
import Contactme from './Contactme'
import Lastsec from './lastsec'
import Navbar from './Navbar'
import { Outlet } from 'react-router-dom'
export default function layout() {
  return (
    <>
      <Navbar/>
    <div className="mt-28">
        <Outlet></Outlet>
    </div>
    <Lastsec/>
    </>
  )
}
