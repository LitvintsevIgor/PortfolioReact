import React from 'react';
import './App.css';
import {Main} from "./main/Main";
import {Header} from "./header/Header";
import {About} from "./about/About";
import { Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
        <Header/>
        <Route path={"/main"} render={() => <Main/>}/>
        <Route path={"/about"} render={() => <About/>}/>
    </div>
  );
}

export default App;
