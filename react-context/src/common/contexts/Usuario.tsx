import { createContext, useContext, useState } from "react";
import { UsuarioContextData } from "../../types/UsuarioTypes";

export const UsuarioContext = createContext({} as UsuarioContextData);
UsuarioContext.displayName = "Usuario";

export const UsuarioProvider = ({ children }: any) => {
  const [nome, setNome] = useState<string>("");
  const [saldo, setSaldo] = useState(0);

  return (
    <UsuarioContext.Provider
      value={{
        nome,
        setNome,
        saldo,
        setSaldo,
      }}
    >
      {children}
    </UsuarioContext.Provider>
  );
};

export const useUsuarioContext = () => {
  return useContext(UsuarioContext);
};
