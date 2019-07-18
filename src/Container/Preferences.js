// import React from "react";
// import PropTypes from "prop-types";
// import { withStyles } from "@material-ui/core/styles";
// import Radio from "@material-ui/core/Radio";
// import RadioGroup from "@material-ui/core/RadioGroup";
// import FormHelperText from "@material-ui/core/FormHelperText";
// import FormControlLabel from "@material-ui/core/FormControlLabel";
// import FormControl from "@material-ui/core/FormControl";
// import FormLabel from "@material-ui/core/FormLabel";
// import Checkbox from "@material-ui/core/Checkbox";

// // bad programming technique, fix later
// const data = [
//     {
//       Id: 1,
//       profilePicture: "http://via.placeholder.com/150x150",
//       firstName: "Tom",
//       lastName: "Rudge",
//       cat: "new"
//     },
//     {
//       Id: 2,
//       profilePicture: "http://via.placeholder.com/150x150",
//       firstName: "Bob",
//       lastName: "Rudge"
//     },
//     {
//       Id: 3,
//       profilePicture: "http://via.placeholder.com/150x150",
//       firstName: "Trev",
//       lastName: "Rudge"
//     },
//     {
//       Id: 4,
//       profilePicture: "http://via.placeholder.com/150x150",
//       firstName: "Mike",
//       lastName: "Rudge"
//     }
//   ];

// // put in style sheet 
// const styles = theme => ({
//     root: {
//       display: "flex"
//     },
//     formControl: {
//       margin: theme.spacing.unit * 3
//     },
//     group: {
//       margin: `${theme.spacing.unit}px 0`
//     }
//   });

// class Preferences extends React.Component {
//     state = {
//       value: 1
//     };
  
//     handlePersonToggle = event => {
//       // console.log(typeof event.target.value)   //string
//       this.setState({ value: event.target.value });
//     };
  
//     render() {
//       const { classes } = this.props;
//       return (
//         <RadioGroup
//           aria-label="matches"
//           name="matches"
//           value={String(this.state.value)}
//         >
//           {data.map(person => {
//             return (
//               <FormControlLabel
//                 onClick={e => this.handlePersonToggle(e)}
//                 key={String(person.Id)}
//                 value={String(person.Id)}
//                 control={<Radio color="primary" />}
//                 label={
//                   <div>
//                     {this.state.value == person.Id ? <div>if true show</div> : ""}
//                   </div>
//                 }
//               />
//             );
//           })}
//         </RadioGroup>
//       );
//     }
//   }

//   Preferences.propTypes = {
//     classes: PropTypes.object.isRequired
//   };
//   export default withStyles(styles)(Preferences);