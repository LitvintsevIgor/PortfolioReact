import React from "react";
import style from "./Main.module.scss"
import Typewriter from "typewriter-effect";
import {motion} from "framer-motion";
import gitIcon from '../images/forMain/gitMain.svg'
import fbIcon from './../images/forMain/fbMain.svg'
import instIcon from './../images/forMain/instMain.svg'


const icons = [{icon: gitIcon, link: "https://github.com/LitvintsevIgor"}, {icon: fbIcon, link: "https://www.facebook.com/igor.litvintsev.5"}, {icon: instIcon, link: "https://www.instagram.com/litvintsev_igor"}]

export const pageVariants = {
    in: {
        opacity: 1
    },
    out: {
        opacity: 0
    }
}

export const pageTransition = {
    duration: 1
}

export const Main = () => {
    return (
        <motion.div className={style.main} initial="out" exit="out" animate="in" variants={pageVariants} transition={pageTransition}>
            <div className={style.title}>
                <Typewriter
                    options={{
                        autoStart: true,
                        loop: true,
                        delay: 140,
                        skipAddStyles: true
                    }}
                    onInit={(typewriter) => {
                        typewriter.typeString(`Hi, I am Igor Litvintsev`)
                            .callFunction(() => {
                                console.log('String typed out!');
                            })
                            .pauseFor(2500)
                            .deleteChars(16)
                            .pauseFor(500)
                            .typeString(` frontend developer`)
                            .pauseFor(2500)
                            .deleteChars(19)
                            .pauseFor(500)
                            .typeString(` Igor Litvintsev`)
                            .pauseFor(2500)
                            .callFunction(() => {
                                console.log('All strings were deleted');
                            })
                            .start();
                    }}
                />
            </div>
            <div className={style.socialLinks}>
                <ul>
                    {
                        icons.map( (i) => {
                            return (
                                <li>
                                    <a href={i.link}>
                                        <img src={i.icon} alt=""/>
                                    </a>
                                </li>
                            )
                        } )
                    }
                </ul>
            </div>
        </motion.div>
    )
}