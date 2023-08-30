import Skeleton from "@mui/material/Skeleton/Skeleton";
import { FC } from "react";
import { useNavigate } from "react-router-dom";

interface MerchDetailNameProps {
  merchName?: string;
}

const MerchDetailName: FC<MerchDetailNameProps> = ({ merchName }) => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col">
      <div className="flex justify-between">
        <h2 className="font-semibold text-3xl">
          {merchName ?? <Skeleton variant="text" />}
        </h2>
        <div
          className={`
            rounded-full 
            hover:cursor-pointer
            relative         
            hover:bg-opacity-5
            hover:bg-black
        `}
          onClick={() => navigate("/")}
        >
          <img
            alt="Carrinho de compras"
            src="/src/assets/icons/left-arrow.png"
            className="p-2 w-10"
            loading="eager"
          />
        </div>
      </div>
      <hr className="border-1 my-4 border-[#241023]" />
    </div>
  );
};

export default MerchDetailName;
