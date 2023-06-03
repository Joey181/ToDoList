import React, { useState } from "react";
import "./App.css";

function App() {
  const [list, setList] = useState([]);
  const [input, setInput] = useState("");
  const addTask = (task) => {
    const newTask = {
      id: Math.random(),
      task: task,
    };
    setList([...list, newTask]);
    setInput("");
  };

  const deleteTask = (id) => {
    const newList = list.filter((task) => task.id !== id);
    setList(newList);
  };

  const deleteAllTask = () => {
    setList([]);
  };

  return (
    <div className="container">
      <h1>To Do List!</h1>
      <div className="input-container">
        <div className="button-container">
          <button onClick={() => addTask(input)}>Add</button>
          <button onClick={() => deleteAllTask()}>Delete All</button>
        </div>
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
      </div>
      <ul>
        {list.map((task) => (
          <li key={task.id}>
            {task.task}
            <button onClick={() => deleteTask(task.id)}>&times;</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
