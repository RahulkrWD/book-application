import React, { useContext } from "react";
import Navbar from "./Navbar";
import { ThemeContext } from "../contextAPI/ThemeToggle";

function Layout({ children }) {
  const { theme } = useContext(ThemeContext);
  return (
    <>
      <Navbar />
      <main className={theme == "light-mode" ? "" : "dark-mode"}>
        {children}
      </main>
    </>
  );
}

export default Layout;
