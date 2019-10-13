import React from 'react';

function Table(props) {
  const todos = props.todos;
  return(
    <table className="table table-bordered">
      <thead>
        <tr>
          <td>ID</td>
          <td>User id</td>
          <td>Title</td>
          <td>Completed status</td>
        </tr>
      </thead>

      <tbody>
        {
          todos.map(todo => {
            return (
              <tr key={todo.id}>
                <td>{todo.id}</td>
                <td>{todo.userId}</td>
                <td>{todo.title}</td>
                <td>
                  <span className={todo.completed ? "badge badge-primary" : "badge badge-danger"}>
                    {todo.completed ? "Completed" : "Not completed"}
                  </span>
                </td>
              </tr>
            )
          })
        }
      </tbody>
    </table>
  )
}

export default Table;