import { useShoppingCartItemStore } from "../../store/useShoppingCartItemsStore";

const ShoppingCartIcon = () => {
  const { items } = useShoppingCartItemStore();

  return (
    <div
      className={`
        rounded-full 
        ${items.length > 0 && "hover:cursor-pointer"}
        relative
        bg-white `}
    >
      <img
        alt="Carrinho de compras"
        src="/src/assets/icons/trolley.png"
        className="p-2 w-12"
        loading="eager"
      />
      {items.length > 0 && (
        <div
          className="
            absolute 
            -bottom-1 
            -left-2 
            rounded-full 
            grow-0 
            shrink-0 
            font-bold 
            text-xs
            px-2 
            w-6
            h-6
            flex
            items-center
            justify-center
          bg-[#E65F5C]"
        >
          {items.length}
        </div>
      )}
    </div>
  );
};

export default ShoppingCartIcon;
