type TodoTitleProps = {
  isEditing: boolean
  done: boolean
  title: string
  editedTodoTitle: string
  setEditedTodoTitle: Function
}


export function TodoTitle(props: TodoTitleProps) {
  const { isEditing, done, title, editedTodoTitle, setEditedTodoTitle } =
    props;

  function onTodoTitleChange(e: any) {
    const newTodoTitle = e.target.value;
    setEditedTodoTitle(newTodoTitle);
  }

  return (
    <div className="todo-title">
      <span>{done ? `✔️` : `❌`}</span>
      {isEditing ? (
        <input
          className="edit-todo"
          type="text"
          value={editedTodoTitle}
          onChange={onTodoTitleChange}
        />
      ) : (
        <div className={`${done && "todo-done"}`}>{title}</div>
      )}
    </div>
  );
}
