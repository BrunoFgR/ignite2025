import { ITask } from "../../App";
import Empty from "../Empty";
import TaskItem from "../TaskItem";
import style from "./index.module.css";

interface TaskProps {
  tasks: ITask[];
  onDelete: (id: number) => void;
}

function Task({ tasks, onDelete }: TaskProps) {
  const taskExist = tasks.length > 0;
  const totalTasks = tasks.length;
  const completedTasks = tasks.filter((task) => task.completed).length;
  const completedTasksText =
    completedTasks !== 0 ? `${completedTasks} de ${totalTasks}` : "0";

  return (
    <div className={style.task}>
      <div className={style.info}>
        <div className={style.created}>
          <strong>Tarefas criadas</strong>
          <div>
            <strong>{totalTasks}</strong>
          </div>
        </div>
        <div className={style.done}>
          <strong>Concluídas</strong>
          <div>
            <strong>{completedTasksText}</strong>
          </div>
        </div>
      </div>
      {taskExist ? (
        <div className={style.taskList}>
          {tasks.map((task) => (
            <TaskItem key={task.id} task={task} onDelete={onDelete} />
          ))}
        </div>
      ) : (
        <Empty />
      )}
    </div>
  );
}

export default Task;
