import Skeleton from "@mui/material/Skeleton/Skeleton";
import Button from "../Button";

const ShowcaseSkeleton = () => {
  return (
    <div className="border-2 border-[#241023] rounded-md p-3 flex flex-col">
      <Skeleton width={"100%"} />
      <hr className="border-1 my-4 border-[#241023]" />
      <Skeleton variant="rounded" width={"100%"} height={224} />
      <Skeleton style={{ marginTop: 24 }} />
      <Skeleton style={{ marginBottom: "0.75rem" }} />
      <Button layoutType="blue" disabled={true}>
        {"Adicionar ao carrinho"}
      </Button>
    </div>
  );
};

export default ShowcaseSkeleton;
