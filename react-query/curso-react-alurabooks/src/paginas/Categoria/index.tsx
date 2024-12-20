import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import { ListaLivros } from "../../componentes/ListaLivros";
import { Loader } from "../../componentes/Loader";
import { TituloPrincipal } from "../../componentes/TituloPrincipal";
import { obterCategoriaPorSlug } from "../../services/api";

export const Categoria = () => {
  const params = useParams();

  const { data: categoria, isLoading } = useQuery(
    ["categoriaPorSlug", params.slug],
    () => obterCategoriaPorSlug(params.slug || "")
  );

  if (isLoading) {
    return <Loader />;
  }

  return (
    <section>
      <TituloPrincipal title={categoria?.nome ?? ""} />
      <ListaLivros categoria={categoria!} />
    </section>
  );
};
