import React from "react";
import "./styles.css";
import { Todo } from "../model";
import SingleTodo from "./SingleTodo";

interface Props {
  todos: Todo[];
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
}
const TodoList: React.FC<Props> = ({ todos, setTodos }: Props) => {
  console.log(todos);
  return (
    // <div className="todos">
    //   {todos.map((todo) => (
    //     <SingleTodo
    //       todo={todo}
    //       key={todo.id }
    //       todos={todos}
    //       setTodos={setTodos}
    //     />
    //   ))}
    // </div>
    <div className="container">
      <div className="todos">
        <span className="todos_heading">Active Tasks</span>
        {todos.map((todo) => (
          <SingleTodo
            todo={todo}
            key={todo.id}
            todos={todos}
            setTodos={setTodos}
          />
        ))}
      </div>

      <div className="remove">
      <span className="todos_heading">Completed Tasks</span>
        {todos.map((todo) => (
          <SingleTodo
            todo={todo}
            key={todo.id}
            todos={todos}
            setTodos={setTodos}
          />
        ))}
      </div>
    </div>
  );
};

export default TodoList;
