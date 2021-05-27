import React from "react";
import {Swiper, SwiperSlide} from 'swiper/react';
import SwiperCore, {Pagination, Navigation, Keyboard} from 'swiper';
import dashboard from './../images/forSlider/dashboard.svg';
import meeting from './../images/forSlider/meeting.svg';
import todo from './../images/forSlider/todo.svg';
import 'swiper/swiper-bundle.css';
import style from "./Portfolio.module.css"
import Typewriter from 'typewriter-effect';
import {motion} from "framer-motion";
import './Portfolio.css';


// install Swiper modules
SwiperCore.use([Pagination, Navigation, Keyboard]);


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
    duration: 2
}

export const Portfolio = () => {


    // let slides = [dashboard, meeting, todo]

    let slides = [{pic: dashboard, name: "Some project"},
        {pic: meeting, name: "Social Network"},
        {pic: todo, name: "Todo List"}]


    return (
        <div className={style.portfolioWrapper} >
            <div className={style.container}>
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
                            typewriter.typeString(`Work I have done`)
                                .callFunction(() => {
                                    console.log('String typed out!');
                                })
                                .pauseFor(2500)
                                .deleteChars(12)
                                .pauseFor(2500)
                                .typeString(` I have done`)
                                .pauseFor(2500)
                                .deleteChars(12)
                                .pauseFor(2500)
                                .typeString(` I have done`)
                                .pauseFor(2500)
                                .callFunction(() => {
                                    console.log('All strings were deleted');
                                })
                                .start();
                        }}
                    />

                </div>
                <motion.div initial="out" exit="out" animate="in" variants={pageVariants} transition={pageTransition}>
                    <Swiper tag={"section"}
                            wrapperTag={"ul"}
                            navigation
                            keyboard={{
                                "enabled": true
                            }}
                            pagination={{
                                "clickable": true
                            }}
                            spaceBetween={0}
                            slidesPerView={1}
                    >
                        {slides.map(el => {
                            return (
                                <div className={style.test}>
                                    <SwiperSlide tag={"li"}>
                                        <div className={style.svgWrap}>
                                            <img src={el.pic} alt=""
                                                 style={{listStyle: "none"}}
                                            />
                                            <h2>{el.name}</h2>
                                            <div>
                                                <a href="">git</a>
                                                <a href="">demo</a>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                </div>

                            )
                        })}

                    </Swiper>
                </motion.div>


            </div>

        </div>
    )
}