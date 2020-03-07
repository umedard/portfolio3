import React from 'react'
import style from './footer.module.css'

export default function Footer() {
    return (
        <footer>
            <div className={style.footer__wrapper}>
                <div>
                    <div className={style.footer__messsage}>Say hi!</div>
                    <div className={style.footer__email}><a className={style.footer__link} href="mailto:umedard@gmail.com">umedard@gmail.com</a></div>
                </div>
                
            </div>
            <div className={style.footer__copyright}>Copyright © 2020 Medard Urban</div>
        </footer>
    )
}
