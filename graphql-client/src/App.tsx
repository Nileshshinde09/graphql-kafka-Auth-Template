import React from "react";
import { Outlet } from "react-router-dom";
import FlickeringGrid from "./components/ui/flickering-grid";
import { Menue, Navbar } from "./components";
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
      <main className="absolute z-10 w-full h-screen p-4  ">
        <Navbar />
        <Outlet />
      </main>
      {/* <Menue className="absolute z-20 m-4 bottom-0 w-fit left-1/2 translate-x-[-50%]" /> */}
    </div>
  );
};

export default App;
// #6B7280  -> old colour
// #7e76ed -> new colour