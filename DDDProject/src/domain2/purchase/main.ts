import { MerchRepository } from "./repository/merch/merch-repository";
import { MerchSubDomain } from "./sub/merch/merch-subdomain";
import { MerchACLType } from "./types/merch/merch-acl";
import { ShoppingCartItemObjectValueType } from "./types/shopping-cart-item/shopping-cart-item-object-value";

export class Purchase {
  private merchs: MerchACLType[] = [];

  constructor(private readonly merchRepository = new MerchRepository()) {}

  get getData() {
    return {
      merchs: this.merchs,
    };
  }

  async listAllMerchs() {
    const merchs = await this.merchRepository.list();
    if (merchs) {
      this.merchs = MerchSubDomain.merchsFormatter(merchs);
    }
  }

  addMerchToShoppingCart(
    merch: MerchACLType,
    amount = 1
  ): ShoppingCartItemObjectValueType {    
    return {
      amount,
      merch: MerchSubDomain.convertACLToEntity(merch),
      totalPrice: merch.price * amount,
    };
  }
}
