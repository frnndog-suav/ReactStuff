import { Box, Typography } from "@mui/material";
import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
  useParams
} from "react-router-dom";
import { App } from "./App";
import { Carrinho } from "./pages/Carrinho";
import { Erro } from "./pages/Erro";
import { Feira } from "./pages/Feira";
import { Login } from "./pages/Login";

const NestedRouteExample = () => {
  const { suaVariavelAqui } = useParams();

  return (
    <Box>
      <Typography> {suaVariavelAqui}</Typography>
    </Box>
  );
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Erro />,
    children: [
      {
        path: "/",
        element: <Login />,
      },
      {
        path: "/feira",
        element: <Feira />,
      },
      {
        path: "/carrinho",
        element: <Carrinho />,
      },
      // Exemplo de nested routes - dynamic routes
      {
        path: "/carrinho/:suaVariavelAqui",
        element: <NestedRouteExample />,
      },
      // Navegar em paginas não existentes
      {
        path: '/caminhroAntigo',
        element: <Navigate to={'/novoCaminho'} />
      }
    ],
  },
]);

export const Routes = () => <RouterProvider router={router} />;
