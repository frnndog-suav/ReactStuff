import { FC } from "react";
import { MERCH_IMAGES } from "../../constants/images";
import { MerchACLType } from "../../domain2/purchase/types/merch/merch-acl";
import Button from "../Button";

interface ShowcaseProps {
  merch: MerchACLType;
  isLoading: boolean;
  handleAddToCart: (merch: MerchACLType) => void;
  handleViewDetails: (merch: MerchACLType) => void;
}

const ShowcaseTemplate: FC<ShowcaseProps> = ({
  merch,
  handleAddToCart,
  handleViewDetails,
  isLoading,
}) => (
  <div className="border-2 border-[#241023] rounded-md p-3 flex flex-col">
    <div className="flex items-center justify-between">
      <h3 className="font-semibold text-2xl">{merch.merchName}</h3>
      <div
        className={`
            rounded-full 
            hover:cursor-pointer
            relative         
            hover:bg-opacity-5
            hover:bg-black
        `}
        onClick={() => handleViewDetails(merch)}
      >
        <img
          alt="Detalhar item"
          src="/src/assets/icons/magnifier.png"
          className="p-2 w-10"
          loading="eager"
        />
      </div>
    </div>
    <hr className="border-1 my-4 border-[#241023]" />
    <div className="flex justify-center">
      <img
        alt={merch.description}
        src={`/src/assets/merchs/${MERCH_IMAGES[merch.id]}`}
        className="w-56 h-56 hover:cursor-pointer"
        loading="lazy"
        onClick={() => handleViewDetails(merch)}
      />
    </div>
    <div className="mt-3 flex flex-col">
      <p className="font-bold text-3xl mt-3">{merch.formattedPrice}</p>
      <p className="font-semibold text-md mb-3">{merch.formattedCategory}</p>
      <Button
        layoutType="blue"
        onClick={() => handleAddToCart(merch)}
        disabled={isLoading}
      >
        {"Adicionar ao carrinho"}
      </Button>
    </div>
  </div>
);

export default ShowcaseTemplate;
