import { useState } from "react";
import './Todo.css'

export const  Todo=()=> {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");

  const handleAddTask = (e) => {
    e.preventDefault(); // Prevent page reload on form submission
    if (newTask.trim() === "") return;
    setTasks([...tasks, { text: newTask, completed: false }]);
    setNewTask("");
  };

  const handleToggleComplete = (index) => {
    const updatedTasks = tasks.map((task, i) =>
      i === index ? { ...task, completed: !task.completed } : task
    );
    setTasks(updatedTasks);
  };

  const handleDeleteTask = (index) => {
    const updatedTasks = tasks.filter((_, i) => i !== index);
    setTasks(updatedTasks);
  };

  return (
    <div className="todo-container">
      <h2>📝 To-Do List</h2>
      <form className="todo-input-section" onSubmit={handleAddTask}>
        <input
          type="text"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
          placeholder="Enter a task"
        />
        <button type="submit">Add</button>
      </form>

      <ul className="todo-list">
        {tasks.map((task, index) => (
          <li
            key={index}
            className={`todo-item ${task.completed ? "completed" : ""}`}
          >
            <span onClick={() => handleToggleComplete(index)}>
              {task.text}
            </span>
            <button onClick={() => handleDeleteTask(index)}>❌</button>
          </li>
        ))}
      </ul>
    </div>
  );
}