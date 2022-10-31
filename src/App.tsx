import { Header } from "./components/Header";
import { Post } from "./components/Post";
import { Sidebar } from "./components/Sidebar";

import styles from "./App.module.css";

import "./global.css";

interface Posts {
  id: number,
  author: {
    avatarUrl: string, 
    name: string,
    role: string
  },
  content: {
    type: 'paragraph' | 'link',
    content: string
  }[],
  publishedAt: Date
}


const posts: Posts[] = [
  {
    id: 1,
    author: {
      avatarUrl: "https://github.com/raissacmp.png",
      name: "Raissa Campos",
      role: "Desenvolvedora Web",
    },
    content: [
      { type: "paragraph", content: "Oi gente 💖" },
      {
        type: "paragraph",
        content:
          "Acabei de subir mais um projeto no meu github. É um projeto que fiz no NLW eSports, evento da Rocketseat 🚀",
      },
      { type: "link", content: "https://github.com/raissacmp/nlw-eSports" },
    ],
    publishedAt: new Date("2022-10-27 10:00:00"),
  },
  {
    id: 2,
    author: {
      avatarUrl: "https://github.com/marcosewbank.png",
      name: "Marcos Ewbank",
      role: "Desenvolvedor Web",
    },
    content: [
      { type: "paragraph", content: "Fala galera 👋" },
      {
        type: "paragraph",
        content:
          "Criei um novo README para meu github, quem tá afim de dar uma olhadinha? 🎨",
      },
      { type: "link", content: "https://github.com/marcosewbank/marcosewbank" },
    ],
    publishedAt: new Date("2022-10-22 20:00:00"),
  },
];

export function App() {
  return (
    <div>
      <Header />
      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          {posts.map((post) => {
            return (
              <Post
                key={post.id}
                author={post.author}
                content={post.content}
                publishedAt={post.publishedAt}
              />
            );
          })}
        </main>
      </div>
    </div>
  );
}
