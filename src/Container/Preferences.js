import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormHelperText from "@material-ui/core/FormHelperText";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import FormLabel from "@material-ui/core/FormLabel";
import Checkbox from "@material-ui/core/Checkbox";

// bad programming technique, fix later
const default_preferences = [
    {
      Id: 'Song',
      name: 'Song',
    },
    {
      Id: 'Album',
      name: 'Album'
    },
    {
      Id: 'artist',
      name:'artist'
    },
    {
      Id: 'company',
      name: 'company'
    }
  ];

// put in style sheet 
const styles = theme => ({
    root: {
      display: "flex"
    },
    formControl: {
      margin: theme.spacing.unit * 3
    },
    group: {
      margin: `${theme.spacing.unit}px 0`
    }
  });

class Preferences extends React.Component {
    state = {
      value: 1
    };
  
    handlePreferenceToggle = event => {
      // console.log(typeof event.target.value)   //string
      this.setState({ value: event.target.value });
    };
  
    render() {
      const { classes } = this.props;
      return (
        <RadioGroup
          aria-label="matches"
          name="matches"
          value={String(this.state.value)}
        >
          {default_preferences.map(preference => {
            return (
              <FormControlLabel
                onClick={e => this.handlePreferenceToggle(e)}
                key={String(preference.Id)}
                value={String(preference.Id)}
                control={<Radio color="primary" />}
                label={
                  <div>
                    {this.state.value === preference.Id ? <div>Testing </div> : ""}
                  </div>
                }
              />
            );
          })}
        </RadioGroup>
      );
    }
  }

  Preferences.propTypes = {
    classes: PropTypes.object.isRequired
  };
  export default withStyles(styles)(Preferences);