import { FC } from "react";

interface BodyProps {
  children: React.ReactNode;
}

const Body: FC<BodyProps> = ({ children }) => {
  return (
    <div
      className="
    bg-[#EADEDA] 
    flex 
    flex-col 
    h-[90vh]"
    >
      {children}
    </div>
  );
};

export default Body;
