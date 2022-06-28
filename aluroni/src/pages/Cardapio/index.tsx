import styles from "./Cardapio.module.scss";
import { ReactComponent as Logo } from "assets/img/logo.svg";

export default function Cardapio() {
  return (
    <main>
      <nav className={styles.menu}>
        <Logo />
        <header className={styles.header}>
          <div className={styles.header__text}>
            A casa do código da massa
          </div>
        </header>
      </nav>
    </main>
  );
}
