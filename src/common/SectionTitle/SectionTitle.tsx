import Typewriter from "typewriter-effect";
import React from "react";
import style from './SectionTitle.module.scss';
import './Typewriter.scss'


export type SectionTitleType = {
    allTitle: string
    partOFTitle: string
    deleteChars: number
}

export const SectionTitle = (props: SectionTitleType) => {
    return (
        <div className={style.sectionTitle}>
            <Typewriter
                options={{
                    autoStart: true,
                    loop: true,
                    delay: 140,
                    skipAddStyles: true,
                    wrapperClassName: `sectionTitle`
                }}
                onInit={(typewriter) => {
                    typewriter.typeString(props.allTitle)
                        .callFunction(() => {
                            console.log('String typed out!');
                        })
                        .pauseFor(2500)
                        .deleteChars(props.deleteChars)
                        .pauseFor(2500)
                        .typeString(props.partOFTitle)
                        .pauseFor(2500)
                        .deleteChars(props.deleteChars)
                        .pauseFor(2500)
                        .typeString(props.partOFTitle)
                        .pauseFor(2500)
                        .callFunction(() => {
                            console.log('All strings were deleted');
                        })
                        .start();
                }}
            />

        </div>
    )
}