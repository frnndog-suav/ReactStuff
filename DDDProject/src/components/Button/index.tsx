import { FC } from "react";

interface ButtonProps extends React.HTMLProps<HTMLButtonElement> {
  layoutType: "blue" | "green" | "red";
}

const Button: FC<ButtonProps> = ({ layoutType, children, ...rest }) => {
  if (layoutType === "blue") {
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
        border-[#336699]
        bg-[#336699]            
        hover:bg-[#29527A]
        active:bg-[#1F3D5C]            
        text-white
        disabled:bg-slate-300
        disabled:text-slate-400          
        disabled:border-slate-300    
        `}
      >
        {children}
      </button>
    );
  }

  if (layoutType === "green") {
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
        border-[#00916E]
        bg-[#00916E]            
        hover:bg-[#00664E]
        active:bg-[#003D2F]            
        text-white
        disabled:bg-slate-300
        disabled:text-slate-400          
        disabled:border-slate-300    
        `}
      >
        {children}
      </button>
    );
  }

  if (layoutType === "red") {
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
        border-[#C1292E]
        bg-[#C1292E]            
        hover:bg-["#A82428]
        active:bg-[#972024]            
        text-white
        disabled:bg-slate-300
        disabled:text-slate-400          
        disabled:border-slate-300    
        `}
      >
        {children}
      </button>
    );
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
      border-[#336699]
      bg-[#336699]            
      hover:bg-[#29527A]
      active:bg-[#1F3D5C]            
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
