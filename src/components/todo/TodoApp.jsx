import { useEffect, useRef, useState } from "react";
import TodoList from "./TodoList";
import { todoData } from "./TodosData";

const TodoApp = () => {
  const [todos, setTodos] = useState(todoData);
  const [newTodos, setNewTodos] = useState("");

  const handleInput = (e) => {
    setNewTodos(e.target.value);
  };

  const handleClick = (e) => {
    e.preventDefault();
    newTodos.trim() === ""
      ? alert("input can't be empty")
      : newTodos.length < 4
      ? alert("minimum 3 character")
      : setTodos([...todos, { todo: newTodos, completed: false }]);

    setNewTodos("");
  };

  return (
    <div>
      <form onSubmit={(e) => handleClick(e)}>
        <input
          type="text"
          autoFocus
          value={newTodos}
          onChange={(e) => handleInput(e)}
        />
        <input type="button" value="Add" onClick={handleClick} />
      </form>

      <TodoList todos={todos} setTodos={setTodos} />
    </div>
  );
};

export default TodoApp;
