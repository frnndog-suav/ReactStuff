import { useCallback, useEffect, useState } from "react";
import { purchaseDomainInstance } from "../../constants/domain";
import { MerchACLType } from "../../domain2/purchase/types/merch/merch-acl";
import HomePageTemplate from "./template";

const HomePage = () => {
  const [merchs, setMerchs] = useState<MerchACLType[]>([]);

  const retrieveMerchs = useCallback(async () => {
    await purchaseDomainInstance.listAllMerchs();
    setMerchs(purchaseDomainInstance.getData.merchs);
  }, []);

  useEffect(() => {
    retrieveMerchs();
  }, [retrieveMerchs]);

  return <HomePageTemplate merchs={merchs} />;
};

export default HomePage;
