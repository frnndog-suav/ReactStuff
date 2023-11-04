/* eslint-disable react/prop-types */
import { format, formatDistanceToNow } from "date-fns";
import { ptBR } from "date-fns/locale";
import { Avatar } from "../Avatar/Avatar";
import { Comment } from "../Comment/Comment";
import styles from "./Post.module.css";

export function Post({ id, content, author, publishedAt }) {
  const formattedPublishedAt = format(publishedAt, "d 'de' LLLL 'às' HH'h'mm", {
    locale: ptBR,
  });

  const publishedDateRelativeToNow = formatDistanceToNow(publishedAt, {
    locale: ptBR,
    addSuffix: true,
  });

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
