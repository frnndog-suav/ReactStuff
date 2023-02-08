import { AbBotao } from "ds-alurabooks";
import { useEffect, useState } from "react";
import { IPedido } from "../../../interfaces/IPedido";
import { http } from "../../../service/api";
import "./Pedidos.css";

export const Pedidos = () => {
  const [pedidos, setPedidos] = useState<IPedido[]>([]);

  useEffect(() => {
    http
      .get<IPedido[]>("pedidos")
      .then((res) => {
        setPedidos(res.data);
      })
      .catch((err) => {
        alert("Deu ruim. " + err);
      });
  }, []);

  return (
    <section className="pedidos">
      <h1>Pedidos</h1>
      {pedidos.map((pedido) => (
        <div className="pedido" key={pedido.id}>
          <ul>
            <li>
              Pedido: <strong>{pedido.id}</strong>
            </li>
            <li>
              Data do pedido:
              <strong>{new Date(pedido.data).toLocaleDateString()}</strong>
            </li>
            <li>
              Valor total: 
              <strong>
                {Intl.NumberFormat("pt-br", {
                  style: "currency",
                  currency: "BRL",
                }).format(pedido.total)}
              </strong>
            </li>
            <li>
              Data da entrega:
              <strong>{new Date(pedido.entrega).toLocaleDateString()}</strong>
            </li>
          </ul>
          <AbBotao texto="Detalhes" />
        </div>
      ))}
    </section>
  );
};
