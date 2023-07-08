import { MoonIcon, SunIcon } from "@heroicons/react/24/solid";

const ToggleTheme = () => {
  const handleToggle = () => {
    document.documentElement.classList.toggle("dark");
  };

  return (
    <div className="hidden sm:block">
      <MoonIcon
        className="h-8 text-gray-100 cursor-pointer block dark:hidden"
        onClick={handleToggle}
      />
      <SunIcon
        className="h-8 text-gray-100 cursor-pointer hidden dark:block"
        onClick={handleToggle}
      />
    </div>
  );
};

export default ToggleTheme;
