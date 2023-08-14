import { MerchCategory } from "../../../constants/enums";

export type MerchACLType = {
  id: string;
  merchName: string;
  description: string;
  category: MerchCategory;
  price: number;
  formattedPrice: string;
};
