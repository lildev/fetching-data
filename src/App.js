import React from 'react';
import Table from './Table';
import Loader from './Loader';
import './App.css';

class App extends React.Component {
  state = {
    users: [],
    todos: [],
    selectboxValue: "All",
    isLoading: true
  }

  getTodos(id) {
    this.setState({
      isLoading: true
    })
    fetch("https://jsonplaceholder.typicode.com/todos?userId=" + id)
        .then(response => response.json())
        .then(data => {
          this.setState({
            todos: data,
            isLoading: false
          })
        })
  }

  componentDidMount() {
    this.setState({
      isLoading: true
    })
    const todosApi = "https://jsonplaceholder.typicode.com/todos";
    const usersApi = "https://jsonplaceholder.typicode.com/users";

    Promise.all([
      fetch(todosApi),
      fetch(usersApi)
    ])
    .then(([res1, res2]) => { 
      return Promise.all([res1.json(), res2.json()]) 
    })
    .then(([res1, res2]) => {
      this.setState(
        {
          todos: res1,
          users: res2,
          isLoading: false
        }
        )
    })
  }

  handleChange = (event) => {
    this.setState({ selectboxValue: event.target.value });
    console.log(event.target.value)
    this.getTodos(event.target.value)

  };

  render() {
    return(
      <div className="App">
        <div className="card">
          <div className="card-header">
            Fetching data
          </div>
          <div className="card-body">
            <div className="box">
              <select onChange={this.handleChange} value={this.state.selectboxValue}>
                <option>All</option>
                {this.state.users.map(user => {
                  return(
                    <option key={user.id} value={user.id}>{user.name}</option>
                  )
                })}
              </select>
            </div>
              { this.state.isLoading
                ? <Loader />
                : <Table todos={this.state.todos} />
              }
          </div>
        </div>
      </div>
    )
  }
}

export default App;
