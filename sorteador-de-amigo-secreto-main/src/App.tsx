import { BrowserRouter, Route, Routes } from "react-router-dom";
import { RecoilRoot } from "recoil";
import { Configuracao } from "./paginas/Configuracao/Configuracao";
import Sorteio from "./paginas/Sorteio/Sorteio";

function App() {
  return (
    <BrowserRouter>
      <RecoilRoot>
        <Routes>
          <Route path="/" element={<Configuracao />} />
          <Route path="/sorteio" element={<Sorteio />} />
        </Routes>
      </RecoilRoot>
    </BrowserRouter>
  );
}

export default App;
