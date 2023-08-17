import { MerchCategory } from "../../constants/enums";
import { MerchObjectValueType } from "../../types/merch/merch-object-values";

export class MerchValueObject {
  static isMerchValueObjectValid(merchValueObject: MerchObjectValueType) {
    const { category, description, merchName, price } = merchValueObject;

    if (
      !category ||
      typeof category !== "object" ||
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
}
