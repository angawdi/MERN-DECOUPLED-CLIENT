import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  
  constructor() {
    super();
    this.state = {
      users: []
    }
  }

  componentDidMount(){
    fetch('http://localhost:3000/users')
    .then((response) => {
      return response.json();
    })
    .then((usersJson) => {
      this.setState({ users: usersJson });
    });
  }
  render() {
    const users = this.state.users.map(u => {
      return <div> {u.name}, {u.birthyear}</div>
    });
    return (
      <div className="App">
        <p className="App-intro">
          USERS:
        </p>
        {users}
      </div>
    );
  }
}

export default App;
