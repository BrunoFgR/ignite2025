import Empty from "../Empty";
import TaskItem from "../TaskItem";
import style from "./index.module.css";

interface Task {
  id: number;
  title: string;
  completed: boolean;
}

interface TaskProps {
  tasks: Task[];
}

function Task({ tasks }: TaskProps) {
  const taskExist = tasks.length > 0;

  return (
    <div className={style.task}>
      <div className={style.info}>
        <div className={style.created}>
          <strong>Tarefas criadas</strong>
          <div>
            <strong>0</strong>
          </div>
        </div>
        <div className={style.done}>
          <strong>Concluídas</strong>
          <div>
            <strong>0</strong>
          </div>
        </div>
      </div>
      {taskExist ? (
        <div className={style.taskList}>
          {tasks.map((task) => (
            <TaskItem key={task.id} />
          ))}
        </div>
      ) : (
        <Empty />
      )}
    </div>
  );
}

export default Task;
