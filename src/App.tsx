import React, { useState } from "react";

import "./App.css";
import InputField from "./components/InputField";
import { Todo } from "./model";
import TodoList from "./components/TodoList";



const App: React.FC = () => {
  const [todo, setTodo] = useState<string>("");
  const [todos, setTodos] = useState<Todo[]>([]);

      

  const handleAdd = (e: React.FormEvent) => {
    e.preventDefault(); //We call a preventDefault on the event when submitting the form, and this will cancel the default event behavior (browser refresh) while allowing us to execute any code we write inside handleSubmit.
    if (todo) {
      setTodos([...todos, { id: Date.now(), todo, isDone: false }]);
      setTodo("");
    }
  };

  //console.log("hello");

  return (

    <div className="App">
      <span className="heading"> TASKIFY </span>
      <InputField todo={todo} setTodo={setTodo} handleAdd={handleAdd} />
      <TodoList todos={todos} setTodos={setTodos} />
    </div>

      
    
  );
};

export default App;
