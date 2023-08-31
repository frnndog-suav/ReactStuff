import { FC, useState } from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { purchaseDomainInstance } from "../../constants/domain";
import { MerchACLType } from "../../domain2/purchase/types/merch/merch-acl";
import { useShoppingCartItemStore } from "../../store/useShoppingCartItemsStore";
import ShowcaseTemplate from "./template";

interface ShowcaseProps {
  merch: MerchACLType;  
}

const Showcase: FC<ShowcaseProps> = ({ merch }) => {
  const { addItem } = useShoppingCartItemStore();
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleAddToCart = (merch: MerchACLType) => {
    setIsLoading(true);
    const shoppingCarItem =
      purchaseDomainInstance.addMerchToShoppingCart(merch);
    toast.success(`${merch.merchName} foi adicionado(a) ao carrinho!`);
    addItem(shoppingCarItem);
    setIsLoading(false);
  };

  const handleViewDetails = (merch: MerchACLType) => {
    navigate(`/merch/${merch.id}`);
  };

  return (
    <ShowcaseTemplate
      handleAddToCart={handleAddToCart}
      handleViewDetails={handleViewDetails}
      isLoading={isLoading}
      merch={merch}
    />
  );
};

export default Showcase;
