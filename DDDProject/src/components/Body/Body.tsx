import { FC } from "react";

interface BodyProps {
  children: React.ReactNode;
}

const Body: FC<BodyProps> = ({ children }) => {
  return (
    <div
      className="
    bg-[#E0E2DB] 
    flex 
    flex-col 
    h-[90vh]"
    >
      <div
        className="
        max-h-screen 
        overflow-y-auto"
      >
        {children}
      </div>
    </div>
  );
};

export default Body;
