import React, { useContext } from "react";
import { ThemeContext } from "../contextAPI/ThemeToggle";

function ToggleButton() {
  const { theme, toggleTheme } = useContext(ThemeContext);
  return (
    <>
      <button className="btn text-bg-primary" onClick={toggleTheme}>
        {theme}
      </button>
    </>
  );
}

export default ToggleButton;
