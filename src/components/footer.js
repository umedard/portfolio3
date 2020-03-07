import React from 'react'
import style from './footer.module.css'

export default function Footer() {
    return (
        <footer>
            <div className={style.footer__wrapper}>
                <div>
                    <div className={style.footer__messsage}>Say hi!</div>
                    <div className={style.footer__email}>umedard@gmail.com</div>
                </div>
                
            </div>
            
            <div className={style.footer__copyright}>Footer</div>
            
        </footer>
    )
}
