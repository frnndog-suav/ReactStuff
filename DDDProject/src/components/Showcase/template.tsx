import { FC } from "react";
import { MERCH_IMAGES } from "../../constants/images";
import { MerchACLType } from "../../domain2/purchase/types/merch/merch-acl";

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
      <img
        alt="Detalhar item"
        src="/src/assets/icons/magnifier.png"
        className="h-5 cursor-pointer"
        loading="eager"
        onClick={() => handleViewDetails(merch)}
      />
    </div>
    <hr className="border-1 my-4 border-[#241023]" />
    <div className="flex justify-center">
      <img
        alt={merch.description}
        src={`/src/assets/merchs/${MERCH_IMAGES[merch.id]}`}
        className="xl:w-56 xl:h-56 hover:cursor-pointer"
        loading="lazy"
        onClick={() => handleViewDetails(merch)}
      />
    </div>
    <div className="mt-3 flex flex-col">
      <div className="flex flex-col">
        <p className="font-bold text-xl">{merch.formattedPrice}</p>
        <p className="font-semibold text-md">{merch.formattedCategory}</p>
      </div>
      <div className="mt-3">
        <button
          className="
            border-2 
            rounded-md 
            px-3 
            w-full
            border-[#336699]
            bg-[#336699]            
            hover:bg-[#29527A]
            active:bg-[#1F3D5C]            
            text-white
            disabled:bg-slate-300
            disabled:text-slate-400          
            disabled:border-slate-300            
            "
          onClick={() => handleAddToCart(merch)}
          disabled={isLoading}
        >
          {"Adicionar ao carrinho"}
        </button>
      </div>
    </div>
  </div>
);

export default ShowcaseTemplate;
