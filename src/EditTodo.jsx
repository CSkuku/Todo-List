import { useState } from "react";

export const EditTodo = ({ todo, updateTodo, cancelTodo }) => {
  const [task, setTask] = useState(todo.task);

  return (
    <div className="updateTaskContainer">
      <input
        type="text"
        value={task}
        className="todo"
        placeholder="Update Your Task!"
        onChange={(e) => setTask(e.target.value)}
      />

      <button
        type="submit"
        className="todo-btn"
        onClick={() => updateTodo({ ...todo, task: task, editing: false })}
      >
        Update Task
      </button>

      <button
        type="submit"
        className="todo-btn"
        onClick={() => cancelTodo(todo.id)}
      >
        Cancel
      </button>
    </div>
  );
};

export default EditTodo;
