import React, { Component } from "react";
 
class Author extends Component {
  render() {
    return (
      <div>
        <h2>Authors</h2>
        <p>Please contact us at <br></br>
            <a href="byfan@wisc.edu">Benjamin Fan</a>.<br></br>
            <a href="byfan@wisc.edu">Chen Xiang</a>.<br></br>
            <a href="byfan@wisc.edu">Hao Yi</a>.<br></br>
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