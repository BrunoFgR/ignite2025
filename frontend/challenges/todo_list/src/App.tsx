import Header from "./components/Header";
import style from "./App.module.css";

import "./global.css";
import { PlusCircle } from "@phosphor-icons/react";

function App() {
  return (
    <div>
      <Header />

      <div className={style.wrapper}>
        <form>
          <input type="text" placeholder="Adicione uma nova tarefa" />
          <button type="submit">
            Criar <PlusCircle size={16} />
          </button>
        </form>
      </div>
    </div>
  );
}

export default App;
