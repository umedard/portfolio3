import React from 'react'
import Footer from './footer'
import Header from './header'
import './layout.css'

export default function Layout({children}) {
  return (
    <>
      <Header/>
         <main>{children}</main>
      <Footer/>
    </>
  )
}
