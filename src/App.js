import React, { Component } from "react";
import logo from './logo.svg';
import './App.css';
import Player from './Player.js'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Click above or below to login!
        </p>
        <a
          className="App-link"
          href="./Player"
          target="_blank"
          rel="noopener noreferrer"
        >
          Login
        </a>
      </header>
    </div>
  );
}

export default App;
