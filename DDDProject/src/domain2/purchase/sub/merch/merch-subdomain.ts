import { MerchEntity } from "../../entity/merch/merch-entity";
import { MerchACLType } from "../../types/merch/merch-acl";
import { MerchEntityType } from "../../types/merch/merch-entity";

export class MerchSubDomain {
  static removeUndefinedValues(merchsACL: (MerchACLType | undefined)[]) {
    return merchsACL.reduce((previousValue, currentValue) => {
      if (currentValue !== undefined) {
        previousValue.push(currentValue);
      }
      return previousValue;
    }, [] as MerchACLType[]);
  }

  static merchsFormatter(merchs: MerchEntityType[]) {
    const merchsACL = merchs.map((merch) => {
      const merchACL = MerchEntity.createMerchEntity(merch);
      return merchACL;
    });

    return this.removeUndefinedValues(merchsACL);
  }

  static convertACLToEntity(merch: MerchACLType): MerchEntityType {
    return {
      id: merch.id,
      category: merch.category,
      description: merch.description,
      merchName: merch.merchName,
      price: merch.price,
    };
  }

}
