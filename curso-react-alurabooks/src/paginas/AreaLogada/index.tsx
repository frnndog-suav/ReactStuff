import { Link, Outlet } from "react-router-dom";
import './AreaLogada.css'

export const AreaLogada = () => {
  return (
    <>
      <h1 className="AreaLoagada___titulo">Minha conta</h1>
      <section className="AreaLogada">
        <div className="menu">
          <ul className="navagacao">
            <li>
              <Link to="/area-logada/pedidos">Pedidos</Link>
            </li>
            <li>
              <Link to="/area-logada/trocas">Trocas</Link>
            </li>
            <li>
              <Link to="/area-logada/cupons">Cupons</Link>
            </li>
            <li>
              <Link to="/area-logada/dados">Seus dados</Link>
            </li>
          </ul>
        </div>
        <div className="conteudo">
          <Outlet />
        </div>
      </section>
    </>
  );
};
