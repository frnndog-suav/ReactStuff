import { formatNumberToCurrency } from "../../../../utils/currency/formatNumberToCurrency/formatNumberToCurrency";
import { formatMerchCategory } from "../../../../utils/enum/formatMerchCategory/formatMerchCategory";
import { MerchCategory } from "../../constants/enums";
import { MerchACLType } from "../../types/merch/merch-acl";
import { MerchEntityType } from "../../types/merch/merch-entity";

export class MerchEntity {
  static isMerchEntityValid(merchEntity: MerchEntityType) {
    const { category, description, id, merchName, price } = merchEntity;

    if (!id || typeof id !== "string") {
      return false;
    }

    if (
      !category ||
      typeof category !== "number" ||
      category === MerchCategory.Unknown
    ) {
      return false;
    }

    if (!description || typeof description !== "string") {
      return false;
    }

    if (!merchName || typeof merchName !== "string") {
      return false;
    }

    if (!price || typeof price !== "number" || price <= 0) {
      return false;
    }

    return true;
  }

  static createMerchEntity(
    merchEntity: MerchEntityType
  ): MerchACLType | undefined {
    if (!this.isMerchEntityValid(merchEntity)) {
      return;
    }

    const { category, description, id, merchName, price } = merchEntity;

    const formattedPrice = formatNumberToCurrency(price);

    const formattedCategory = formatMerchCategory(category);

    return {
      category,
      description,
      id,
      merchName,
      price,
      formattedPrice,
      formattedCategory,
    };
  }
}
