import { Link } from "react-router-dom";
import { useShoppingCartItemStore } from "../../store/useShoppingCartItemsStore";
import { formatNumberToCurrency } from "../../utils/currency/formatNumberToCurrency/formatNumberToCurrency";
import ShoppingCartIcon from "../ShoppingCartIcon";

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
      <Link to="/">
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
      <div className="flex items-center">
        <div className="flex flex-col">
          <h3 className="text-white font-normal text-sm sm:text-md">
            {"Valor total do carrinho"}
          </h3>
          <hr className="border-1 my-1/2 border-white text-white" />
          <h1 className="text-white font-semibold text-md sm:text-xl">
            {shoppingCartTotalValue}
          </h1>
        </div>
        <ShoppingCartIcon />
      </div>
    </div>
  );
};

export default Header;
