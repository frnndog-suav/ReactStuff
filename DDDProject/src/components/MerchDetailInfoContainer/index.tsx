import { Skeleton } from "@mui/material";
import React, { FC } from "react";
interface MerchDetailInfoContainerProps {
  label: string;
  value?: string;
}

const MerchDetailInfoContainer: FC<MerchDetailInfoContainerProps> = ({
  label,
  value,
}) => {
  return (
    <React.Fragment>
      <h3 className="font-semibold text-xl">{label}</h3>
      <p className="font-normal text-lg">
        {value ? value : <Skeleton variant="text" />}
      </p>
      <br />
    </React.Fragment>
  );
};

export default MerchDetailInfoContainer;
