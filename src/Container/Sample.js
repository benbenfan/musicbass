/**
 * Sample page with a static query
 */
import React, { PureComponent } from 'react'
import axios from 'axios';
class Sample extends PureComponent {
    state = {
      users:[]
    }
    componentDidMount(){
      this.getUsers();
    }
  
    getUsers = _ => {
          axios.get('/users')
      .then((data) => {
        // axios returns an object named data so data.data
        console.log(data.data.users);
        this.setState({users: data.data.users});
      })
      // .then(({response}) => this.setState({users: response.users}))
      .catch(error => console.log(error));
    }
    showUsers = user => <div key={user.song_ID}>{user.name}</div>
    render() {//building react method that comes inse od react component
      const { users } = this.state;
      return (//jsx code and can return only a single parent tag
        <div className="App">
          <br/>
          <h2>Top Songs by song name</h2>
          {/* <p> */}
          {users.map(this.showUsers)}
          {/* </p> */}
        </div>
      );
  }
}
export default Sample;