import React, { Component } from "react";
 
class Author extends Component {
  render() {
    return (
      <div>
        <h2>Authors</h2>
        <p>Group Member<br></br>
            <a href="byfan@wisc.edu">Benjamin Fan</a><br></br>
            <a href="cxiang@wisc.edu">Cheng Xiang</a><br></br>
            <a href="hlu72@wisc.edu">Haoyi Lu</a><br></br>
        <br></br>
        <a
          className="App-link"
          href="https://music-base.herokuapp.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          Heroku Link
        </a>
        </p>
      </div>
    );
  }
}
 
export default Author;