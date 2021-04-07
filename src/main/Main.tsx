import React from "react";
import style from "./Main.module.css"

export const Main = () => {
    return (
        <div className={style.main}>
            <h1>Hi, I am Igor Litvintsev</h1>
            <div className={style.socialLinks}>
                <ul>
                    <li>
                        <a href="#">
                            <i className={style.iconGit}></i>
                        </a>
                    </li><li>
                        <a href="#">
                            <i className={style.iconFb}></i>
                        </a>
                    </li><li>
                        <a href="#">
                            <i className={style.iconInst}></i>
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    )
}