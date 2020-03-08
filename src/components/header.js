import React from 'react'
import {Link} from 'gatsby'
import style from './header.module.css'


export default function Header() {
  return (
    <header className={style.header}>
      <h1 className={style.header__title}>Medard Urban</h1>
      <h2 className={style.header__subtitle}>front-end developer</h2>
      <menu className={style.header__menu}>
        <HeaderLink to="/" title="projects"/>
        <HeaderLink to="/skills" title="skills"/>
      </menu>
    </header>
  )
}

 function HeaderLink({to, title}) {
  return (
      <Link className={style.header__link} to={to}>{title}</Link>
  )
}
