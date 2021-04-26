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
        </div>
    )
}