import { useState } from "react";
import Todo from "./Todo";
import { todoData } from "./TodosData";

const TodoList = ({ todos, setTodos }) => {
  const toggleTodo = (selectedTodo) => {
    // const updatedTodo = todos.map((oldTodo) => {
    //   if (selectedTodo === oldTodo) {
    //     return {
    //       ...oldTodo,
    //       completed: !oldTodo.completed
    //     };
    //   }
    //   return oldTodo;
    // });
    // setTodos(updatedTodo);
    setTodos((prev) => {
      const updatedTodos = prev.map((oldTodos) => {
        if (selectedTodo === oldTodos) {
          return {
            ...oldTodos,
            completed: !oldTodos.completed
          };
        }
        return oldTodos;
      });
      return updatedTodos;
    });
  };

  const removeTodo = (selectedTodo) => {
    const filteredTodo = todos.filter((flTodo) => flTodo !== selectedTodo);
    return setTodos(filteredTodo);
  };

  return (
    <ul
      style={{
        listStyle: "none"
      }}
    >
      {todos.map((todo) => (
        <Todo
          todo={todo}
          key={todo.todo}
          toggleTodo={toggleTodo}
          removeTodo={removeTodo}
        />
      ))}
    </ul>
  );
};

export default TodoList;
