import React from 'react';
import Table from './Table';
import Loader from './Loader';
import './App.css';

class App extends React.Component {
  state = {
    users: [],
    todos: [],
    selectboxValue: "0",
    isLoading: true
  }

  componentDidUpdate(prevProps, prevState) {
    console.log('componentDidUpdate')

    const userId = this.state.selectboxValue;
    const prevUserId = prevState.selectboxValue;
    if (prevUserId !== userId) {
      this.fetchTodosData(userId);
    }
  }

  componentDidMount() {
    const id = this.state.selectboxValue;
    this.fetchTodosData(id);
    this.fetchUsersData();
  }

  fetchTodosData = id => {
    this.setState({
      isLoading: true
    })
    let todoApi;

    if(id === "0") {
      todoApi = "https://jsonplaceholder.typicode.com/todos"
    }else {
      todoApi = "https://jsonplaceholder.typicode.com/todos?userId=" + id
    }
    fetch(todoApi)
      .then(response => response.json())
      .then(data => {
        this.setState({
          todos: data,
          isLoading: false
        })
      })
  };
  fetchUsersData = () => {
    this.setState({
      isLoading: true
    })
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(response => response.json())
      .then(data => {
        this.setState({
          users: data,
          isLoading: false
        })
      })
  };

  handleChange = (event) => {
    this.setState({ selectboxValue: event.target.value });
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
                <option value="0">All</option>
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
