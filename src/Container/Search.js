import React from 'react';
import "./Search.css";
import axios from 'axios'
// import {DropdownMultiple, Dropdown} from 'reactjs-dropdown-component';
import Select from 'react-select';

const { Component } = React;

class Search extends Component {
	constructor(props) {
		super(props);
		this.state = {
			toggle: false,
			users: [],
			value: 1, // 0:song, 1:artist
			query: '',
			// listOpen: false,
			// headerTitle: this.props.title,
			// tables: [],
			// location: '',
			searchBy: [
				{ label: "SERVER ERROR", value: 99 },
			  ],
			searchVal: 0
		};
		this.handleChange = this.handleChange.bind(this);
		// this.toggleSelected = this.toggleSelected.bind(this);
		// this.toggleList = this.toggleList.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
		this.toggleState = this.toggleState.bind(this);
	}
	
	componentDidMount() {
		// I name all my returned results as
		this.getUsers();
		this.getTables();
		// this.tableArray();
	}

	buildQuery(option, search) {
		var str = 'SELECT * FROM ';
		option = parseInt(option);
		if (option === 0) {
			console.log(this.state.searchBy[this.state.searchVal].label);
			str += "song WHERE "+ this.state.searchBy[this.state.searchVal].label +" LIKE '%" + search + "%' LIMIT 15;";
			// str.push("'%" + params.name + "%'")
		} else if (option === 1) {
			str += "artist WHERE " + this.state.searchBy[this.state.searchVal].label +" LIKE '%" + search + "%' LIMIT 15;";
			// str.push("'%" + params.name + "%'")
		}
		return str;
	}

	/**
	 * Toggle event for the radio buttons (switch portion)
	 * @param {*} event 
	 */
	toggleState(event) {
		this.setState({
			value: event.target.value,
			toggle: !this.state.toggle
		});
		this.getTables();
		// console.log(event.target.value );
	}

	// handleClickOutside() {
	// 	this.setState({
	// 		listOpen: false
	// 	})
	// }
	// toggleList() {
	// 	this.setState(prevState => ({
	// 		listOpen: !prevState.listOpen
	// 	}))
	// }
	// toggleSelected(id, key) {
	// 	let temp = this.state[key]
	// 	temp[id].selected = !temp[id].selected
	// 	this.setState({
	// 		[key]: temp
	// 	})
	// }
	// static getDerivedStateFromProps(nextProps){
	// 	const count = nextProps.list.filter(function(a) { return a.selected; }).length;
	// 	console.log(count)
	
	// if(count === 0){
	// 	  return {headerTitle: nextProps.title}
	// 	}
	// 	else if(count === 1){
	// 	  return {headerTitle: `${count} ${nextProps.titleHelper}`}
	// 	}
	// 	else if(count > 1){
	// 	  return {headerTitle: `${count} ${nextProps.titleHelper}s`}
	// 	}
	//   }
	getUsers = _ => {
		axios.get('/songs')
			.then((data) => {
				// axios returns an object named data so data.data
				// console.log(data.data.users);
				this.setState({ users: data.data.users });
			})
			// .then(({response}) => this.setState({users: response.users}))
			.catch(error => console.log(error));
	}
	showUsers = user => <div key={user.song_ID}>{user.name}</div>

	getTables = _ => {
		var name;
		if (parseInt(this.state.value) === 1){
			name = 'song';
		} else if (parseInt(this.state.value) === 0){
			name = 'artist';
		}
		axios.post('/tables',{name})
			.then((data) => {
				// axios returns an object named data so data.data
				var display = [];
				// console.log(this.state.location);
				console.log(data.data.users[1].Field);
				// if (parseInt(this.state.value) === 0){
					for(var i = 0; i< data.data.users.length; i++){
						var toAdd = {
							// title : data.data.users[i].Field,
							// id : i,
							// selected : false,
							// key : 'location'
							label : data.data.users[i].Field,
							value : i
						};
						display[i] = toAdd
					}
				// }
				console.log(display);
				this.setState({ searchBy: display});
				// console.log(this.state.searchBy);	
			})
			// .then(({response}) => this.setState({users: response.users}))
			.catch(error => console.log(error));
	}

	// tableArray(){
	// 	var temp = this.state.tables;
	// 	var display = [];
	// 	console.log(this.state.tables[1]);
	// 	if (parseInt(this.state.value) === 0){
	// 		for(var i = 0; i< temp.length; i++){
	// 			display[i].title = temp[i].Field;
	// 			display[i].id = i;
	// 			display[i].selected = false;
	// 			display[i].key = 'location';
	// 			console.log(temp[i]);
	// 		}
	// 	}
	// 	this.setState({ location: display});
	// 	// console.log(this.state.location);	
	// }
	
	handleChange(event) {
		// this.getInfo();
		if (event.target.value.split(' ').length > 1) {
			alert('Please only search one word');
			return;
		} else if (/[^A-Za-z\d]/.test(event.target.value)) {
			alert("Please enter only letter and numeric characters");
			return;
		}
		this.setState({ query: event.target.value });
		// console.log(event.target.value);
	}

	handleInputChange = selectedOption => {
		this.setState({ searchVal: selectedOption.value });
		console.log(this.state.searchVal);
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
		var name = this.buildQuery(option, search);
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
		const { users, searchBy } = this.state;
		return (
			<form className="switch-field" onSubmit={this.handleSubmit}>
				<div className="switch-title">{this.props.title}</div>
				Search By: <br />
				<input
					type="radio"
					id="switch_left"
					className="radio"
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
					className="radio"
					name="switchToggle"
					value={"1"}
					onChange={this.toggleState}
					checked={this.state.toggle}
				/>
				<label htmlFor="switch_right">
					Artists
				{/* {this.props.rightLabel} */}
				</label>
				<h4>Select a search field:</h4>
				
				<Select options={searchBy} onChange={this.handleInputChange} />
				{/* <Dropdown /* Uncaught TypeError: this.props.resetThenSet is not a function COULD NOT FIX 
					titleHelper="Location"
					title="Select location"
					list={this.state.location}
					toggleItem={this.toggleSelected}
				/> */}
				<h3>Enter Query:</h3>
				<input type="text" className="text" value={this.state.query} onChange={this.handleChange} />
				<input className="submission" type="submit" value="Submit" />
				<br />
				<div className = "default">
				<h2>Top Results</h2>
				{users.map(this.showUsers)}
				</div>
				
				{/* {tables.map(this.tableArray)} */}
			</form>
			

		);
	}
}

export default Search;
// Render to DOM