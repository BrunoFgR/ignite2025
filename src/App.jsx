import { Header } from "./components/Header"
import { Post } from "./components/Post"
import { Sidebar } from "./components/Sidebar"

import style from "./App.module.css"

import './global.css'

function App() {
  return (
    <div>
      <Header />

      <div className={style.wrapper}>
        <Sidebar />
        <main>
          <Post 
            author="Bruno Figueiredo"
            content="O rato roeu a roupa do rei de Roma"
          />
          <Post 
            author="Miguel Figueiredo"
            content="Want it to much even the universe is against you"
          />
        </main>
      </div>
    </div>
  )
}

export default App
