import React from 'react'
import style from './skillBar.module.css'

export default function SkillBar({percent, skill}) {
  return (
    <div className={style.bar}> 
      <p className={style.bar__text}>{skill}</p>
      <p className={style.bar__indicator} style={{width: percent + "%"}}></p>
    </div>
  
  )
}