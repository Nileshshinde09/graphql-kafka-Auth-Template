import React from "react";
import { Outlet } from "react-router-dom";
import { Navbar } from "./components";
const App = (): React.ReactNode => {
  return (
      <main className="w-full h-screen">
        <Navbar />
        <Outlet />
      </main>
  );
};

export default App;