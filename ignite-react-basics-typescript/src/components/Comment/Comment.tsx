import { ThumbsUp, Trash } from "@phosphor-icons/react";
import { Avatar } from "../Avatar/Avatar";
import styles from "./Comment.module.css";
import { FC, useState } from "react";

interface CommentProps {
  id: number;
  content: string;
  onDeleteComment: (id: number) => void;
}

export const Comment: FC<CommentProps> = ({ id, content, onDeleteComment }) => {
  const [likeCount, setLikeCount] = useState(0);

  function handleDeleteComment() {
    onDeleteComment(id);
  }

  function handleLikeComment() {
    setLikeCount((previousCount) => previousCount + 1);
  }

  return (
    <div className={styles.comment}>
      <Avatar
        hasBorder={false}
        src="https://images.unsplash.com/photo-1505999407077-7937810b98ae?auto=format&fit=crop&q=30&w=200&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      />
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
              <p>{content}</p>
            </div>
            <button title="Deletar comentário" onClick={handleDeleteComment}>
              <Trash size={24} />
            </button>
          </header>
        </div>
        <footer>
          <button onClick={handleLikeComment}>
            <ThumbsUp />
            Aplaudir <span>{likeCount}</span>
          </button>
        </footer>
      </div>
    </div>
  );
};
