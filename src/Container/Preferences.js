import React from 'react';
import "./Results.css";

const { Component } = React;

class Preferences extends Component {
	constructor(props) {
		super(props);
		this.state = {
			toggle: false
		};
		
	  this.toggleState = this.toggleState.bind(this);

	}

	toggleState() {
		this.setState({
			toggle: !this.state.toggle
		});
	}

	render() {
		return (
			<form className="switch-field">
				<div className="switch-title">{this.props.title}</div>
        Search By: <br/><br/>
				<input
					type="radio"
					id="switch_left"
					name="switchToggle"
					value={this.props.leftLabel}
					onChange={this.toggleState}
					checked={!this.state.toggle}
				></input>
        <label htmlFor="switch_left">
          Songs
        {this.props.leftLabel}
        </label>

				<input
					type="radio"
					id="switch_right"
					name="switchToggle"
					value={this.props.rightLabel}
					onChange={this.toggleState}
					checked={this.state.toggle}
				/>
				<label htmlFor="switch_right">
          Artists
					{this.props.rightLabel}
          </label> 
			</form>
		);
	}
}


export default Preferences;
// Render to DOM
// ReactDOM.render(<ToggleExample />, document.getElementById("app"));
