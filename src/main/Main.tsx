import React from "react";
import style from "./Main.module.css"
import Typewriter from "typewriter-effect";
import {motion} from "framer-motion";

export const pageVariants = {
    in: {
        opacity: 1,
        // y: 0
    },
    out: {
        opacity: 0,
        // y: "-100%"
    }
}

export const pageTransition = {
    duration: 1
}

export const Main = () => {
    return (
        <motion.div className={style.main} initial="out" exit="out" animate="in" variants={pageVariants} transition={pageTransition}>
            <div className={style.nameOfBlock}>
                <Typewriter
                    options={{
                        autoStart: true,
                        loop: true,
                        delay: 140,
                        skipAddStyles: true,
                        wrapperClassName: `nameOfBlock`
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
            {/*<h1>Hi, I am Igor Litvintsev</h1>*/}
            <div className={style.socialLinks}>
                <ul>
                    <li>
                        <a href="#">
                            <i className={style.iconGit}/>
                        </a>
                    </li><li>
                        <a href="#">
                            <i className={style.iconFb}/>
                        </a>
                    </li><li>
                        <a href="#">
                            <i className={style.iconInst}/>
                        </a>
                    </li>
                </ul>
            </div>
        </motion.div>
    )
}