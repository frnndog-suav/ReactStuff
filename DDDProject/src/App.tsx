import { useCallback, useEffect, useState } from "react";
import Body from "./components/Body/Body";
import Header from "./components/Header/Header";
import { ASSETS_PATH, MERCH_IMAGES } from "./constants/images";
import { Purchase } from "./domain2/purchase/main";
import { MerchACLType } from "./domain2/purchase/types/merch/merch-acl";

const purchaseDomain = new Purchase();

function App() {
  const [data, setData] = useState<MerchACLType[]>([]);

  const retrieveMerchs = useCallback(async () => {
    await purchaseDomain.listAllMerchs();
    setData(purchaseDomain.getData.merchs);
  }, []);

  useEffect(() => {
    retrieveMerchs();
  }, [retrieveMerchs]);

  console.log("renderizando");

  return (
    <div
      className="
      h-full 
      w-full 
      flex 
      flex-col">
      <Header />
      <Body>
        <div
          className="
            p-5 
            gap-5 
            grid 
            sm:grid-cols-1 
            md:grid-cols-2
            lg:grid-cols-3
            xl:grid-cols-4">
          {data.map((merch) => (
            <div
              key={`listing-merch-${merch.id}`}
              className="border-2 border-[#241023] rounded-md p-3 flex flex-col">
              <h3 className="font-semibold text-2xl">{merch.merchName}</h3>
              <hr className="border-1 my-4 border-[#241023]" />
              <div className="flex justify-center">
                <img
                  alt={merch.description}
                  src={`${ASSETS_PATH}/${MERCH_IMAGES[merch.id]}`}
                  className="xl:w-56 xl:h-56"
                  loading="lazy"
                />
              </div>
              <div className="mt-3">
                <p className="font-bold text-xl">{merch.formattedPrice}</p>
                <p className="font-semibold text-md">
                  {merch.formattedCategory}
                </p>
              </div>
            </div>
          ))}
        </div>
      </Body>
    </div>
  );
}

export default App;
