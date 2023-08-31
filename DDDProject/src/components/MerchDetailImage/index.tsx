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
        h-[300px]
        lg:h-full
        border-[#241023] 
        bg-[#F8F3F2]                         
        "
    >
      {merch ? (
        <img
          alt={merch.description}
          src={`/src/assets/merchs/${MERCH_IMAGES[merch.id]}`}
          className="h-[300px] object-contain"
          loading="lazy"
        />
      ) : (
        <Skeleton variant="rounded" height={"100%"} />
      )}
    </div>
  );
};

export default MerchDetailImage;
