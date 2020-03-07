import React from 'react'
import style from './skillHeader.module.css'

export default function SkillHeader({title}) {
  return (
  <h1 className={style.header}>{title}</h1>
  )
}

