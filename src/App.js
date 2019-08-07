import React, { Component } from "react";
import logo from './vinyl.svg';
import './App.css';
import {
  Route,
  NavLink,
  HashRouter
} from "react-router-dom";
import SearchPage from './Container/SearchPage.js'
import Player from './Container/Player.js'
import Author from './Author.js'
import Results from './Container/Results.js'
import{bounce} from 'react-animations';
import styled, {keyframes} from 'styled-components';
import Preferences from './Container/Preferences.js'

const Bounce = styled.div `animation: 2s ${keyframes`${bounce}`} infinite`;
function App(){
  return (
    <div className="App">
      <header className="App-header">
        
        <img src={logo} className="App-logo" alt="logo" />
        <Bounce><h1>MusicBass</h1></Bounce>
        <HashRouter>
        <div>
          <ul className="header">
            <li><NavLink to="/Search">Search</NavLink></li>
            <li><NavLink to="/Results">Results</NavLink></li>
            <li><NavLink to="/Preferences">Preferences</NavLink></li>
            {/* <li><NavLink to="/button">Button</NavLink></li> */}
            <li><NavLink to="/author">Authors</NavLink></li>
            
          </ul>
          <div className="content">
            <Route path="/Search" component={SearchPage}/>
            <Route path="/Results" component={Results}/>
            <Route path="/Preferences" component={Preferences}/>
            {/* <Route path="/button" component={Player}/> */}
            <Route path="/author" component={Author}/>
            
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
