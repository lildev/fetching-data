import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

  // componentDidMount() {
  //   this.setState({
  //     isLoading: true
  //   })
  //   const todosApi = "https://jsonplaceholder.typicode.com/todos";
  //   const usersApi = "https://jsonplaceholder.typicode.com/users";

  //   Promise.all([
  //     fetch(todosApi),
  //     fetch(usersApi)
  //   ])
  //   .then(([res1, res2]) => { 
  //     return Promise.all([res1.json(), res2.json()]) 
  //   })
  //   .then(([res1, res2]) => {
  //     this.setState(
  //       {
  //         todos: res1,
  //         users: res2,
  //         isLoading: false
  //       }
  //       )
  //   })
  // }