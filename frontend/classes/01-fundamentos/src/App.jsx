import { Header } from "./components/Header";
import { Post } from "./components/Post";
import { Sidebar } from "./components/Sidebar";

import style from "./App.module.css";

import "./global.css";

const posts = [
  {
    id: 1,
    author: {
      avatarUrl: "https://github.com/brunofgr.png",
      name: "Bruno Figueiredo",
      role: "Software Engineer",
    },
    content: [
      { type: "paragraph", content: "Fala galeraa 👋" },
      {
        type: "paragraph",
        content:
          "Acabei de subir mais um projeto no meu portfólio. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀",
      },
      { type: "link", content: "👉 jane.design/doctorcare" },
    ],
    publishedAt: new Date("2025-04-04 22:53:00"),
  },
  {
    id: 3,
    author: {
      avatarUrl: "https://avatars.githubusercontent.com/u/12723939?v=4",
      name: "Joao Nascimento",
      role: "Software Engineer Senior",
    },
    content: [
      { type: "paragraph", content: "Fala galeraa 👋" },
      {
        type: "paragraph",
        content:
          "Acabei de subir mais um projeto no meu portfólio. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀",
      },
      { type: "link", content: "👉 jane.design/doctorcare" },
    ],
    publishedAt: new Date("2025-04-01 22:53:00"),
  },
];

function App() {
  return (
    <div>
      <Header />

      <div className={style.wrapper}>
        <Sidebar />
        <main>
          {posts.map((post) => (
            <Post
              key={post.id}
              author={post.author}
              content={post.content}
              publishedAt={post.publishedAt}
            />
          ))}
        </main>
      </div>
    </div>
  );
}

export default App;
