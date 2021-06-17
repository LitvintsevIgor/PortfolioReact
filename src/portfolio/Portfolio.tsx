import React from "react";
import {Swiper, SwiperSlide} from 'swiper/react';
import SwiperCore, {Pagination, Navigation, Keyboard} from 'swiper';
import dashboard from './../images/forSlider/dashboard.svg';
import meeting from './../images/forSlider/meeting.svg';
import todo from './../images/forSlider/todo.svg';
import 'swiper/swiper-bundle.css';
import style from "./Portfolio.module.scss"
import {motion} from "framer-motion";
import './Portfolio.scss';
import {SectionTitle} from "../common/SectionTitle/SectionTitle";
// install Swiper modules
SwiperCore.use([Pagination, Navigation, Keyboard]);


export const pageVariants = {
    in: {
        opacity: 1,
    },
    out: {
        opacity: 0,
    }
}

export const pageTransition = {
    duration: 2
}

export const Portfolio = () => {

    let slides = [{pic: dashboard, name: "Some project"},
        {pic: meeting, name: "Social Network"},
        {pic: todo, name: "Todo List"}]

    return (
        <div className={style.portfolio}>
            <div className={style.container}>
                <SectionTitle allTitle={`Work I have done`} partOFTitle={` I have done`} deleteChars={12}/>
                <motion.div initial="out" exit="out" animate="in" variants={pageVariants} transition={pageTransition}
                            className={style.wrapperTest}>
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
