import style from "./index.module.css";
import clipboard from "../../assets/clipboard.svg";

function Empty() {
  return (
    <div className={style.empty}>
      <div>
        <img src={clipboard} alt="Clipboard" />
        <div>
          <strong>Você ainda não tem tarefas cadastradas</strong>
          <span>Crie tarefas e organize seus itens a fazer</span>
        </div>
      </div>
    </div>
  );
}

export default Empty;
