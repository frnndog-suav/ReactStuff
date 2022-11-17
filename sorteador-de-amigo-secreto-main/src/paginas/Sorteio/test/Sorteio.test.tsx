import { fireEvent, render, screen } from "@testing-library/react";
import { RecoilRoot } from "recoil";
import { useListaDeParticipantes } from "../../../hooks/useListaDeParticipantes";
import { useResultadoDoSorteio } from "../../../hooks/useResultadoDoSorteio";
import Sorteio from "../Sorteio";

jest.mock("../../../hooks/useListaDeParticipantes", () => {
  return {
    useListaDeParticipantes: jest.fn(),
  };
});

jest.mock("../../../hooks/useResultadoDoSorteio", () => {
  return {
    useResultadoDoSorteio: jest.fn(),
  };
});

describe("na página de sorteio", () => {
  const participantesMock = ["Fernando", "Goia", "Alura"];
  const resultado = new Map([
    ["Fernando", "Renan"],
    ["Renan", "Lucas"],
    ["Lucas", "Daniela"],
  ]);

  beforeEach(() => {
    (useListaDeParticipantes as jest.Mock).mockReturnValue(participantesMock);
    (useResultadoDoSorteio as jest.Mock).mockReturnValue(resultado);
  });

  test("todos os participantes podem exibir seu amigo secreto", () => {
    render(
      <RecoilRoot>
        <Sorteio />
      </RecoilRoot>
    );

    const opcoes = screen.queryAllByRole("option");
    expect(opcoes).toHaveLength(participantesMock.length + 1);
  });

  test("o amigo secreto é exibido quando solicitado", () => {
    render(
      <RecoilRoot>
        <Sorteio />
      </RecoilRoot>
    );

    const select = screen.getByPlaceholderText("Selecione o seu nome");
    fireEvent.change(select, {
      target: {
        value: participantesMock[0],
      },
    });

    const botao = screen.getByRole("button");
    fireEvent.click(botao);

    const amigoSecreto = screen.getByRole("alert");
    expect(amigoSecreto).toBeInTheDocument();
  });
});
