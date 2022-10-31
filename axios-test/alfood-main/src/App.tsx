import { Route, Routes } from "react-router-dom";
import { AdministracaoPratos } from "./paginas/Administracao/AdministracaoPratos";
import { AdministracaoRestaurante } from "./paginas/Administracao/AdministracaoRestaurante";
import { FormularioPrato } from "./paginas/Administracao/FormularioDePrato";
import { FormularioRestaurante } from "./paginas/Administracao/FormularioRestaurante";
import { PaginaBaseAdmin } from "./paginas/Administracao/PaginaBaseAdmin";
import Home from "./paginas/Home";
import VitrineRestaurantes from "./paginas/VitrineRestaurantes";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/restaurantes" element={<VitrineRestaurantes />} />

      <Route path="/admin" element={<PaginaBaseAdmin />}>
        <Route path="restaurantes" element={<AdministracaoRestaurante />} />
        <Route path="restaurantes/novo" element={<FormularioRestaurante />} />
        <Route path="restaurantes/:id" element={<FormularioRestaurante />} />

        <Route path="pratos" element={<AdministracaoPratos />} />
        <Route path="pratos/novo" element={<FormularioPrato />} />
      </Route>
    </Routes>
  );
}

export default App;
