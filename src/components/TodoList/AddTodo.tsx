import { useState } from "react";

type TodoProps = {
  addTodo: Function,
}

export function AddTodo(props: TodoProps) {
  const { addTodo } = props;

  const [todoTitle, setTodoTitle] = useState("");

  function onChange(e: any): void {
    setTodoTitle(e.target.value);
  }

  function onClickAdd() : void {
    if (todoTitle.trim() === "") {
      return;
    }
    addTodo(todoTitle);
    setTodoTitle("");
  }

  return (
    <div className="add-todo">
      <span className="add-todo-prefix">👉</span>
      <input
        type="text"
        placeholder="I need to ..."
        value={todoTitle}
        onChange={onChange}
      />
      <button className="add-todo-add" onClick={onClickAdd}>
        Add
      </button>
    </div>
  );
}
