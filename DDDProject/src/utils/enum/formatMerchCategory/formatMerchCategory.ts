import { MerchCategory } from "../../../domain2/purchase/constants/enums";

export const formatMerchCategory = (merchCategory: number): string => {
  switch (merchCategory) {
    case MerchCategory.Furniture:
      return "Mobília";
    case MerchCategory.Technology:
      return "Tecnologia";
    case MerchCategory.Object:
      return "Object";
    default:
      return "Desconhecido";
  }
};
