import React from 'react'
import style from './skillBar.module.css'

export default function SkillBar({percent, skill}) {
  return (
    <div> 
      {/* skill bar */}
      <div>{percent}</div>
      <p>{skill}</p>
    </div>
  
  )
}