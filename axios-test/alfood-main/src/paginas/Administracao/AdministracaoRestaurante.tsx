import {
  Button,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { http } from "../../Http";
import IRestaurante from "../../interfaces/IRestaurante";

export const AdministracaoRestaurante = () => {
  const [restaurantes, setRestaurantes] = useState<IRestaurante[]>([]);

  const excluir = (restauranteASerExcluido: IRestaurante) => {
    http.delete(`restaurantes/${restauranteASerExcluido.id}/`).then(() => {
      const listaDeRestaurante = restaurantes.filter(
        (restaurante) => restaurante.id !== restauranteASerExcluido.id
      );

      setRestaurantes([...listaDeRestaurante]);
    });
  };

  useEffect(() => {
    http.get<IRestaurante[]>("restaurantes/").then((resposta) => {
      setRestaurantes(resposta.data);
    });
  }, []);

  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Restaurante</TableCell>
            <TableCell>Editar</TableCell>
            <TableCell>Excluir</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {restaurantes.map((res, index) => (
            <TableRow key={index}>
              <TableCell>{res.nome}</TableCell>
              <TableCell>
                [<Link to={`/admin/restaurantes/${res.id}`}>Editar</Link>]
              </TableCell>
              <TableCell>
                <Button
                  variant="outlined"
                  color="error"
                  onClick={() => excluir(res)}
                >
                  Excluir
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};
