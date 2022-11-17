import { act, fireEvent, render, screen } from "@testing-library/react";
import { RecoilRoot } from "recoil";
import { Formulario } from "../Formulario";

describe("comportamento do formulário", () => {
  test("quando input estiver está vazio, novos participantes não podem ser adicionados", () => {
    render(
      <RecoilRoot>
        <Formulario />
      </RecoilRoot>
    );

    const botao = screen.getByRole("button");
    const input = screen.getByPlaceholderText(
      "Insira os nomes dos participantes"
    );

    expect(input).toBeInTheDocument();
    expect(botao).toBeDisabled();
  });

  test("adicionar um participante caso exita um nome preenchido", () => {
    render(
      <RecoilRoot>
        <Formulario />
      </RecoilRoot>
    );

    const botao = screen.getByRole("button");
    const input = screen.getByPlaceholderText(
      "Insira os nomes dos participantes"
    );

    //inserir um valor no input
    fireEvent.change(input, {
      target: {
        value: "Goia",
      },
    });

    //clicar no botão de submit
    fireEvent.click(botao);

    //garantir que o input esteja com nenhum valor
    expect(input).toHaveValue("");
  });

  test("nomes duplicados não podem estar na lista", () => {
    render(
      <RecoilRoot>
        <Formulario />
      </RecoilRoot>
    );

    const botao = screen.getByRole("button");
    const input = screen.getByPlaceholderText(
      "Insira os nomes dos participantes"
    );

    //inserir um valor no input
    fireEvent.change(input, {
      target: {
        value: "Goia",
      },
    });

    fireEvent.click(botao);

    //inserir o mesmo valor no input
    fireEvent.change(input, {
      target: {
        value: "Goia",
      },
    });

    fireEvent.click(botao);

    const mensagemDeErro = screen.queryByText(
      "Nomes duplicados não são permitidos"
    );

    expect(mensagemDeErro).toBeInTheDocument();
  });

  test("a mensagem de erro deve sumir após x segundos", () => {
    jest.useFakeTimers();

    render(
      <RecoilRoot>
        <Formulario />
      </RecoilRoot>
    );

    const botao = screen.getByRole("button");
    const input = screen.getByPlaceholderText(
      "Insira os nomes dos participantes"
    );

    //inserir um valor no input
    fireEvent.change(input, {
      target: {
        value: "Goia",
      },
    });

    fireEvent.click(botao);

    //inserir o mesmo valor no input
    fireEvent.change(input, {
      target: {
        value: "Goia",
      },
    });

    fireEvent.click(botao);

    let mensagemDeErro = screen.queryByText(
      "Nomes duplicados não são permitidos"
    );
    expect(mensagemDeErro).toBeInTheDocument();

    //esperar x segundos
    act(() => {
      jest.runAllTimers();
    });

    mensagemDeErro = screen.queryByText("Nomes duplicados não são permitidos");
    expect(mensagemDeErro).toBeNull();
  });
});
