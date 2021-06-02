import React from "react";
import style from "./About.module.css"
import photoAva from "./../images/photoAva.jpeg"
import download from "./../images/download.svg"
import Typewriter from "typewriter-effect";
import {motion} from "framer-motion";
import {SectionTitle} from "../common/SectionTitle/SectionTitle";

export const leftBlockVariants = {
    in: {
        opacity: 1,
        x: 0
    },
    out: {
        opacity: 0,
        x: "-100%"
    }
}
export const rightBlockVariants = {
    in: {
        opacity: 1,
        x: 0
    },
    out: {
        opacity: 0,
        x: "+100%"
    }
}

export const blockTransition = {
    duration: 1
}

export const About = () => {
    return (
        <div className={style.about}>
            <div className={style.container}>
                {/*<div className={style.test}></div>*/}
                <SectionTitle allTitle={`About me`} partOFTitle={` me`} deleteChars={3}/>
                <div className={style.mainInfo}>
                    <motion.div className={style.personalInfo} initial="out" exit="out" animate="in" variants={leftBlockVariants} transition={blockTransition}>
                        <h2>Personal info</h2>
                        <div className={style.dataAboutMe} >
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
                    </motion.div>
                    <motion.div className={style.photo} initial="out" exit="out" animate="in" variants={rightBlockVariants} transition={blockTransition}>
                        <img src={photoAva} alt=""/>
                    </motion.div>
                </div>
            </div>

        </div>
    )
}