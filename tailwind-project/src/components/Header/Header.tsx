import { FC } from "react";
import ToggleTheme from "../ToggleTheme/ToggleTheme";

const Header: FC = () => {
  return (
    <div className="flex h-20 bg-alura-200 dark:bg-dark-200 justify-between items-center px-20 sm:rounded-xl sm:m-5">
      <span className="text-gray-100">Ola usuário</span>
      <h1 className="common-style">Meu projeto exemplo</h1>
      <ToggleTheme />
    </div>
  );
};

export default Header;
