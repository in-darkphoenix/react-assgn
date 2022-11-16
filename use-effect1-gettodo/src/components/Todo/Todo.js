import React, { useEffect, useState } from "react";
import "./Todo.css";

const Todo = () => {
  const [state, setState] = useState([]);

  const getData = () => {
    fetch("http://localhost:3001/todos")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        console.log(data);
        setState(data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Task</th>
          </tr>
        </thead>
        <tbody>
          {state.map((element, index) => {
            return (
              <tr key={index + 1}>
                <td>{element.id}</td>
                <td>{element.task}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Todo;
