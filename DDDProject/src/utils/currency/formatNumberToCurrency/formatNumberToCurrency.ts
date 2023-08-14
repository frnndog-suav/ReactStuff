import { MONEY_FORMAT } from "../../../constants";

export const formatNumberToCurrency = (price: number) =>
  Intl.NumberFormat(MONEY_FORMAT[0], {
    style: "currency",
    currency: MONEY_FORMAT[1],
  }).format(price);
