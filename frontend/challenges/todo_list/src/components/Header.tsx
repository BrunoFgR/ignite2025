import style from "./Header.module.css";
import rocket from "../assets/rocket.svg";

export function Header() {
  return (
    <header className={style.header}>
      <div>
        <img src={rocket} alt="Logo do Todo" />

        <strong>
          to<strong>do</strong>
        </strong>
      </div>
    </header>
  );
}

export default Header;
