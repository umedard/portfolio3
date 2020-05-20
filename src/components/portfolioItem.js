import React from "react"
import style from "./portfolioItem.module.css"

export default function PortfolioItem({
  picture,
  title,
  description,
  github,
  url,
}) {
  return (
    <section className={style.portfolio}>
      <h1 className={style.portfolio__title}>{title}</h1>
      <div className={style.portfolio__picture}>
        <div className={style.hover}>
          <div className={style.hover__wrapper}>
            <span className={style.portfolio__description}>
              Tech stack: {description}
            </span>
          </div>
        </div>
      </div>
      <div className={style.portfolio__links}>
        <a
          className={style.portfolio__github}
          href={github}
          target="_blank"
          rel="noopener noreferrer"
        >
          Github
        </a>
        <a
          className={style.portfolio__live}
          href={url}
          target="_blank"
          rel="noopener noreferrer"
        >
          Live site
        </a>
      </div>
    </section>
  )
}
