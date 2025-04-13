import { PlusCircle } from "@phosphor-icons/react";
import { useState } from "react";

import Task from "./components/Task";
import Header from "./components/Header";

import style from "./App.module.css";
import "./global.css";

export interface ITask {
  id: number;
  title: string;
  completed: boolean;
}

function App() {
  const [id, setId] = useState(0);
  const [tasks, setTasks] = useState<ITask[]>([]);
  const [newTaskText, setNewTaskText] = useState("");

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const newTask: ITask = {
      id: id + 1,
      title: newTaskText,
      completed: false,
    };

    setTasks([...tasks, newTask]);
    setNewTaskText("");
    setId(id + 1);
  }

  function handleChangeNewTaskText(event: React.ChangeEvent<HTMLInputElement>) {
    setNewTaskText(event.target.value);
  }

  const isEmpty = newTaskText.length === 0;

  return (
    <div>
      <Header />

      <div className={style.wrapper}>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="task"
            value={newTaskText}
            placeholder="Adicione uma nova tarefa"
            onChange={handleChangeNewTaskText}
          />
          <button type="submit" disabled={isEmpty}>
            Criar <PlusCircle size={20} />
          </button>
        </form>

        <Task tasks={tasks} />
      </div>
    </div>
  );
}

export default App;
