export interface UsuarioContextData {
  nome: string;
  setNome: React.Dispatch<React.SetStateAction<string>>;
  saldo: number;
  setSaldo: React.Dispatch<React.SetStateAction<number>>;
}
