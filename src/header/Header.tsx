import React from "react";
import {NavLink} from "react-router-dom";
import style from "./Header.module.css"

export const Header = () => {
    return (
        <div className={style.header}>
            <ul className={style.iconMenu}>
                <NavLink to={"/main"}>
                    <li className={style.iconBox}>
                        <i className={style.iconHome}/>
                        <a href="#">
                            <h2>Home</h2>
                        </a>
                    </li>
                </NavLink>
                <NavLink to={"/about"}>
                    <li className={style.iconBox}>
                        <i className={style.iconAbout}/>
                        <a href="#">
                            <h2>About</h2>
                        </a>
                    </li>
                </NavLink>
                <NavLink to={"/portfolio"}>
                    <li className={style.iconBox}>
                        <i className={style.iconPortfolio}/>
                        <a href="#">
                            <h2>Portfolio</h2>
                        </a>
                    </li>
                </NavLink>
                <NavLink to={"/contact"}>
                    <li className={style.iconBox}>
                        <i className={style.iconContact}/>
                        <a href="#">
                            <h2>Contact</h2>
                        </a>
                    </li>
                </NavLink>
            </ul>
        </div>
    )
}