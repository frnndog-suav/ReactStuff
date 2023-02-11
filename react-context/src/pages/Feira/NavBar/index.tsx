import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { Badge, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { LogoImage } from "../../../assets";
import { useCarrinhoContext } from "../../../common/contexts/Carrinho";
import { Nav } from "./styles";

export const NavBar = () => {
  const { quantidadeCarrinho } = useCarrinhoContext();
  const navigate = useNavigate();

  return (
    <Nav>
      <LogoImage />

      <Button
        onClick={() => navigate("/carrinho")}
        disabled={quantidadeCarrinho === 0}
      >
        <Badge badgeContent={quantidadeCarrinho} color="primary">
          <ShoppingCartIcon />
        </Badge>
      </Button>
    </Nav>
  );
};
