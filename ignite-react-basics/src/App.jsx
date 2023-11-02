import styles from "./App.module.css";
import { Header } from "./components/Header/Header";
import { Post } from "./components/Post/Post";
import { Sidebar } from "./components/Sidebar/Sidebar";
import "./global.css";

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
