import React from 'react';
import './App.css';
import {Main} from "./main/Main";
import {Header} from "./header/Header";
import {About} from "./about/About";
import {Redirect, Route, Switch } from 'react-router-dom';
import {Portfolio} from "./portfolio/Portfolio";
import {AnimatePresence} from "framer-motion";
import { Contact } from './contact/Contact';



function App() {
  return (
    <div className="App">
        {/*<Header/>*/}
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
