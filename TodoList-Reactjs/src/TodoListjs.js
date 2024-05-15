import React, { useState } from "react";
import "./TodoListApp.css"; // Import the CSS file

function TodoListApp() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");
  const [editingTaskIndex, setEditingTaskIndex] = useState(null);
  const [editedTaskText, setEditedTaskText] = useState("");

  const handleInputChange = (event) => {
    setNewTask(event.target.value);
  };

  const handleAddTask = () => {
    if (newTask.trim() !== "") {
      setTasks([...tasks, newTask.trim()]);
      setNewTask("");
    }
  };

  const handleDeleteTask = (index) => {
    const updatedTasks = [...tasks];
    updatedTasks.splice(index, 1);
    setTasks(updatedTasks);
  };

  const handleEditClick = (index, task) => {
    setEditingTaskIndex(index);
    setEditedTaskText(task);
  };

  const handleEditChange = (event) => {
    setEditedTaskText(event.target.value);
  };

  const handleSaveEdit = (index) => {
    const updatedTasks = [...tasks];
    updatedTasks[index] = editedTaskText.trim();
    setTasks(updatedTasks);
    setEditingTaskIndex(null);
    setEditedTaskText("");
  };

  const handleCancelEdit = () => {
    setEditingTaskIndex(null);
    setEditedTaskText("");
  };

  return (
    <div className="todo-container">
      <div className="todo-container-heading">
        <h1>Krishna's Todo List</h1>
        <div className="input-container">
          <input
            type="text"
            value={newTask}
            onChange={handleInputChange}
            placeholder="Add a new task"
          />
          <button onClick={handleAddTask}>Add</button>
        </div>
      </div>
      <div id="task-list-box">
        <ul className="task-list">
          {tasks.sort().map((task, index) => (
            <li key={index} className="task-item">
              <span className="task-text">
                {index === editingTaskIndex ? (
                  <input
                    type="text"
                    value={editedTaskText}
                    onChange={handleEditChange}
                  />
                ) : (
                  task
                )}
              </span>
              <div className="task-buttons">
                {index === editingTaskIndex ? (
                  <>
                    <button onClick={() => handleSaveEdit(index)}>Save</button>
                    <button onClick={handleCancelEdit}>Cancel</button>
                  </>
                ) : (
                  <>
                    <button onClick={() => handleEditClick(index, task)}>
                      Edit
                    </button>
                    <button onClick={() => handleDeleteTask(index)}>
                      Delete
                    </button>
                  </>
                )}
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default TodoListApp;
