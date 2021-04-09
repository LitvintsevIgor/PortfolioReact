import React from "react";
import style from "./Header.module.css"

export const Header = () => {
    return (
        <div className={style.header}>
            <ul className={style.iconMenu}>
                <li className={style.iconBox}>
                    <i className={style.iconHome}></i>
                    <a href="#"></a>
                </li>
                <li className={style.iconBox}>
                    <i className={style.iconAbout}></i>
                    <a href="#"></a>
                </li>
                <li className={style.iconBox}>
                    <i className={style.iconPortfolio}></i>
                    <a href="#"></a>
                </li>
                <li className={style.iconBox}>
                    <i className={style.iconContact}></i>
                    <a href="#"></a>
                </li>
            </ul>
        </div>
    )
}