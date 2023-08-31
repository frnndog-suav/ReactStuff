import { useCallback, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Button from "../../components/Button";
import MerchDetailImage from "../../components/MerchDetailImage";
import MerchDetailInfoContainer from "../../components/MerchDetailInfoContainer";
import MerchDetailName from "../../components/MerchDetailName";
import { purchaseDomainInstance } from "../../constants/domain";
import { MerchACLType } from "../../domain2/purchase/types/merch/merch-acl";
import toast from "react-hot-toast";
import { useShoppingCartItemStore } from "../../store/useShoppingCartItemsStore";

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
    <div
      className="
        p-5 
        max-h-screen 
        overflow-y-auto     
        lg:h-full     
        "
    >
      <MerchDetailName merchName={merch?.merchName} />
      <div
        className="
          flex      
          flex-col    
          lg:flex-row 
          lg:gap-4    
          lg:h-[73vh]      
          "
      >
        <div
          className="
          lg:flex 
          lg:flex-col
          lg:justify-center
          lg:w-1/2
        "
        >
          <MerchDetailImage merch={merch} />
        </div>
        <div
          className="
          lg:flex 
          lg:flex-col          
          lg:w-1/2
          lg:h-full
          lg:justify-between
        "
        >
          <div className="mt-3">
            <MerchDetailInfoContainer
              label="Preço"
              value={merch?.formattedPrice}
            />
            <MerchDetailInfoContainer
              label="Categoria"
              value={merch?.formattedCategory}
            />
            <MerchDetailInfoContainer
              label="Descrição"
              value={merch?.description}
            />
          </div>
          <div
            className="
            flex 
            flex-col 
            gap-3"
          >
            <Button layoutType="blue" onClick={handleBuyProduct} disabled={isLoading}>
              {"Comprar produto"}
            </Button>
            <Button layoutType="green" onClick={() => handleAddToCart(merch)} disabled={isLoading}>
              {"Adicionar ao carrinho"}
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MerchDetailedViewPage;
