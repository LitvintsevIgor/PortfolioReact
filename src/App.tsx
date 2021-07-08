import React, {useEffect, useState} from 'react';
import './App.scss';
import {Main} from "./main/Main";
import {Header} from "./header/Header";
import {About} from "./about/About";
import {Redirect, Route, Switch} from 'react-router-dom';
import {Portfolio} from "./portfolio/Portfolio";
import {AnimatePresence} from "framer-motion";
import {Contact} from './contact/Contact';
import {Helmet} from "react-helmet";


function App() {

    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

    useEffect(() => {
        if (mobileMenuOpen) {
            document.body.style.overflow = "hidden"
        } else {
            document.body.style.overflow = "visible"
            window.scrollTo(0,0)
        }
    }, [mobileMenuOpen])



    return (
        <div className="App">
            <Helmet>
                <title>Litvintsev</title>
                <meta name='viewport' content='initial-scale=1, viewport-fit=cover'/>
            </Helmet>
            <Header mobileMenuOpen={mobileMenuOpen} setMobileMenuOpen={setMobileMenuOpen}/>
            <AnimatePresence exitBeforeEnter>
                <Switch>
                    <Route path={"/main"} render={() => <Main/>}/>
                    <Route path={"/about"} render={() => <About/>}/>
                    <Route path={"/portfolio"} render={() => <Portfolio/>}/>
                    <Route path={"/contact"} render={() => <Contact/>}/>
                    <Redirect from={'/'} to={"/main"}/>
                </Switch>
            </AnimatePresence>
        </div>
    );
}

export default App;
