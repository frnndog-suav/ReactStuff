import {
  Box,
  Button,
  Container,
  Paper,
  TextField,
  Typography,
} from "@mui/material";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { http } from "../../Http";
import IRestaurante from "../../interfaces/IRestaurante";

export const FormularioRestaurante = () => {
  const [nomeRestaurante, setNomeRestaurante] = useState<string>("");
  const parametros = useParams();

  useEffect(() => {
    if (parametros.id) {
      http
        .get<IRestaurante>(`restaurantes/${parametros.id}/`)
        .then((resposta) => {
          setNomeRestaurante(resposta.data.nome);
        });
    }
  }, [parametros.id]);

  const aoSubmeterForm = (evento: React.FormEvent<HTMLFormElement>) => {
    evento.preventDefault();

    if (parametros.id) {
      http
        .put(`restaurantes/${parametros.id}/`, {
          nome: nomeRestaurante,
        })
        .then(() => console.log("Restaurante atualizado"));
    } else {
      http
        .post("restaurantes/", {
          nome: nomeRestaurante,
        })
        .then(() => console.log("Restaurante cadastrado"));
    }
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        flexGrow: 1,
      }}
      justifyContent="center"
      style={{ minHeight: "100vh" }}
    >
      <Box component="form" onSubmit={aoSubmeterForm} sx={{ width: "100%" }}>
        <Typography component="h1" variant="h6">
          Formulário de restaurantes
        </Typography>
        <TextField
          id="standard-basic"
          label="Nome do restaurante"
          variant="standard"
          onChange={(evento) => setNomeRestaurante(evento.target.value)}
          fullWidth
          required
        />
        <Button
          type="submit"
          variant="outlined"
          fullWidth
          sx={{ marginTop: 3 }}
        >
          Salvar
        </Button>
      </Box>
    </Box>
  );
};
