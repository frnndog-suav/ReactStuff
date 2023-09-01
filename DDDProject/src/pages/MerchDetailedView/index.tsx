import { useCallback, useEffect, useState } from "react";
import toast from "react-hot-toast";
import { useParams } from "react-router-dom";
import { purchaseDomainInstance } from "../../constants/domain";
import { MerchACLType } from "../../domain2/purchase/types/merch/merch-acl";
import { useShoppingCartItemStore } from "../../store/useShoppingCartItemsStore";
import MerchDetailedViewPageTemplate from "./template";

const MerchDetailedViewPage = () => {
  const { addItem } = useShoppingCartItemStore();
  const { id } = useParams();
  //QUESTION (objetos ACL serão os objetos de consulta principal da aplicação?)
  const [merch, setMerch] = useState<MerchACLType | undefined>(undefined);
  const [isLoading, setIsLoading] = useState(false);

  const getMerch = useCallback(async () => {
    if (id) {
      const merch = await purchaseDomainInstance.getMerch(id);
      setMerch(merch);
    }
  }, [id]);

  useEffect(() => {
    getMerch();
  }, [getMerch]);

  const handleAddToCart = (selectedMerch?: MerchACLType) => {
    if (!selectedMerch) return;
    setIsLoading(true);
    const shoppingCarItem =
      purchaseDomainInstance.addMerchToShoppingCart(selectedMerch);
    toast.success(`${selectedMerch.merchName} foi adicionado(a) ao carrinho!`);
    addItem(shoppingCarItem);
    setIsLoading(false);
  };

  const handleBuyProduct = () => {};

  return (
    <MerchDetailedViewPageTemplate
      handleAddToCart={handleAddToCart}
      handleBuyProduct={handleBuyProduct}
      isLoading={isLoading}
      merch={merch}
    />
  );
};

export default MerchDetailedViewPage;
