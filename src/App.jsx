import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './modules/Navbar'
import React from 'react'
import Fpage from './modules/Fpage'
import Portfolio from './modules/Portfolio'
import About from './modules/About'
import Contactme from './modules/Contactme'
import Lastsec from './modules/lastsec'
import Layout from './modules/layout'
import Errorpage from './modules/Errorpage'
import { createBrowserRouter, RouterProvider , NavLink } from 'react-router-dom'

function App() {

 let Brouter= createBrowserRouter([
    {path:'' ,element:<Layout/> ,children:[
      {index:true,element:<Fpage/>},
      {path:'contact',element:<Contactme/>},
      {path:'About',element:<About/>},
      {path:'Portfolio',element:<Portfolio/>},
      {path:'*',element:<Errorpage/>}
    ]}
  ])
  return (
    <>
    <RouterProvider router={Brouter}></RouterProvider>
    </>
  )
}

export default App
