import { Link } from "react-router-dom";
import ShoppingCartIcon from "../ShoppingCartIcon";

const Header = () => {
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
          text-3xl
          hover:cursor-pointer
          text-white 
          "
        >
          {"Muamba Online"}
        </p>
      </Link>
      <ShoppingCartIcon />
    </div>
  );
};

export default Header;
