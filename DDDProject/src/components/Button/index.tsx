import { FC } from "react";

interface ButtonProps extends React.HTMLProps<HTMLButtonElement> {
  layoutType: "blue" | "green" | "red";
}

const Button: FC<ButtonProps> = ({ layoutType, children, ...rest }) => {
  let mainColor;
  let hoverColor;
  let activeColor;

  switch (layoutType) {
    case "blue":
      mainColor = "#336699";
      hoverColor = "#29527A";
      activeColor = "#1F3D5C";
      break;
    case "green":
      mainColor = "#00916E";
      hoverColor = "#00664E";
      activeColor = "#003D2F";
      break;
    case "red":
      mainColor = "#C1292E";
      hoverColor = "#A82428";
      activeColor = "#972024";
      break;
    default:
      mainColor = "#336699";
      hoverColor = "#29527A";
      activeColor = "#1F3D5C";
      break;
  }

  return (
    <button
      {...rest}
      type="button"
      className={`
      border-2 
      rounded-md 
      px-3 
      w-full
      text-xl
      h-12
      border-[${mainColor}]
      bg-[${mainColor}]            
      hover:bg-[${hoverColor}]
      active:bg-[${activeColor}]            
      text-white
      disabled:bg-slate-300
      disabled:text-slate-400          
      disabled:border-slate-300    
      `}
    >
      {children}
    </button>
  );
};

export default Button;
