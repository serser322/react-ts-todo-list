import { useState } from "react";
import "./App.css";
import InputField from "./components/InputField";
import { Todo } from "./interfaces/model";
import TodoList from "./components/TodoList";

function App() {
  const [todo, setTodo] = useState<string>("");
  const [todoList, setTodoList] = useState<Todo[]>([]);

  const handleAdd = (e: React.FormEvent) => {
    e.preventDefault();

    if (todo.trim()) {
      setTodoList([ ...todoList, { id: Date.now(), todo: todo, isDone: false}])
      setTodo("")
    }
  };


  return (
    <>
      <div className="App">
        <span className="heading">代辦清單</span>
        <InputField
          todo={todo}
          setTodo={setTodo}
          onAdd={handleAdd}
        />
        <TodoList todoList={todoList} setTodoList={setTodoList}/>
      </div>
    </>
  );
}

export default App;
