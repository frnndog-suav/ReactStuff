import { FC } from "react";
import Showcase from "../../components/Showcase";
import { MerchACLType } from "../../domain2/purchase/types/merch/merch-acl";

interface HomePageTemplateProps {
  merchs: MerchACLType[];
  isLoading: boolean;
}

const HomePageTemplate: FC<HomePageTemplateProps> = ({ merchs, isLoading }) => (
  <div
    className="
        p-5 
        max-h-screen 
        overflow-y-auto"
  >
    <div
      className="
        gap-5 
        grid 
        sm:grid-cols-1 
        md:grid-cols-2
        lg:grid-cols-3
        xl:grid-cols-4
        2xl:grid-cols-5
      "
    >
      {merchs.map((merch) => (
        <Showcase
          key={`listing-merch-${merch.id}`}
          merch={merch}
          isLoading={isLoading}
        />
      ))}
    </div>
  </div>
);

export default HomePageTemplate;
