import React, { PureComponent } from 'react'
import axios from 'axios';

class Results extends PureComponent {
    state = {
        students:[]
    }
    componentDidMount(){
      this.getStudent();
    }
    // componentDidMount() {
    //   fetch('/api/load').then(res => res.json()).then(message => this.setState({}))
    // }
    getStudent = _ => {
        fetch('http://localhost:3001') // proxy location
        .then(response => console.log(response))//response.json())
        .then(({response}) => this.setState({student: 'response.student'}))
        .catch(error => console.log(error));
      //   axios.get('/students')
      // .then((data) => {
      //   console.log(data.data.students);
      //   this.setState({users: data.data.studentss});
      // })
      // .catch(error => console.log(error));
    }
    showStudents = student => <div key={student.snum}>{student.sname}</div>
    update = () => {
      // this.showStudents();
  }

  render() {
    const{students} = this.state;
    return (
        <div className="student">
            {/* {students.map(this.showStudent)} */}
            <button onClick={this.update}>
          Update
        </button>
        </div>
    )
  }
}

export default Results;