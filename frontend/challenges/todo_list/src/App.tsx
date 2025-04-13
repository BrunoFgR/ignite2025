import Header from "./components/Header";
import style from "./App.module.css";

import "./global.css";
import { PlusCircle } from "@phosphor-icons/react";
import Task from "./components/Task";

function App() {
  const tasks = [
    {
      id: 1,
      title: "Estudar React",
      completed: false,
    },
    {
      id: 2,
      title: "Estudar TypeScript",
      completed: false,
    },
  ];

  return (
    <div>
      <Header />

      <div className={style.wrapper}>
        <form>
          <input type="text" placeholder="Adicione uma nova tarefa" />
          <button type="submit">
            Criar <PlusCircle size={20} />
          </button>
        </form>

        <Task tasks={tasks} />
      </div>
    </div>
  );
}

export default App;
