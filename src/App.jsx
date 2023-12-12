import { useState } from "react";
import EditTodo from "./EditTodo";
import { useEffect } from "react";

function App() {
  const [task, setTask] = useState("");

  //why we put functions declarations in App component. cant we do it in edittodo. is there any standard so that I can learn.
  const [todos, setTodos] = useState(
    JSON.parse(localStorage.getItem("myTodoList")) || []
  );

  /* const stringTodos = JSON.stringify(todos);
  localStorage.setItem("myTodoList", stringTodos); */

  /* console.log(JSON.parse(localStorage.getItem("myTodoList"))); */
  useEffect(() => {
    const stringTodos = JSON.stringify(todos);
    // const unstringedTodos = JSON.parse(stringTodos);
    localStorage.setItem("myTodoList", stringTodos);
    // const l = localStorage.getItem("myTodoList");

    console.log(JSON.parse(localStorage.getItem("myTodoList")));
  }, [todos]);

  const addTodo = (task) => {
    setTodos([...todos, { task: task, id: todos.length + 1, editing: false }]);

    setTask("");
  };

  const editTodo = (id) => {
    setTodos(
      todos.map((todo) => {
        if (todo.id === id) return { ...todo, editing: true };
        return todo;
      })
    );
  };

  const deleteTodo = (id) => {
    setTodos(
      todos.filter((todo) => {
        return todo.id !== id;
      })
    );
  };

  const updateTodo = (updatedTodo) => {
    setTodos(
      todos.map((todo) => {
        if (todo.id === updatedTodo.id) {
          return updatedTodo;
        }

        return todo;
      })
    );
  };

  const cancelTodo = (id) => {
    setTodos(
      todos.map((todo) => {
        if (todo.id === id) {
          return { ...todo, editing: false };
        }
        return todo;
      })
    );
  };

  return (
    <div className="container">
      <div className="wrapper">
        <div className="todoheader">
          <div className="header">
            <h1>Todo List</h1>
          </div>
          <div className="taskContainer">
            <input
              type="text"
              value={task}
              className="todo"
              placeholder="What is Your Task?"
              onChange={(e) => setTask(e.target.value)}
            />
            <button
              type="submit"
              className="todo-btn"
              onClick={() => addTodo(task)}
            >
              Add Task
            </button>
          </div>
        </div>
        <div className="todoList">
          {todos.map((todo, i) => {
            if (todo.editing === true)
              return (
                <EditTodo
                  key={i}
                  todo={todo}
                  updateTodo={updateTodo}
                  cancelTodo={cancelTodo}
                />
              );

            return (
              <div key={i} className="todoRow">
                <div className="taskText">{todo.task}</div>

                <button
                  className="todo-btn"
                  onClick={() => {
                    editTodo(todo.id);
                  }}
                >
                  Edit
                </button>
                <button
                  className="todo-btn"
                  onClick={() => {
                    deleteTodo(todo.id);
                  }}
                >
                  Delete
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
export default App;
