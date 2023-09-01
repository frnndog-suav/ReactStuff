import { Outlet } from "react-router-dom";

const MenuPage = () => {
  return (
    <div>
      <h1>Pagina do menu</h1>
      <Outlet />
    </div>
  );
};

export default MenuPage;
