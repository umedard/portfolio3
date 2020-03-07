import React from 'react'
import Footer from './footer'
import Header from './header'
import './layout.css'
import style from './layout.module.css'

export default function Layout({children}) {
  return (
    <>
      <Header/>
         <main className={style.layout}>{children}</main>
      <Footer/>
    </>
  )
}
