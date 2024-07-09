import { Todo } from "../interfaces/model";
import { AiFillEdit, AiFillDelete } from "react-icons/ai";
import { MdDone } from "react-icons/md";
import "../styles/SingleTodo.css";
import { useEffect, useRef, useState } from "react";

interface Props {
  todo: Todo;
  todoList: Todo[];
  setTodoList: React.Dispatch<React.SetStateAction<Todo[]>>;
}

function SingleTodo({ todo, todoList, setTodoList }: Props) {
  const [isEdited, setIsEdited] = useState<boolean>(false);
  const [editTodo, setEditTodo] = useState<string>(todo.todo);

  const inputRef = useRef<HTMLInputElement>(null)

  const handleEdit = (e: React.FormEvent, id: number) => {
    e.preventDefault()

    if (!todo.isDone) {
      setIsEdited(!isEdited);
    }

    const updateList: Todo[] = todoList.map(todo => 
      todo.id === id ? { ...todo, todo: editTodo } : todo
    )

    setTodoList(updateList)

  };

  const handleDelete = (id: number) => {
    setTodoList(todoList.filter((todo) => todo.id !== id));
  };

  const handleDone = (id: number) => {
    const updatedList: Todo[] = todoList.map((todo) =>
      todo.id === id ? { ...todo, isDone: !todo.isDone } : todo
    );
    setTodoList(updatedList);
  };

  useEffect(() => {
    inputRef.current?.focus()
  },[isEdited])

  return (
    <form className="todos__single" onSubmit={(e) => handleEdit(e, todo.id)}>
      {isEdited ? (
        <input
          ref={inputRef}
          className="todos__single--text"
          value={editTodo}
          onChange={(e) => setEditTodo(e.target.value)}
        />
      ) : todo.isDone ? (
        <s className="todos__single--text">{todo.todo}</s>
      ) : (
        <span className="todos__single--text">{todo.todo}</span>
      )}

      <div>
        <span className="icon" onClick={(e) => handleEdit(e, todo.id)}>
          <AiFillEdit />
        </span>
        <span className="icon" onClick={() => handleDelete(todo.id)}>
          <AiFillDelete />
        </span>
        <span className="icon" onClick={() => handleDone(todo.id)}>
          <MdDone />
        </span>
      </div>
    </form>
  );
}

export default SingleTodo;
