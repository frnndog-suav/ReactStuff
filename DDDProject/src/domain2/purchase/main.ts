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

  //QUESTION (pq armazenar a listagem no main ao invés de devolve-la?)
  async listAllMerchs() {
    const merchs = await this.merchRepository.list();
    this.merchs = MerchSubDomain.formatMerchListing(merchs);
  }

  async getMerch(id: string) {
    const merch = await this.merchRepository.get(id);
    return MerchSubDomain.merchFormatter(merch);
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
