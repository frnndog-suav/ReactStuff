import { render, screen } from "@testing-library/react";
import { RecoilRoot } from "recoil";
import { useListaDeParticipantes } from "../../../hooks/useListaDeParticipantes";
import { ListaDeParticipantes } from "../ListaDeParticipantes";

//Se usa um mock da hook useListaDeParticipantes() para não ter que usar a useListaDeParticipantes() de verdade
jest.mock("../../../hooks/useListaDeParticipantes", () => {
  return {
    useListaDeParticipantes: jest.fn(),
  };
});

describe("lista de participantes vazia", () => {
  beforeEach(() => {
    (useListaDeParticipantes as jest.Mock).mockReturnValue([]);
  });

  test("uma lista de participantes deve ser renderizada sem elementos", () => {
    render(
      <RecoilRoot>
        <ListaDeParticipantes />
      </RecoilRoot>
    );

    const items = screen.queryAllByRole("listItem");
    expect(items).toHaveLength(0);
  });
});

describe("lista de participantes preenchida", () => {
  const participantesMock = ["Goia", "Fernando"];
  beforeEach(() => {
    (useListaDeParticipantes as jest.Mock).mockReturnValue(participantesMock);
  });

  test("uma lista preenchida de participantes", () => {
    render(
      <RecoilRoot>
        <ListaDeParticipantes />
      </RecoilRoot>
    );

    const items = screen.queryAllByRole("listitem");
    expect(items).toHaveLength(participantesMock.length);
  });
});
