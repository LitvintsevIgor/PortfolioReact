import React, {useState} from "react";
import {NavLink} from "react-router-dom";
import style from "./Header.module.scss"
import iconHome from './../images/forNavbar/home.svg'
import iconletter from './../images/forNavbar/letter.svg'
import iconSuitcase from './../images/forNavbar/suitcase.svg'
import iconUser from './../images/forNavbar/user.svg'

type HeaderType = {
    mobileMenuOpen: boolean
    setMobileMenuOpen: (value: boolean) => void
}

export const Header = (props: HeaderType) => {

    let links = [
        {icon: iconHome, name: "Home", path: "/main", style: style.iconHome},
        {icon: iconUser, name: "About", path: "/about", style: style.iconAbout},
        {icon: iconSuitcase, name: "Portfolio", path: "/portfolio", style: style.iconPortfolio},
        {icon: iconletter, name: "Contact", path: "/contact", style: style.iconContact},
    ]

    // const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

    return (
        <div className={style.header}>
            <div className={props.mobileMenuOpen ? `${style.burgerWrapper} + ${style.burgerActive}` : style.burgerWrapper} onClick={ () => props.setMobileMenuOpen(!props.mobileMenuOpen)}>
                <div className={props.mobileMenuOpen ? `${style.burger} + ${style.burgerActive}` : style.burger}>
                    <span></span>
                </div>
            </div>

            <ul className={ props.mobileMenuOpen ? `${style.iconMenu} + ${style.iconMenuActive}` : style.iconMenu}>
                {
                    links.map((l) => {
                        return (
                            <NavLink to={l.path} onClick={ () => props.setMobileMenuOpen(!props.mobileMenuOpen)}>
                                <li className={style.iconBox}>
                                    <a className={style.iconLink} href="#">
                                        <div className={style.buttonText}>{l.name}</div>
                                        <div className={style.icon}>
                                                <img src={l.icon} alt=""/>
                                        </div>
                                    </a>
                                </li>
                            </NavLink>
                        )
                    })
                }
            </ul>
        </div>
    )

    // Старый код, которые работали до бургера
    // return (
    //     <div className={style.header}>
    //         <div className={style.burgerWrapper}>
    //             <div className={style.burger}>
    //                 <span></span>
    //             </div>
    //         </div>
    //
    //         <ul className={style.iconMenu}>
    //             {
    //                 links.map((l) => {
    //                     return (
    //                         <NavLink to={l.path}>
    //                             <li className={style.iconBox}>
    //                                 <a className={style.iconLink} href="#">
    //                                     <div className={style.buttonText}>{l.name}</div>
    //                                     <div className={style.icon}>
    //                                         <img src={l.icon} alt=""/>
    //                                     </div>
    //                                 </a>
    //                             </li>
    //                         </NavLink>
    //                     )
    //                 })
    //             }
    //         </ul>
    //     </div>
    // )

}
