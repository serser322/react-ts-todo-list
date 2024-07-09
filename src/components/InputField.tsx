import { useRef } from "react";
import "../styles/InputField.css";

interface Props {
  todo: string;
  setTodo: React.Dispatch<React.SetStateAction<string>>;
  onAdd: (e: React.FormEvent) => void
}

function InputField({ todo, setTodo, onAdd }: Props) {
  const inputRef = useRef<HTMLInputElement>(null)


  const submitTodo = (e: React.FormEvent) => {
    onAdd(e)
    inputRef.current?.blur()
  }

  return (
    <>
      <form className="input" onSubmit={(e) => submitTodo(e)}>
        <input
          ref={inputRef} 
          type="input" 
          className="input__box" 
          value={todo} 
          onChange={(e) => setTodo(e.target.value)}/>
        <button className="input__submit" type="submit">
          新增
        </button>
      </form>
    </>
  );
}

export default InputField;
