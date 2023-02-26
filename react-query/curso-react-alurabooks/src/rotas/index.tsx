import { Route, Routes } from "react-router-dom";
import { Categoria } from "../paginas/Categoria";
import Home from "../paginas/Home";
import PaginaBase from "../paginas/PaginaBase";

const Rotas = () => {
  return (
    <Routes>
      <Route path="/" element={<PaginaBase />}>
        <Route path="/" element={<Home />} />
        <Route path="/categorias/:slug" element={<Categoria />} />
      </Route>
    </Routes>
  );
};

export default Rotas;
