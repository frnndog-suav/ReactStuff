import { Route, Routes } from "react-router-dom";
import { AreaLogada } from "../paginas/AreaLogada";
import { Pedidos } from "../paginas/AreaLogada/Pedidos";
import Home from "../paginas/Home";
import PaginaBase from "../paginas/PaginaBase";

const Rotas = () => {
  return (
    <Routes>
      <Route path="/" element={<PaginaBase />}>
        <Route path="/" element={<Home />} />
        <Route path="/area-logada" element={<AreaLogada />}>
          <Route path="pedidos" element={<Pedidos />} />
        </Route>
      </Route>
    </Routes>
  );
};

export default Rotas;