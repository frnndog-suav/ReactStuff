import React from "react";
import { Toaster } from "react-hot-toast";
import { Outlet } from "react-router-dom";
import Body from "./components/Body";
import Header from "./components/Header";

function App() {
  return (
    <React.Fragment>
      <Toaster
        position="bottom-center"
        toastOptions={{
          className: "sm:min-w-full md:min-w-[80%] xl:min-w-[450px]",
          duration: 6000,
        }}
      />
      <div
        className="
          h-full 
          w-full 
          flex 
          flex-col"
      >
        <Header />
        <Body>
          <Outlet />
        </Body>
      </div>
    </React.Fragment>
  );
}

export default App;
