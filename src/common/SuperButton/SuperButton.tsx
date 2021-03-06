import React from "react";
import style from './SuperButton.module.css'

type SuperButtonPropsType = {
    text: string
    icon: any
    path?: string
}

export const SuperButton: React.FC<SuperButtonPropsType> = ({text, icon, path}) => {
    return (
        <div  className={style.btnWrapper}>
            <a href={path}>
                <span className={style.buttonText}>{text}</span>
                <span className={style.icon}>
                    <img src={icon} alt=""/>
                </span>
            </a>
        </div>
    )
}