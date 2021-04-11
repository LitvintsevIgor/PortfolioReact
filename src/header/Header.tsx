import React from "react";
import style from "./Header.module.css"

export const Header = () => {
    return (
        <div className={style.header}>
            <ul className={style.iconMenu}>
                <li className={style.iconBox}>
                    <i className={style.iconHome}></i>
                    <a href="#">
                        <h2>Home</h2>
                    </a>
                </li>
                <li className={style.iconBox}>
                    <i className={style.iconAbout}></i>
                    <a href="#">
                        <h2>About</h2>
                    </a>
                </li>
                <li className={style.iconBox}>
                    <i className={style.iconPortfolio}></i>
                    <a href="#">
                        <h2>Portfolio</h2>
                    </a>
                </li>
                <li className={style.iconBox}>
                    <i className={style.iconContact}></i>
                    <a href="#">
                        <h2>Contact</h2>
                    </a>
                </li>
            </ul>
        </div>
    )
}