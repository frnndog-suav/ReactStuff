import { realizarSorteio } from "../realizarSorteio";

describe("dado um sorteio de amigo secreto", () => {
  test("cada participante não sorteio o próprio nome", () => {
    const participantes = [
      "Fernando",
      "Renan",
      "Lucas",
      "João",
      "Daniela",
      "Giovana",
      "Cauê",
    ];

    const sorteio = realizarSorteio(participantes);
    participantes.forEach((p) => {
      const amigoSecreto = sorteio.get(p);
      expect(amigoSecreto).not.toEqual(p);
    });
  });
});
