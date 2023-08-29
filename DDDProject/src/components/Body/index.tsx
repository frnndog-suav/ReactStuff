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
      <div
        className="
        p-5 
        max-h-screen 
        overflow-y-auto"
      >
        {children}
      </div>
    </div>
  );
};

export default Body;
