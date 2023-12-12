/* eslint-disable react/prop-types */
import { useState } from "react";

/* import PropTypes from "prop-types"; */

export const EditTodo = ({ todo, updateTodo, cancelTodo }) => {
  /*  // task or todo here? I have problem to identify that
  const editTask = (task, id) => {
    setTodos(todos.map(task.id === id ? {} : todo));
  };
  const editTodo = (id) => {
    setTodos(todos.map(todo.id === id ? {} : todo));
  };
 */
  /* const { todo, updateTodo } = props; */

  const [task, setTask] = useState(todo.task);

  /*   console.log(todo);
  console.log(todo.task);
 */
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

/* EditTodo.PropTypes = {
  todo: PropTypes.shape({
    id: PropTypes.string,
    task: PropTypes.string,
    editing: PropTypes.bool,
  }),
  UpdateTodo: PropTypes.func,
}; */

export default EditTodo;
