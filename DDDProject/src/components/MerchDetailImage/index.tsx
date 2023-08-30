import Skeleton from "@mui/material/Skeleton/Skeleton";
import { FC } from "react";
import { MERCH_IMAGES } from "../../constants/images";
import { MerchACLType } from "../../domain2/purchase/types/merch/merch-acl";

interface MerchDetailImageProps {
  merch?: MerchACLType;
}

const MerchDetailImage: FC<MerchDetailImageProps> = ({ merch }) => {
  return (
    <div
      className="
        flex 
        flex-col 
        justify-center
        rounded-md 
        border-2 
        p-3
        border-[#241023] 
        bg-[#F1E7E4]                 
        "
    >
      {merch ? (
        <img
          alt={merch.description}
          src={`/src/assets/merchs/${MERCH_IMAGES[merch.id]}`}
          className="h-[300px]"
          loading="lazy"
        />
      ) : (
        <Skeleton variant="rectangular" height={"300px"} />
      )}
    </div>
  );
};

export default MerchDetailImage;
