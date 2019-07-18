import React, { Component } from 'react'
import axios from 'axios'
// import ReactSearchBox from 'react-search-box'
// import SearchField from "react-search-field";
// import Suggestions from 'components/Suggestions'

const { API_KEY } = process.env
const API_URL = 'http://api.musicgraph.com/api/v2/artist/suggest'


class SearchPage extends Component {

  state = {
    query: '',
    results: [] // will replace data
  }
  // Fake data, needs to be pulled from database eventually see below for
  data = [
    {
      key: 'despacito',
      value: 'Despacito',
    },
    {
      key: 'loveMe',
      value: 'Love Me Like You Do',
    },
    {
      key: 'CanonD',
      value: 'Canon in D',
    },
    {
      key: 'Talk',
      value: 'Talk',
    },
    {
      key: 'Suge',
      value: 'Suge',
    },
  ]

  getInfo = () => {
    axios.get(`${API_URL}?api_key=${API_KEY}&prefix=${this.state.query}&limit=7`)
      .then(({ data }) => {
        this.setState({
          results: data.data // MusicGraph returns an object named data, 
                             // as does axios. So... data.data                             
        })
      })
  }

  constructor(props) {
    super(props);
    this.state = {value: ''};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleInputChange = () => {
    this.setState({
      query: this.search.value
    }, () => {
      if (this.state.query && this.state.query.length > 1) {
        if (this.state.query.length % 2 === 0) {
          this.getInfo()
        }
      } 
    })
  }
  
  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    alert('Request Submitted: ' + this.state.value);
    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          <h1>Enter Search:</h1>
          <input type="text" value={this.state.value} onChange={this.handleChange} />
        </label>
        <input type="submit" value="Submit" />
      </form>
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