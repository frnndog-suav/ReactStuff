import { useParams } from "react-router-dom";

const MerchDetailedViewPage = () => {
  const { id } = useParams();

  return <div>Produto: {id}</div>;
};

export default MerchDetailedViewPage;
