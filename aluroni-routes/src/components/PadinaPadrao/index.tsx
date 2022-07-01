import stylesTema from "styles/Tema.module.scss";
import styles from "./PaginaPadrao.module.scss";

import { Outlet } from "react-router-dom";

export default function PaginaPadrao() {
  return (
    <>
      <header className={styles.header}>
        <div className={styles.header__text}>A casa do código da massa</div>
      </header>
      <div className={stylesTema.titulo}>
        <Outlet />
      </div>
    </>
  );
}
