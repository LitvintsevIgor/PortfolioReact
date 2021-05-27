import React from 'react';
import './App.css';
import {Main} from "./main/Main";
import {Header} from "./header/Header";
import {About} from "./about/About";
import { Route } from 'react-router-dom';
import {Portfolio} from "./portfolio/Portfolio";
import {AnimatePresence, motion} from "framer-motion";



function App() {
  return (
    <div className="App">
        <Header/>
        <AnimatePresence exitBeforeEnter>
            <Route path={"/main"} render={() => <Main/>}/>
            <Route path={"/about"} render={() => <About/>}/>
            <Route path={"/portfolio"} render={() => <Portfolio/>}/>
        </AnimatePresence>
    </div>
  );
}

export default App;
