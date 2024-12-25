import React from "react";
import { Outlet } from "react-router-dom";
import FlickeringGrid from "./components/ui/flickering-grid";
// import { NavBar } from "./components";
const App = (): React.ReactNode => {
  return (
    <div className="w-full h-screen overflow-hidden relative">
      <FlickeringGrid
        className="z-0 absolute inset-0 w-full h-full"
        squareSize={4}
        gridGap={6}
        color="#6B7280"
        maxOpacity={0.5}
        flickerChance={0.1}

      />
      {/* <NavBar /> */}
      <Outlet />
    </div>
  );
};

export default App;
