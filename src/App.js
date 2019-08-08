import React, { Component } from "react";
import logo from './vinyl.svg';
import './App.css';
import {
  Route,
  NavLink,
  HashRouter
} from "react-router-dom";
import Recommendations from './Container/Recommendations.js'
import Player from './Container/Player.js'
import Author from './Author.js'
import Sample from './Container/Sample.js'
import { bounce } from 'react-animations';
import styled, { keyframes } from 'styled-components';
import Search from './Container/Search.js'

const Bounce = styled.div`animation: 2s ${keyframes`${bounce}`} infinite`;
function App() {
  return (
    <div className="App">
      <header className="App-header">

        <img src={logo} className="App-logo" alt="logo" />
        <Bounce><h1>MusicBass</h1></Bounce>
        <HashRouter>
          <div>
            <ul className="header">
              <li><NavLink to="/Sample">Example</NavLink></li>
              <li><NavLink to="/Recommendations">Recommendations</NavLink></li>
              <li><NavLink to="/Search">Search</NavLink></li>
              <li><NavLink to="/button">Button</NavLink></li>
              <li><NavLink to="/author">Authors</NavLink></li>

            </ul>
            <div className="content">
              <Route path="/Sample" component={Sample} />
              <Route path="/Recommendations" component={Recommendations} />
              <Route path="/Search" component={Search} />
              <Route path="/button" component={Player}/>
              <Route path="/author" component={Author} />

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
