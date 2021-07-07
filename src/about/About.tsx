import React from "react";
import style from "./About.module.scss"
import commonContainer from "./../common/styles/Container.module.css"
import download from "./../images/download.svg"
import {motion} from "framer-motion";
import {SectionTitle} from "../common/SectionTitle/SectionTitle";
import {SuperButton} from "../common/SuperButton/SuperButton";
import { Link } from "react-router-dom";
// @ts-ignore
import menu from "../common/menu.pdf";

const info = [
    {point: "First Name:", myData: " Igor"},
    {point: "Last Name:", myData: " Litvintsev"},
    {point: "Age:", myData: " 27"},
    {point: "Nationality:", myData: " Russian"},
    {point: "Freelance:", myData: " Available"},
    {point: "Address:", myData: " Voronezh"},
    {point: "Phone:", myData: " +79515642759"},
    {point: "Email:", myData: " litvincevi@mail.ru"},
    {point: "Skype:", myData: " Litvintsev.Igor"},
    {point: "Languages:", myData: " Russian, English"},
]

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
                <SectionTitle allTitle={`About me`} partOFTitle={` me`} deleteChars={3}/>
                <div className={style.mainInfo}>
                    <motion.div className={style.personalInfo} initial="out" exit="out" animate="in"
                                variants={leftBlockVariants} transition={blockTransition}>
                        <h2>Personal info</h2>
                        <div className={style.dataAboutMe}>
                            <ul>
                                {
                                    info.map((i) => {
                                        return (
                                            <li>
                                                <span>{i.point}</span>
                                                <span>{i.myData}</span>
                                            </li>)
                                    })
                                }
                            </ul>
                        </div>
                        <a href={menu} target="_blank" rel="noopener noreferrer" download>
                            <SuperButton text="Download CV" icon={download}/>
                        </a>
                    </motion.div>
                    <motion.div className={style.photo} initial="out" exit="out" animate="in"
                                variants={rightBlockVariants} transition={blockTransition}>
                    </motion.div>
                </div>
            </div>

        </div>
    )
}