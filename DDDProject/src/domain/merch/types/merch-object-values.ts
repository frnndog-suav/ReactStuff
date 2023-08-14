import { MerchCategory } from "../../../constants/enums";

export type MerchObjectValueType = {
  merchName: string;
  description: string;
  category: MerchCategory;
  price: number;
};
