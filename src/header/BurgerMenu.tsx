import React from "react";
import style from "./Header.module.scss"
import iconHome from './../images/forNavbar/home.svg'
import iconletter from './../images/forNavbar/letter.svg'
import iconSuitcase from './../images/forNavbar/suitcase.svg'
import iconUser from './../images/forNavbar/user.svg'

export const Header = () => {

    let links = [
        {icon: iconHome, name: "Home", path: "/main", style: style.iconHome},
        {icon: iconUser, name: "About", path: "/about", style: style.iconAbout},
        {icon: iconSuitcase, name: "Portfolio", path: "/portfolio", style: style.iconPortfolio},
        {icon: iconletter, name: "Contact", path: "/contact", style: style.iconContact},
    ]

    return (
            <div className={style.burgerWrapper}>
                <div className={style.burger}>
                    <span></span>
                </div>
            </div>
    )
}
