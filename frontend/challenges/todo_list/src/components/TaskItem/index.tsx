import { Trash } from "@phosphor-icons/react";
import style from "./index.module.css";
import { ITask } from "../../App";
import { useState } from "react";

interface TaskItemProps {
  task: ITask;
  // onRemoveTask: (id: number) => void;
}

function TaskItem({ task }: TaskItemProps) {
  const [checked, setChecked] = useState(task.completed);

  const styleIfchecked = checked
    ? style.customCheckboxChecked
    : style.customCheckbox;

  return (
    <div className={style.taskItem}>
      <label className={styleIfchecked}>
        {task.title}
        <input
          type="checkbox"
          checked={checked}
          onChange={() => setChecked(!checked)}
        />
        <span className={style.checkmark}></span>
      </label>
      <button title="Deletar tarefa">
        <Trash size={24} />
      </button>
    </div>
  );
}

export default TaskItem;
