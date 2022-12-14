import { useState } from "react";
import { TodoButtons } from "./TodoButtons";
import { TodoTitle } from "./TodoTitle";

type TodoStateObject = {
  title: string,
  done: boolean,
  id: string
}
type TodoProps = {
  todo: TodoStateObject,
  updateTodo: (id: string, updatedTodo: TodoStateObject) => void,
  deleteTodo: (id: string) => void
}


export function Todo(props: TodoProps) {
  const { todo, updateTodo, deleteTodo } = props;
  const { title, done } = todo;

  const [isEditing, setIsEditing] = useState(false);
  const [editedTodoTitle, setEditedTodoTitle] = useState(title);

  function onClickToggle() {
    const updatedTodo: TodoStateObject = { ...todo, done: !todo.done };
    updateTodo(todo.id, updatedTodo);
  }

  function onClickEdit() {
    setIsEditing(!isEditing);
  }

  function onClickDelete() {
    deleteTodo(todo.id);
  }

  function onClickDone() {
    const updatedTodo: TodoStateObject = { ...todo, title: editedTodoTitle };
    updateTodo(todo.id, updatedTodo);
    setIsEditing(false);
  }

  return (
    <div className="todo">
      <TodoTitle
        title={title}
        done={done}
        isEditing={isEditing}
        editedTodoTitle={editedTodoTitle}
        setEditedTodoTitle={setEditedTodoTitle}
      />
      <TodoButtons
        done={done}
        isEditing={isEditing}
        onClickToggle={onClickToggle}
        onClickEditOrDone={isEditing ? onClickDone : onClickEdit}
        onClickDelete={onClickDelete}
      />
    </div>
  );
}
