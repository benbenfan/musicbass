import React from 'react';
import "./Results.css";
import axios from 'axios'

const { Component } = React;

class Preferences extends Component {
	constructor(props) {
		super(props);
		this.state = {
			toggle: false,
			users: [],
			value: 0,
			query: ''
		};
		this.handleChange = this.handleChange.bind(this);
    	this.handleSubmit = this.handleSubmit.bind(this);
		this.toggleState = this.toggleState.bind(this);
	}

	buildQuery (option,search) {
		var str = 'SELECT * FROM ';
		option = parseInt(option);
		if (option === 0) {
			str += "song WHERE name LIKE '%" + search + "%';";
			// str.push("'%" + params.name + "%'")
		} else if (option === 1) {
			str +=  "artist WHERE name LIKE '%" + search + "%';";
			// str.push("'%" + params.name + "%'")
		}
		return str;
	}

	toggleState (event) {
		this.setState({
			value: event.target.value,
			toggle: !this.state.toggle
		});
		// console.log(event.target.value );
	}
	componentDidMount() {
		this.getUsers();
	  }
	
	
	getUsers = _ => {
		axios.get('/songs')
		  .then((data) => {
			// axios returns an object named data so data.data
			console.log(data.data.users);
			this.setState({ users: data.data.users });
		  })
		  // .then(({response}) => this.setState({users: response.users}))
		  .catch(error => console.log(error));
	  }
	  showUsers = user => <div key={user.song_ID}>{user.name}</div>
	
	  handleChange(event) {
		// this.getInfo();
		this.setState({ query: event.target.value });
		// console.log(event.target.value);
	  }
	
	  handleSubmit = async event => {
		event.preventDefault();
		alert('Request Submitted: ' + this.state.value);
		// this.sendRequest();
		// this.HeaderPostAction();
		// const name = {
		//   name: this.state.value
		// };
		const option = this.state.value;
		const search = this.state.query;
		var name = this.buildQuery(option,search);
		console.log(name);
		axios.post(`/songs`, { name })
		  .then(data => {
			this.setState({ users: data.data.users });
			// console.log(name);
			// console.log(data.data);
			// console.log(this.showUsers)
		  })
	  }

	render() {
		const { users } = this.state;
		return (
			<form className="switch-field" onSubmit={this.handleSubmit}>
				<div className="switch-title">{this.props.title}</div>
				Search By: <br /><br />
				<input
					type="radio"
					id="switch_left"
					className = "radio"
					name="switchToggle"
					value={"0"}
					onChange={this.toggleState}
					checked={!this.state.toggle}
				></input>
				<label htmlFor="switch_left">
					Songs

				</label>

				<input
					type="radio"
					id="switch_right"
					className = "radio"
					name="switchToggle"
					value={"1"}
					onChange={this.toggleState}
					checked={this.state.toggle}
				/>
				<label htmlFor="switch_right">
					Artists
				{/* {this.props.rightLabel} */}
				</label>
				<input type="text" className = "text" value={this.state.query} onChange={this.handleChange} />
				<input className="button" type="submit" value="Submit" />
				<br />
				<h2>Results</h2>
				{users.map(this.showUsers)}
			</form>
			
		);
	}
}

export default Preferences;
// Render to DOM