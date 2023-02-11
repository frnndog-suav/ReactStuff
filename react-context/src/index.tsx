import { createTheme, ThemeProvider } from "@mui/material";
import React from "react";
import ReactDOM from "react-dom/client";
import { CarrinhoProvider } from "./common/contexts/Carrinho";
import { PagamentoProvider } from "./common/contexts/Pagamento";
import { UsuarioProvider } from "./common/contexts/Usuario";
import "./index.css";
import { Routes } from "./router";

const theme = createTheme({
  palette: {
    primary: {
      main: "#2A9F85",
    },
    secondary: {
      main: "#FF7070",
    },
  },
});

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <CarrinhoProvider>
        <PagamentoProvider>
          <UsuarioProvider>
            <Routes />
          </UsuarioProvider>
        </PagamentoProvider>
      </CarrinhoProvider>
    </ThemeProvider>
  </React.StrictMode>
);
