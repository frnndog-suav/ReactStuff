import { FC } from "react";
import Button from "../../components/Button";
import MerchDetailImage from "../../components/MerchDetailImage";
import MerchDetailInfoContainer from "../../components/MerchDetailInfoContainer";
import MerchDetailName from "../../components/MerchDetailName";
import { MerchACLType } from "../../domain2/purchase/types/merch/merch-acl";

interface MerchDetailedViewPageTemplateProps {
  merch?: MerchACLType;
  isLoading: boolean;
  handleAddToCart: (merch?: MerchACLType) => void;
  handleBuyProduct: () => void;
}

const MerchDetailedViewPageTemplate: FC<MerchDetailedViewPageTemplateProps> = ({
  merch,
  isLoading,
  handleAddToCart,
  handleBuyProduct,
}) => (
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
          <Button
            layoutType="blue"
            onClick={handleBuyProduct}
            disabled={isLoading}
          >
            {"Comprar produto"}
          </Button>
          <Button
            layoutType="green"
            onClick={() => handleAddToCart(merch)}
            disabled={isLoading}
          >
            {"Adicionar ao carrinho"}
          </Button>
        </div>
      </div>
    </div>
  </div>
);

export default MerchDetailedViewPageTemplate;
