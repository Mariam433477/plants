import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { Outlet } from 'react-router-dom'
import DarkNavBar from '../components/DarkNavBar'

export default function SharedLayout() {
  return (
     <>
      <DarkNavBar />
      <Outlet/>
      <Footer/>
     </>
  )
}
