import { Link } from "react-router-dom";
import { ROUTE } from "../../routes/paths";

const MenuButton = () => {
  return (
    <Link to={ROUTE["Menu"]}>
      <div
        className={`
      rounded-full 
      "hover:cursor-pointer"
      relative
      bg-white`}
      >
        <img
          alt="Carrinho de compras"
          src="/src/assets/icons/menu-hamburguer.png"
          className="p-2 w-12"
          loading="eager"
        />
      </div>
    </Link>
  );
};

export default MenuButton;
