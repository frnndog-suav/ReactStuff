import React from "react";
import ReactDOM from "react-dom/client";
import {
  Navigate,
  RouterProvider,
  createBrowserRouter,
} from "react-router-dom";
import App from "./App.tsx";
import { PrivateRoute } from "./components/PrivateRoute.tsx";
import "./index.css";
import { Contact } from "./routes/Contact.tsx";
import { ContactDetails } from "./routes/ContactDetails.tsx";
import { ErrorPage } from "./routes/ErrorPage.tsx";
import { Home } from "./routes/Home.tsx";
import { PrivateComponent } from "./routes/PrivateComponent.tsx";

//1 - Configurando router

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <Home />,
//   },
//   {
//     path: "/contact",
//     element: <Contact />,
//   },
// ]);

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    //3 - pagina de erro
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/private",
        element: (
          <PrivateRoute>
            <PrivateComponent />
          </PrivateRoute>
        ),
      },
      //5 - nested routes - identificador único (dynamic routes)
      {
        path: "/contact/:nomeDaVariavel",
        element: <ContactDetails />,
      },
      //7 - navegar para paginas que não existem
      {
        path: "/oldPage",
        element: <Navigate to="/contact" />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
