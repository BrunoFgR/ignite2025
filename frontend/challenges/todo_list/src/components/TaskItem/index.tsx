import { Trash } from "@phosphor-icons/react";
import style from "./index.module.css";
import { ITask } from "../../App";

interface TaskItemProps {
  task: ITask;
  onDelete: (id: number) => void;
  onToggleCompletion: (id: number) => void;
}

function TaskItem({ task, onDelete, onToggleCompletion }: TaskItemProps) {
  const styleIfchecked = task.completed
    ? style.customCheckboxChecked
    : style.customCheckbox;

  function handleDelete() {
    onDelete(task.id);
  }

  function handleToggleCompletion() {
    onToggleCompletion(task.id);
  }

  return (
    <div className={style.taskItem}>
      <label className={styleIfchecked}>
        {task.title}
        <input
          type="checkbox"
          checked={task.completed}
          onChange={handleToggleCompletion}
        />
        <span className={style.checkmark}></span>
      </label>
      <button title="Deletar tarefa" onClick={handleDelete}>
        <Trash size={24} />
      </button>
    </div>
  );
}

export default TaskItem;
