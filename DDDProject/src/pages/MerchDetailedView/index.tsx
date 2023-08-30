import { useCallback, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Button from "../../components/Button";
import MerchDetailImage from "../../components/MerchDetailImage";
import MerchDetailInfoContainer from "../../components/MerchDetailInfoContainer";
import MerchDetailName from "../../components/MerchDetailName";
import { purchaseDomainInstance } from "../../constants/domain";
import { MerchACLType } from "../../domain2/purchase/types/merch/merch-acl";

const MerchDetailedViewPage = () => {
  const { id } = useParams();
  //QUESTION (objetos ACL serão os objetos de consulta principal da aplicação?)
  const [merch, setMerch] = useState<MerchACLType | undefined>(undefined);

  const getMerch = useCallback(async () => {
    if (id) {
      const merch = await purchaseDomainInstance.getMerch(id);
      setMerch(merch);
    }
  }, [id]);

  useEffect(() => {
    getMerch();
  }, [getMerch]);

  return (
    <div
      className="
        p-5 
        max-h-screen 
        overflow-y-auto"
    >
      <div className="flex flex-col">
        <MerchDetailName merchName={merch?.merchName} />
        <MerchDetailImage merch={merch} />
        <br />
        <MerchDetailInfoContainer label="Preço" value={merch?.formattedPrice} />
        <MerchDetailInfoContainer
          label="Categoria"
          value={merch?.formattedCategory}
        />
        <MerchDetailInfoContainer
          label="Descrição"
          value={merch?.description}
        />
        <Button layoutType="blue">{"Comprar produto"}</Button>
        <br />
        <Button layoutType="green">{"Adicionar ao carrinho"}</Button>
      </div>
    </div>

    // <div className="flex h-full w-full gap-4 p-5">
    //   <div
    //     className="
    //     flex
    //     flex-col
    //     justify-center
    //     rounded-md
    //     p-3
    //     w-1/2
    //     border-2
    //     border-[#241023]
    //     bg-[#F1E7E4]
    //     "
    //   >
    // <MerchDetailImage />
    //   </div>
    //   <div className="flex flex-col w-1/2 p-3">
    //     <MerchDetailName merchName={merch?.merchName} />
    //     <MerchDetailInfoContainer label="Preço" value={merch?.formattedPrice} />
    //     <MerchDetailInfoContainer
    //       label="Categoria"
    //       value={merch?.formattedCategory}
    //     />
    //     <MerchDetailInfoContainer
    //       label="Descrição"
    //       value={merch?.description}
    //     />
    //   </div>
    // </div>
  );
};

export default MerchDetailedViewPage;
