import {
  Box,
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  Typography,
} from "@mui/material";
import { useEffect, useState } from "react";
import { http } from "../../Http";
import IRestaurante from "../../interfaces/IRestaurante";
import { ITag } from "../../interfaces/ITag";

export const FormularioPrato = () => {
  const [nomePrato, setNomePrato] = useState<string>("");
  const [descricao, setDescricao] = useState<string>("");
  const [tags, setTags] = useState<ITag[]>([]);
  const [tag, setTag] = useState<string>("");
  const [restaurantes, setRestaurantes] = useState<IRestaurante[]>([]);
  const [restaurante, setRestaurante] = useState<string>("");
  const [imagem, setImagem] = useState<File | undefined>(undefined);

  useEffect(() => {
    http
      .get<{ tags: ITag[] }>("tags/")
      .then((resposta) => setTags(resposta.data.tags));

    http
      .get<IRestaurante[]>("restaurantes/")
      .then((resposta) => setRestaurantes(resposta.data));
  }, []);

  const aoSubmeterForm = (evento: React.FormEvent<HTMLFormElement>) => {
    evento.preventDefault();

    const formData = new FormData();

    formData.append("nome", nomePrato);
    formData.append("descricao", descricao);
    formData.append("tag", tag);
    formData.append("restaurante", restaurante);

    if (imagem) {
      formData.append("imagem", imagem);
    }

    http
      .request({
        url: "pratos/",
        method: "POST",
        headers: {
          "Content-Type": "multipart/form-data",
        },
        data: formData,
      })
      .then(() => alert("Prato cadastrado com sucesso!"))
      .catch((err) => alert(err));
  };

  const selectionarArquivo = (evento: React.ChangeEvent<HTMLInputElement>) => {
    if (evento.target.files?.length) {
      setImagem(evento.target.files[0]);
    } else {
      setImagem(undefined);
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
          Formulário de pratos
        </Typography>
        <TextField
          id="standard-basic"
          label="Nome do prato"
          variant="standard"
          onChange={(evento) => setNomePrato(evento.target.value)}
          fullWidth
          required
          margin="dense"
        />
        <TextField
          id="standard-basic"
          label="Descrição"
          variant="standard"
          onChange={(evento) => setDescricao(evento.target.value)}
          fullWidth
          required
        />

        <FormControl margin="dense" fullWidth>
          <InputLabel id="select-tag">Tag</InputLabel>
          <Select
            labelId="select-tag"
            value={tag}
            onChange={(evento) => setTag(evento.target.value)}
          >
            {tags.map((tag) => (
              <MenuItem key={tag.id} value={tag.value}>
                {tag.value}
              </MenuItem>
            ))}
          </Select>
        </FormControl>

        <FormControl margin="dense" fullWidth>
          <InputLabel id="select-restaurante">Restaurante</InputLabel>
          <Select
            labelId="select-restaurante"
            value={restaurante}
            onChange={(evento) => setRestaurante(evento.target.value)}
          >
            {restaurantes.map((restaurante) => (
              <MenuItem key={restaurante.id} value={restaurante.id}>
                {restaurante.nome}
              </MenuItem>
            ))}
          </Select>
        </FormControl>

        <input type="file" onChange={selectionarArquivo} />

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
