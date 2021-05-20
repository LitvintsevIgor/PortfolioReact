import React from "react";
import style from "./About.module.css"
import photoAva from "./../images/photoAva.jpeg"
import download from "./../images/icons8-download-24.png"

export const About = () => {

    // let aboutWrapper = style.about + " " + style.container

    return (
        <div className={style.about}>
            <div className={style.container}>
                <div className={style.test}></div>
                <h1>About me</h1>
                <div className={style.mainInfo}>
                    <div className={style.personalInfo}>
                        <h2>Personal info</h2>
                        <div className={style.dataAboutMe}>
                            <div className={style.firstColumn}>
                                <ul>
                                    <li>
                                        <span>First Name:</span>
                                        <span> Igor</span>
                                    </li>
                                    <li>
                                        <span>Last Name:</span>
                                        <span> Litvintsev</span>
                                    </li>
                                    <li>
                                        <span>Age:</span>
                                        <span> 27</span>
                                    </li>
                                    <li>
                                        <span>Nationality:</span>
                                        <span> Russian</span>
                                    </li>
                                    <li>
                                        <span>Freelance:</span>
                                        <span> Available</span>
                                    </li>
                                </ul>
                            </div>
                            <div className={style.secondColumn}>
                                <ul>
                                    <li>
                                        <span>Address:</span>
                                        <span> Voronezh</span>
                                    </li>
                                    <li>
                                        <span>Phone:</span>
                                        <span> +79515642759</span>
                                    </li>
                                    <li>
                                        <span>Email:</span>
                                        <span> litvincevi@mail.ru</span>
                                    </li>
                                    <li>
                                        <span>Skype:</span>
                                        <span> Litvintsev.Igor</span>
                                    </li>
                                    <li>
                                        <span>Langages:</span>
                                        <span> Russian, English</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className={style.somediv}>
                            <a href="#">
                                <span className={style.buttonText}>Download CV</span>
                                <span className={style.icon}>
                                    <img src={download} alt=""/>
                                </span>
                            </a>
                        </div>
                    </div>
                    <div className={style.photo}>
                        <img src={photoAva} alt=""/>
                    </div>
                </div>
            </div>

        </div>
    )
}