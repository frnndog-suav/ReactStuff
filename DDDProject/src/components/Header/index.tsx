import { Link } from "react-router-dom";
import { ROUTE } from "../../routes/paths";
import { useShoppingCartItemStore } from "../../store/useShoppingCartItemsStore";
import { formatNumberToCurrency } from "../../utils/currency/formatNumberToCurrency/formatNumberToCurrency";
import MenuButton from "../MenuButton";
import ShoppingCartButton from "../ShoppingCartButton";

const Header = () => {
  const { items } = useShoppingCartItemStore();

  const shoppingCartTotalValue = formatNumberToCurrency(
    items.reduce((sum, current) => current.totalPrice + sum, 0)
  );

  return (
    <div
      className="      
      w-full
      h-[10vh]
      flex
      p-5 
      items-center
      justify-between
      bg-[#6B0504] 
      "
    >
      <div className="flex gap-3 items-center">
        <MenuButton />
        <Link to={ROUTE["Home"]}>
          <p
            className="          
          font-bold     
          text-xl
          sm:text-3xl
          hover:cursor-pointer
          text-white 
          "
          >
            {"Muamba Online"}
          </p>
        </Link>
      </div>
      <div className="flex items-center">
        <div className="hidden sm:flex flex-col">
          <h3 className="text-white font-normal text-sm sm:text-md">
            {"Valor total do carrinho"}
          </h3>
          <hr className="border-1 my-1/2 border-white text-white" />
          <h1 className="text-white font-semibold text-md sm:text-xl">
            {shoppingCartTotalValue}
          </h1>
        </div>
        <ShoppingCartButton />
      </div>
    </div>
  );
};

export default Header;
