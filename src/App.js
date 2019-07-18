import React, { Component } from "react";
import logo from './logo.svg';
import './App.css';
import {
  Route,
  NavLink,
  HashRouter
} from "react-router-dom";
import SearchPage from './SearchPage.js'
import Player from './Container/Player.js'
import Author from './Author.js'
import{bounce} from 'react-animations';
import styled, {keyframes} from 'styled-components';
// import Preferences from './Container/Preferences.js/index.js'

const Bounce = styled.div `animation: 2s ${keyframes`${bounce}`} infinite`;
function App(){
  return (
    <div className="App">
      <header className="App-header">
        
        <img src={logo} className="App-logo" alt="logo" />
        <HashRouter>
        <div>
          <Bounce><h1>MusicBass</h1></Bounce>
          <ul className="header">
            <li><NavLink to="/">Search</NavLink></li>
            <li><NavLink to="/button">Button</NavLink></li>
            <li><NavLink to="/author">Author</NavLink></li>
            {/* <li><NavLink to="/Preferences">Preferences</NavLink></li> */}
          </ul>
          <div className="content">
            <Route path="/" component={SearchPage}/>
            <Route path="/button" component={Player}/>
            <Route path="/author" component={Author}/>
            {/* <Route path="/Preferences" component={Preferences}/> */}
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
