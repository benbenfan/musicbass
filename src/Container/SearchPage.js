import React, { Component } from 'react'
import axios from 'axios'
// import ReactSearchBox from 'react-search-box'
// import SearchField from "react-search-field";

class SearchPage extends Component {
  state = {
      query: '',
      value: '',
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
    showUsers = user => <div key={user.name}>{user.name}</div>

  // HeaderPostAction = () =>{
  //   // Send a POST request
  //     var reqData = {
  //         "username": "admin",
  //         "password": "admin123",
  //         "grant_type": "password"
  //     };
  //     //var reqData = "username=ganesh&password=123456&grant_type=password";
  //     axios({
  //         method: 'post',
  //         url: '/users',
  //         withCredentials: true,
  //         crossdomain: true,
  //         data: this.setState (reqData),    
  //     headers: { 
  //       "Content-Type": "application/x-www-form-urlencoded",
  //       "Cache-Control": "no-cache",
  //       "Postman-Token": "42e6c291-9a09-c29f-f28f-11872e2490a5"
  //     }
  //   }).then(function (response) {
  //     console.log("Heade With Authentication :" + response);
  //   })
  //   .catch(function (error) {
  //     console.log("Post Error : " +error);
  //   }); 
  // }
  

  // sendRequest = _ => {
  //   axios.post('http://localhost:3001/users', {
  //     firstName: 'Fred',
  //     lastName: 'Flintstone'
  //   })
  //   .then(function (response) {
  //     console.log(response);
  //   })
  //   .catch(function (error) {
  //     console.log(error);
  //   });
  // }

  constructor(props) {
    super(props);
    // this.state = {value: ''};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  // handleInputChange = () => {
  //   this.setState({
  //     query: this.search.value
  //   }, () => {
  //     if (this.state.query && this.state.query.length > 1) {
  //       if (this.state.query.length % 2 === 0) {
  //         this.getInfo()
  //       }
  //     } 
  //   })
  // }
  
  handleChange(event) {
    // this.getInfo();
    this.setState({value: event.target.value});
  }

  handleSubmit = async event => {
    event.preventDefault();
    alert('Request Submitted: ' + this.state.value);
    // this.sendRequest();
    // this.HeaderPostAction();
    // const name = {
    //   name: this.state.value
    // };
    const name = this.state.value;
    axios.post(`/users`, { name })
      .then(data => {
        this.setState({users: data.data.users});
        // console.log(name);
        // console.log(data.data);
        console.log(this.showUsers)
      })
  }

  render() {
    const { users } = this.state;
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>
            <h1>Enter Search:</h1>
            <input type="text" value={this.state.value} onChange={this.handleChange} />
          </label>
          <input type="submit" value="Submit" />
        </form>
        <br/>
          <h2>Top Results by Artist name</h2>
          {/* <p> */}
          {users.map(this.showUsers)}
      </div>
      // <SearchField
      //   placeholder="Search Here."
      //   searchText="Search Text"
      //   classNames="searchF"
      //   onChange={this.handleChange}
      //   onSubmit={this.handleSubmit}
      // />
      // <br></br>
      // <ReactSearchBox
      //   placeholder="Search Here"
      //   // value="Suge"
      //   dropDownHoverColor = 'white'
      //   data={this.data}
      //   dropDownBorderColor = 'white'
      //   callback={record => console.log(record)}
      //   onSelect={record => console.log(record)}
      //   onChange={value => console.log(value)}
      //   onFocus={() => {
      //     console.log('element focused')
      //   }}
      //   fuseConfigs={{
      //     threshold: 0.05,
      //   }}
      // />
    );
  }
}
export default SearchPage;