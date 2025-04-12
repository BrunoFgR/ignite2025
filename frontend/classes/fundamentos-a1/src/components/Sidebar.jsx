import { PencilLine } from "@phosphor-icons/react";
import style from "./Sidebar.module.css";
import { Avatar } from "./Avatar";

export function Sidebar() {
  return (
    <aside className={style.sidebar}>
      <img
        className={style.cover}
        src="https://images.unsplash.com/photo-1515879218367-8466d910aaa4?w=500&auto=format&fit=crop&q=50&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fHByb2dyYW1taW5nfGVufDB8fDB8fHww"
      />

      <div className={style.profile}>
        <Avatar src="https://github.com/brunofgr.png" />

        <strong>Bruno Figueiredo</strong>
        <span>Web Developer</span>
      </div>

      <footer>
        <a href="#">
          <PencilLine size={20} />
          Editar seu perfil!
        </a>
      </footer>
    </aside>
  );
}
