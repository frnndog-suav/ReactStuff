/* eslint-disable react/prop-types */
import { format, formatDistanceToNow } from "date-fns";
import { ptBR } from "date-fns/locale";
import { useState } from "react";
import { Avatar } from "../Avatar/Avatar";
import { Comment } from "../Comment/Comment";
import styles from "./Post.module.css";

export function Post({ id, content, author, publishedAt }) {
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState("");

  const formattedPublishedAt = format(publishedAt, "d 'de' LLLL 'às' HH'h'mm", {
    locale: ptBR,
  });

  const publishedDateRelativeToNow = formatDistanceToNow(publishedAt, {
    locale: ptBR,
    addSuffix: true,
  });

  function handleSubmit() {
    event.preventDefault();

    setComments((previousValue) => [
      ...previousValue,
      { id: comments.length + 1, content: newComment },
    ]);

    setNewComment("");
  }

  function handleNewComment() {
    event.target.setCustomValidity("");
    setNewComment(event.target.value);
  }

  function deleteComment(id) {
    setComments((previousComments) =>
      previousComments.filter((comment) => comment.id !== id)
    );
  }

  function handleCommentInvalid() {
    event.target.setCustomValidity("Esse campo é obrigatório");
  }

  const isNewCommentEmpty = newComment.length === 0;

  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <Avatar src={author.avatarUrl} />
          <div className={styles.authorInfo}>
            <strong>{author.name}</strong>
            <span>{author.role}</span>
          </div>
        </div>

        <time title={formattedPublishedAt} dateTime={publishedAt.toISOString()}>
          {publishedDateRelativeToNow}
        </time>
      </header>
      <div className={styles.content}>
        {content.map((item) => {
          if (item.type === "paragraph") {
            return (
              <p key={`${id}-${item.type}-${item.content}`}>{item.content}</p>
            );
          }

          if (item.type === "link") {
            return (
              <p key={`${id}-${item.type}-${item.content}`}>
                <a href="">{item.content}</a>
              </p>
            );
          }
        })}
      </div>

      <form onSubmit={handleSubmit} className={styles.commentForm}>
        <strong>Deixe seu feedback</strong>
        <textarea
          name="commentArea"
          placeholder="Deixe um comentário"
          onChange={handleNewComment}
          value={newComment}
          required
          onInvalid={handleCommentInvalid}
        />
        <footer>
          <button type="submit" disabled={isNewCommentEmpty}>
            Publicar
          </button>
        </footer>
      </form>
      <div className={styles.commentList}>
        {comments.map((comment) => (
          <Comment
            key={`comment-${comment.id}`}
            {...comment}
            onDeleteComment={deleteComment}
          />
        ))}
      </div>
    </article>
  );
}
