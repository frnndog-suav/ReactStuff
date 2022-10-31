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
import IPrato from "../../interfaces/IPrato";
import IRestaurante from "../../interfaces/IRestaurante";

export const AdministracaoPratos = () => {
  const [pratos, setPratos] = useState<IPrato[]>([]);

  const excluir = (pratoASerExcluido: IPrato) => {
    http.delete(`pratos/${pratoASerExcluido.id}/`).then(() => {
      const listaDePratos = pratos.filter(
        (prato) => prato.id !== pratoASerExcluido.id
      );

      setPratos([...listaDePratos]);
    });
  };

  useEffect(() => {
    http.get<IPrato[]>("pratos/").then((resposta) => {
      setPratos(resposta.data);
    });
  }, []);

  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Nome</TableCell>
            <TableCell>Descrição</TableCell>
            <TableCell>Tag</TableCell>
            <TableCell>Editar</TableCell>
            <TableCell>Excluir</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {pratos.map((prato, index) => (
            <TableRow key={index}>
              <TableCell>{prato.nome}</TableCell>
              <TableCell>{prato.descricao}</TableCell>
              <TableCell>{prato.tag}</TableCell>
              <TableCell>
                [<Link to={`/admin/pratos/${prato.id}`}>Editar</Link>]
              </TableCell>
              <TableCell>
                <Button
                  variant="outlined"
                  color="error"
                  onClick={() => excluir(prato)}
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
