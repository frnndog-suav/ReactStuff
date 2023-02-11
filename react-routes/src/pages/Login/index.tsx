import { Button, Input, InputAdornment, InputLabel } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useUsuarioContext } from "../../common/contexts/Usuario";
import { Container, InputContainer, Titulo } from "./styles";

export const Login = () => {
  const navigate = useNavigate();
  const { nome, setNome, saldo, setSaldo } = useUsuarioContext();

  return (
    <Container>
      <Titulo>Insira o seu nome</Titulo>
      <InputContainer>
        <InputLabel>Nome</InputLabel>
        <Input
          type="text"
          value={nome}
          onChange={(event) => setNome(event.target.value)}
        />
      </InputContainer>
      <InputContainer>
        <InputLabel>Saldo</InputLabel>
        <Input
          value={saldo}
          type="number"
          onChange={(event) => setSaldo(Number(event.target.value))}
          startAdornment={<InputAdornment position="start">R$</InputAdornment>}
        />
      </InputContainer>
      <Button
        variant="contained"
        color="primary"
        onClick={() => navigate("/feira")}
      >
        Avançar
      </Button>
    </Container>
  );
};
