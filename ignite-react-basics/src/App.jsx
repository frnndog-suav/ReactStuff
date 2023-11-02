import { Header } from "./components/Header/Header";
import "./global.css";
import styles from "./App.module.css";
import { Post } from "./components/Post/Post";
import { Sidebar } from "./components/Sidebar/Sidebar";

export function App() {
  return (
    <div>
      <Header />
      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          <Post
            author={"Goia"}
            content={
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean ex dui, ullamcorper at ullamcorper nec, commodo pharetra ipsum."
            }
          />
        </main>
      </div>
    </div>
  );
}
