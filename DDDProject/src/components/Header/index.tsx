import ShoppingCartIcon from "../ShoppingCartIcon";

const Header = () => {
  return (
    <div
      className="      
      w-full
      h-[10vh]
      flex
      py-5 
      px-10
      items-center
      justify-between
      bg-[#6B0504] 
      "
    >
      <p
        className="
          text-white 
          font-bold     
          text-3xl"
      >
        {"Muamba Online"}
      </p>
      <ShoppingCartIcon />
    </div>
  );
};

export default Header;
