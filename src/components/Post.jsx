import styles from "./Post.module.css";

export function Post() {
  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <img
            className={styles.avatar}
            src="https://github.com/brunofgr.png"
          />
          <div className={styles.authorInfo}>
            <strong>Bruno Figueiredo</strong>
            <span>Web Developer</span>
          </div>
        </div>

        <time title="20 de Agosto de 2024" dateTime="2024-08-20 08:00:00">
          Publicado há 1h
        </time>
      </header>

      <div className={styles.content}>
        <p>Fala galeraa 👋</p>
        <p>
          Acabei de subir mais um projeto no meu portfólio. É um projeto que fiz
          no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀
        </p>
        <p>
          <a href="">👉 jane.design/doctorcare</a>
        </p>
        <p>
          <a href="">#novoprojeto</a> <a href="">#nlw</a>{" "}
          <a href="">#rocketseat</a>
        </p>
      </div>

      <form className={styles.commentForm}>
        <strong>Deixe seu feedback</strong>

        <textarea 
          placeholder="Digite seu comentário" 
        />

        <footer>
          <button type="submit">Comentar</button>
        </footer>
      </form>
    </article>
  );
}
