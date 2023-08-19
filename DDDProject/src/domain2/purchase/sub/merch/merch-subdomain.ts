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
}
