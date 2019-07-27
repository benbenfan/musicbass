import React, { PureComponent } from 'react'

class Results extends PureComponent {
    state = {
        students:[]
    }
    componentDidMount(){
    this.getStudent();
    }
    getStudent = _ => {
        fetch('http://localhost:3306')
        .then(response => console.log(response))//response.json())
        .then(({response}) => this.setState({student: 'response.student'}))
        .catch(error => console.log(error));
    }
    showStudent = student => <div key={student.snum}>{student.sname}</div>
  update = () => {
    // this.setState({
    //   data: shuffle(mockData).slice(0, Math.floor(Math.random() * ((mockData.length + 2) - (5 + 1))) + 5),
    // })
  }

  render() {
    const{students} = this.state;
    return (
        <div className="student">
            {students.map(this.showStudent)}
            <button onClick={this.update}>
          Update
        </button>
        </div>
    )
  }
}

export default Results