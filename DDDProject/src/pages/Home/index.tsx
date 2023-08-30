import { useCallback, useEffect, useState } from "react";
import { purchaseDomainInstance } from "../../constants/domain";
import { MerchACLType } from "../../domain2/purchase/types/merch/merch-acl";
import HomePageTemplate from "./template";

const HomePage = () => {
  const [merchs, setMerchs] = useState<MerchACLType[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  const retrieveMerchs = useCallback(async () => {
    setIsLoading(true);
    await purchaseDomainInstance.listAllMerchs();
    setMerchs(purchaseDomainInstance.getData.merchs);
    setIsLoading(false);
  }, []);

  useEffect(() => {
    retrieveMerchs();
  }, [retrieveMerchs]);

  return <HomePageTemplate merchs={merchs} isLoading={isLoading} />;
};

export default HomePage;
