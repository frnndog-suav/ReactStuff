import { PaymentMethod } from "../../../constants/enums";

export const formatPaymentMethod = (paymentMethod: PaymentMethod): string => {
  switch (paymentMethod) {
    case PaymentMethod.Credit:
      return "Crédito";
    case PaymentMethod.Debit:
      return "Débito";
    case PaymentMethod.Pix:
      return "Pix";
    default:
      return "Desconhecido";
  }
};
