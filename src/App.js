import React, { Component } from "react";
import logo from './logo.svg';
import './App.css';
import {
  Route,
  NavLink,
  HashRouter
} from "react-router-dom";
import SearchPage from './SearchPage.js'
import Player from './Player.js'
import Author from './Author.js'


function App(){
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <HashRouter>
        <div>
          <h1>Musicbass</h1>
          <ul className="header">
            <li><NavLink to="/">Search</NavLink></li>
            <li><NavLink to="/button">Button</NavLink></li>
            <li><NavLink to="/contact">Contact</NavLink></li>
          </ul>
          <div className="content">
            <Route path="/" component={SearchPage}/>
            <Route path="/button" component={Player}/>
            <Route path="/contact" component={Author}/>
          </div>
          <div className="content">
             
          </div>
        </div>
        </HashRouter>
      </header>
    </div>
  );
}

export default App;
