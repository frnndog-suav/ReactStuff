import { ThumbsUp, Trash } from "@phosphor-icons/react";
import styles from "./Comment.module.css";

export function Comment() {
  return (
    <div className={styles.comment}>
      <img src="https://avatars.githubusercontent.com/u/98565190?v=4" />
      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>Teste de Silva</strong>
              <time
                title="2 de Novembro de 2023"
                dateTime="2023-11-02 11:44:00">
                Cerca de 1h atrás
              </time>
              <p>Teste teste woohoo!</p>
            </div>
            <button title="Deletar comentário">
              <Trash size={24} />
            </button>
          </header>
        </div>
        <footer>
          <button>
            <ThumbsUp />
            Aplaudir <span>20</span>
          </button>
        </footer>
      </div>
    </div>
  );
}
