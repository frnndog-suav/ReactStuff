import { MerchCategory } from "../../../constants/enums";

export type MerchEntityType = {
  id: string;
  merchName: string;
  description: string;
  category: MerchCategory;
  price: number;
};
