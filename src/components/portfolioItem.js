import React from 'react'
import style from './portfolioItem.module.css'


export default function PortfolioItem({picture, title, description, github, url}) {
    return (
        <section className={style.portfolio}>
           
            <div className={style.portfolio__picture} style={{backgroundImage: `url(${picture})`}}>
                <div className={style.hover}>
                      
                </div>
            </div>
            <h2 className={style.portfolio__title}>{title}</h2>
            <div className={style.portfolio__description}>{description}</div>
            
        </section>
    )
}


