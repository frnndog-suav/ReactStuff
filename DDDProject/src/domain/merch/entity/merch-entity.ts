import { MerchCategory } from "../../../constants/enums";
import { formatNumberToCurrency } from "../../../utils/currency/formatNumberToCurrency/formatNumberToCurrency";
import { MerchACLType } from "../types/merch-acl";
import { MerchEntityType } from "../types/merch-entity";

export class MerchEntity {
  validateMerchEntity(merch: MerchEntityType) {
    const { category, description, id, merchName, price } = merch;

    if (!id || typeof id !== "string") {
      return false;
    }

    if (typeof price !== "number" || price <= 0) {
      return false;
    }

    if (category === MerchCategory.Unknown) {
      return false;
    }

    if (typeof description !== "string") {
      return false;
    }

    if (typeof merchName !== "string") {
      return false;
    }

    return true;
  }

  createMerchEntity(merch: MerchEntityType): MerchACLType | undefined {
    if (!this.validateMerchEntity(merch)) {
      return;
    }

    const { category, description, id, merchName, price } = merch;

    const formattedPrice = formatNumberToCurrency(price);

    return {
      category,
      description,
      formattedPrice,
      id,
      merchName,
      price,
    };
  }
}
