import { Todo } from "../interfaces/model";
import SingleTodo from "./SingleTodo";
import "../styles/TodoList.css"

interface Props {
  todoList: Todo[];
  setTodoList: React.Dispatch<React.SetStateAction<Todo[]>>;
}

function TodoList({ todoList, setTodoList }: Props) {
  return (
    <div className="todos">
      {todoList.map((todo) => (
        <SingleTodo
          todo={todo}
          key={todo.id}
          todoList={todoList}
          setTodoList={setTodoList}
        />
      ))}
    </div>
  );
}

export default TodoList;
