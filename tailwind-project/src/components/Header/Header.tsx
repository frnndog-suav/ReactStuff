const Header = () => {
  return (
    <div className="flex h-20 bg-gray-500 justify-between items-center px-20 sm:rounded-xl sm:m-5">
      <span className="text-gray-100">Ola usuário</span>
      <h1 className="text-gray-100 text-xl">Meu projeto exemplo</h1>
      <input type="checkbox" className="hidden sm:block" />
    </div>
  );
};

export default Header;
