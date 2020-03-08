import React from 'react'
import style from './portfolio.module.css'

export default function Portfolio({children}) {
    return (
        <section className={style.portfolio}>
            {children}
        </section>
    )
}
