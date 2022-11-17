import { fireEvent, render, screen } from "@testing-library/react";
import { RecoilRoot } from "recoil";
import { useListaDeParticipantes } from "../../../hooks/useListaDeParticipantes";
import { Rodape } from "../Rodape";

jest.mock("../../../hooks/useListaDeParticipantes", () => {
  return {
    useListaDeParticipantes: jest.fn(),
  };
});

const mockDeNavegacao = jest.fn();
jest.mock("react-router-dom", () => {
  return {
    useNavigate: () => mockDeNavegacao,
  };
});

const mockDoSorteio = jest.fn();
jest.mock("../../../state/sorteador", () => {
  return {
    useSorteador: () => mockDoSorteio,
  };
});

describe("onde não existem participantes suficientes", () => {
  beforeEach(() => {
    (useListaDeParticipantes as jest.Mock).mockReturnValue([]);
  });

  test("jogo não pode iniciar", () => {
    render(
      <RecoilRoot>
        <Rodape />
      </RecoilRoot>
    );

    const botao = screen.getByRole("button");
    expect(botao).toBeDisabled();
  });
});

describe("quando existe participantes suficientes", () => {
  beforeEach(() => {
    (useListaDeParticipantes as jest.Mock).mockReturnValue([
      "Goia",
      "Fernando",
      "Alura",
    ]);
  });

  test("jogo pode iniciar", () => {
    render(
      <RecoilRoot>
        <Rodape />
      </RecoilRoot>
    );

    const botao = screen.getByRole("button");
    expect(botao).not.toBeDisabled();
  });

  test("redirecionando para inicio do jogo", () => {
    render(
      <RecoilRoot>
        <Rodape />
      </RecoilRoot>
    );

    const botao = screen.getByRole("button");
    fireEvent.click(botao);

    expect(mockDeNavegacao).toHaveBeenCalledTimes(1);
    expect(mockDeNavegacao).toHaveBeenCalledWith("/sorteio");
    expect(mockDoSorteio).toHaveBeenCalledTimes(1);
  });
});
