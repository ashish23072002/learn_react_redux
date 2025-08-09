// import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./Todo.css";
import { useState } from "react";
import { addTask, deleteTask } from "../store";

export const Todo = () => {
  const [task, setTask] = useState("");
  const tasks = useSelector((state) => state.task);
  // console.log(tasks)

  const dispatch = useDispatch();

  const handleFormSubmit = (e) => {
    e.preventDefault();
    dispatch(addTask(task));
    return setTask("");
  };
  const handleTaskDelete = (id) => {
    return dispatch(deleteTask(id));
  };

  return (
    <div className="todo-container">
      <h2>📝 To-Do List</h2>
      <form className="todo-input-section" onSubmit={handleFormSubmit}>
        <input
          type="text"
          value={task}
          onChange={(e) => setTask(e.target.value)}
          placeholder="Enter a task"
        />
        <button type="submit">Add</button>
      </form>

      <ul className="todo-list">
        {tasks.map((curTask, index) => (
          <li
            key={index}
            className={`todo-item ${task.completed ? "completed" : ""}`}
          >
            {index}:<span>{curTask}</span>
            <button onClick={() => handleTaskDelete(index)}>❌</button>
          </li>
        ))}
      </ul>
    </div>
  );
};
