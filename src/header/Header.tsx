import React from "react";
import {NavLink} from "react-router-dom";
import style from "./Header.module.css"
import iconHome from './../images/forNavbar/home.svg'
import iconletter from './../images/forNavbar/letter.svg'
import iconSuitcase from './../images/forNavbar/suitcase.svg'
import iconUser from './../images/forNavbar/user.svg'
import download from "../images/download.svg";

export const Header = () => {

    let links = [
        {icon: iconHome, name: "Home", path: "/main", style: style.iconHome},
        {icon: iconUser, name: "About", path: "/about", style: style.iconAbout},
        {icon: iconSuitcase, name: "Portfolio", path: "/portfolio", style: style.iconPortfolio},
        {icon: iconletter, name: "Contact", path: "/contact", style: style.iconContact},
    ]


    return (
        <div className={style.header}>
            <ul className={style.iconMenu}>
                {
                    links.map((l) => {

                        return (
                            <NavLink to={l.path}>
                                <li className={style.iconBox}>
                                    <a href="#">
                                        <span className={style.buttonText}>{l.name}</span>
                                        <span className={style.icon}>
                                            <img src={l.icon} alt=""/>
                                        </span>
                                    </a>
                                </li>
                            </NavLink>
                            // <NavLink to={l.path}>
                            //         <li className={style.iconBox}>
                            //             <i className={l.style}/>
                            //             <a href="#">
                            //                 <h2>{l.name}</h2>
                            //             </a>
                            //         </li>
                            //     </NavLink>
                        )
                    })
                }
            </ul>
        </div>
    )
}

// export const Header = () => {
//     return (
//         <div className={style.header}>
//             <ul className={style.iconMenu}>
//                 <NavLink to={"/main"}>
//                     <li className={style.iconBox}>
//                         <i className={style.iconHome}/>
//                         <a href="#">
//                             <h2>Home</h2>
//                         </a>
//                     </li>
//                 </NavLink>
//                 <NavLink to={"/about"}>
//                     <li className={style.iconBox}>
//                         <i className={style.iconAbout}/>
//                         <a href="#">
//                             <h2>About</h2>
//                         </a>
//                     </li>
//                 </NavLink>
//                 <NavLink to={"/portfolio"}>
//                     <li className={style.iconBox}>
//                         <i className={style.iconPortfolio}/>
//                         <a href="#">
//                             <h2>Portfolio</h2>
//                         </a>
//                     </li>
//                 </NavLink>
//                 <NavLink to={"/contact"}>
//                     <li className={style.iconBox}>
//                         <i className={style.iconContact}/>
//                         <a href="#">
//                             <h2>Contact</h2>
//                         </a>
//                     </li>
//                 </NavLink>
//             </ul>
//         </div>
//     )
// }