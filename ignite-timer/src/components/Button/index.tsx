import { FC } from "react";
import { ButtonContainer, ButtonVariant } from "./index.styles";

interface ButtonProps {
  variant?: ButtonVariant;
}

export const Button: FC<ButtonProps> = ({ variant = "primary" }) => {
  return <ButtonContainer variant={variant}>Enviar</ButtonContainer>;
};
