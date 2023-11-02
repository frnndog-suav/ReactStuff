import { Avatar } from "../Avatar/Avatar";
import { Comment } from "../Comment/Comment";
import styles from "./Post.module.css";

export function Post() {
  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <Avatar src="https://images.unsplash.com/photo-1508179522353-11ba468c4a1c?auto=format&fit=crop&q=30&w=200&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
          <div className={styles.authorInfo}>
            <strong>Teste Silva</strong>
            <span>Programador</span>
          </div>
        </div>

        <time title="2 de Novembro de 2023" dateTime="2023-11-02">
          Publicado há 1h
        </time>
      </header>
      <div className={styles.content}>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        <p>Morbi id tellus lobortis, viverra dolor placerat, hendrerit nisi.</p>
        <p>In eu ante vel nisl varius tempor. In sed congue orci.</p>
        <p>Nulla facilisis nibh a vestibulum scelerisque.</p>
        <p>
          <a href="#">#teste</a>
          <a href="#">#projectoBase</a>
          <a href="#">#rockeseat</a>
        </p>
      </div>

      <form className={styles.commentForm}>
        <strong>Deixe seu feedback</strong>
        <textarea placeholder="Deixe um comentário" />
        <footer>
          <button type="submit">Publicar</button>
        </footer>
      </form>
      <div className={styles.commentList}>
        <Comment />
        <Comment />
        <Comment />
      </div>
    </article>
  );
}
