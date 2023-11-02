import styles from "./Post.module.css";

// eslint-disable-next-line react/prop-types
export function Post({ author, content }) {
  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <img
            src="https://avatars.githubusercontent.com/u/98565190?v=4"
            className={styles.avatar}
          />
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
          <a href="#">#teste #projectoBase #rockeseat</a>
        </p>
      </div>
    </article>
  );
}
