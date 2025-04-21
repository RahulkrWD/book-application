import React, { createContext, useEffect, useState } from "react";

export const ThemeContext = createContext();
function ThemeToggle({ children }) {
  const saveTheme = JSON.parse(localStorage.getItem("theme")) || "light-mode";
  const [theme, setTheme] = useState(saveTheme);

  function toggleTheme() {
    setTheme((prev) => (prev == "light-mode" ? "dark-mode" : "light-mode"));
  }
  useEffect(() => {
    localStorage.setItem("theme", JSON.stringify(theme));
  }, [theme]);
  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export default ThemeToggle;
