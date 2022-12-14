type TodoTitleProps = {
  isEditing: boolean
  isComplete: boolean
  title: string
  editedTodoTitle: string
  setEditedTodoTitle: Function
}


export function TodoTitle(props: TodoTitleProps) {
  const { isEditing, isComplete, title, editedTodoTitle, setEditedTodoTitle } =
    props;

  function onTodoTitleChange(e: any) {
    const newTodoTitle = e.target.value;
    setEditedTodoTitle(newTodoTitle);
  }

  return (
    <div className="todo-title">
      <span>{isComplete ? `✔️` : `❌`}</span>
      {isEditing ? (
        <input
          className="edit-todo"
          type="text"
          value={editedTodoTitle}
          onChange={onTodoTitleChange}
        />
      ) : (
        <div className={`${isComplete && "todo-done"}`}>{title}</div>
      )}
    </div>
  );
}
