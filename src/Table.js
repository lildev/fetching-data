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
            const { id, userId, title, completed } = todo;
            return (
              <tr key={id}>
                <td>{id}</td>
                <td>{userId}</td>
                <td>{title}</td>
                <td>
                  <span className={completed ? "badge badge-primary" : "badge badge-danger"}>
                    {completed ? "Completed" : "Not completed"}
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