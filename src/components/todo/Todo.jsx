import { useState } from "react";
const Todo = ({ todo, toggleTodo, removeTodo }) => {
  return (
    <li
      style={{
        margin: "0.2rem 0",
        padding: "0.3rem",
        background: todo.completed ? "gray" : "red",
        display: "flex",
        justifyContent: "space-between"
      }}
      onClick={() => toggleTodo(todo)}
    >
      <span>
        <input
          type="checkbox"
          name=""
          id=""
          style={{ marginRight: "0.5rem" }}
          checked={todo.completed}
        />
        <span
          style={{ textDecoration: todo.completed ? "line-through" : "none" }}
          contentEditable
        >
          {todo.todo}
        </span>
      </span>
      <button
        style={{
          padding: "0 0.3rem",
          background: "none",
          border: "none",
          outline: "none",
          color: "white",
          cursor: "pointer"
        }}
        onClick={() => removeTodo(todo)}
      >
        X
      </button>
    </li>
  );
};

export default Todo;
