import styles from "./App.module.css";
import { Header } from "./components/Header/Header";
import { Post, PostProps } from "./components/Post/Post";
import { Sidebar } from "./components/Sidebar/Sidebar";
import "./global.css";

const posts: PostProps[] = [
  {
    id: 1,
    author: {
      avatarUrl:
        "https://images.pexels.com/photos/4814640/pexels-photo-4814640.jpeg?auto=compress&cs=tinysrgb&w=200&h=750&dpr=1",
      name: "Michelle",
      role: "Modelo",
    },
    content: [
      {
        type: "paragraph",
        content: "Integer vitae dolor id turpis dictum lobortis.",
      },
      {
        type: "paragraph",
        content:
          "Vivamus quis justo luctus, laoreet arcu malesuada, vehicula diam.",
      },
      {
        type: "paragraph",
        content: "Nam mattis ex et nunc dictum, non tincidunt metus molestie.",
      },
      { type: "link", content: "Fusce" },
    ],
    publishedAt: new Date("2023-11-04"),
  },
  {
    id: 2,
    author: {
      avatarUrl:
        "https://images.pexels.com/photos/3487734/pexels-photo-3487734.jpeg?auto=compress&cs=tinysrgb&w=200&h=750&dpr=1",
      name: "Jupiter",
      role: "Cachorro",
    },
    content: [
      {
        type: "paragraph",
        content:
          "Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.",
      },
      {
        type: "paragraph",
        content: "Quisque ac eros blandit sem faucibus congue.",
      },
      {
        type: "paragraph",
        content: "Nunc in porttitor nunc, mollis vestibulum erat.",
      },
      {
        type: "paragraph",
        content: "Nunc non lacus venenatis, congue libero non, tincidunt odio.",
      },
      { type: "paragraph", content: "Cras dignissim pharetra enim ac rutrum." },
      { type: "link", content: "Suspendisse" },
    ],
    publishedAt: new Date("2023-11-03"),
  },
  {
    id: 3,
    author: {
      avatarUrl:
        "https://images.pexels.com/photos/3057984/pexels-photo-3057984.jpeg?auto=compress&cs=tinysrgb&w=300&h=750&dpr=1",
      name: "Eduardo",
      role: "Dono de loja",
    },
    content: [
      {
        type: "paragraph",
        content:
          "In volutpat, turpis quis pellentesque vulputate, turpis enim tincidunt felis, sed sollicitudin nibh ex ac mi.",
      },
      {
        type: "paragraph",
        content:
          "Pellentesque sed turpis et ipsum pellentesque posuere in ac erat.",
      },
      { type: "link", content: "Quisque" },
    ],
    publishedAt: new Date("2023-11-02"),
  },
];

export function App() {
  return (
    <div>
      <Header />
      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          {posts.map((post) => (
            <Post key={post.id} {...post} />
          ))}
        </main>
      </div>
    </div>
  );
}
