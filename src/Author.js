import React, { Component } from "react";
 
class Author extends Component {
  render() {
    return (
      <div>
        <h3>Authors</h3>
        <ul >
          <li>Benjamin Fan: <a href="byfan@wisc.edu">byfan@wisc.edu : </a></li>
          <li>Cheng Xiang: <a href="cxiang@wisc.edu">cxiang@wisc.edu</a></li>
          <li>Haoyi Lu: <a href="hlu72@wisc.edu">hlu72@wisc.edu</a></li>
        </ul>
        <br></br>
        <a
          className="App-link"
          href="https://music-base.herokuapp.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          Heroku Link
        </a>
        
      </div>
    );
  }
}
 
export default Author;