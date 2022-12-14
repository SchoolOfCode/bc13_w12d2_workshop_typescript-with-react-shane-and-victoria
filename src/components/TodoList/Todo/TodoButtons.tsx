type TodoButtonsProps = {
  isEditing: boolean;
  isComplete: boolean;
  onClickToggle: Function;
  onClickDelete: Function;
  onClickEditOrDone: Function;
};

export function TodoButtons(props: TodoButtonsProps) {
  const {
    isEditing,
    isComplete,
    onClickToggle,
    onClickDelete,
    onClickEditOrDone,
  } = props;

  // onClick is underlined red if we simply pass in onClickToggle. Wrapping it in anon function seems to work. But why?
  return (
    <div className="todo-buttons">
      {!isEditing && (
        <button className="toggle-button" onClick={()=>onClickToggle}>
          {isComplete ? "Mark Not Done" : "Mark Done"}
        </button>
      )}

      {!isComplete && (
        <button className="edit-button" onClick={(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => onClickEditOrDone(e)}>
          {isEditing ? "Done" : "Edit"}
        </button>
      )}
      {!isEditing && (
        <button className="delete-button" onClick={()=>onClickDelete}>
          Delete
        </button>
      )}
    </div>
  );
}
