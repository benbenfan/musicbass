import React from 'react';
import "./Results.css";
import axios from 'axios'

const { Component } = React;

class Preferences extends Component {
	constructor(props) {
		super(props);
		this.state = {
			toggle: false,
			results: [],
			value: ''
		};
		this.handleChange = this.handleChange.bind(this);
    	this.handleSubmit = this.handleSubmit.bind(this);
		this.toggleState = this.toggleState.bind(this);
	}

	toggleState() {
		this.setState({
			toggle: !this.state.toggle
		});
	}
	componentDidMount() {
		this.getUsers();
	  }
	
	
	  getUsers = _ => {
		axios.get('/users')
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
		this.setState({ value: event.target.value });
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
			this.setState({ users: data.data.users });
			// console.log(name);
			// console.log(data.data);
			console.log(this.showUsers)
		  })
	  }

	render() {
		return (
			<form className="switch-field" onSubmit={this.handleSubmit}>
				<div className="switch-title">{this.props.title}</div>
				Search By: <br /><br />
				<input
					type="radio"
					id="switch_left"
					class = "radio"
					name="switchToggle"
					value={this.props.leftLabel}
					onChange={this.toggleState}
					checked={!this.state.toggle}
				></input>
				<label htmlFor="switch_left">
					Songs

				</label>

				<input
					type="radio"
					id="switch_right"
					class = "radio"
					name="switchToggle"
					value={this.props.rightLabel}
					onChange={this.toggleState}
					checked={this.state.toggle}
				/>
				<label htmlFor="switch_right">
					Artists
				{this.props.rightLabel}
				</label>
				<input type="text" class = "text" value={this.state.value} onChange={this.handleChange} />
				<input className="button" type="submit" value="Submit" />
				
			</form>
			
		);
	}
}

export default Preferences;
// Render to DOM