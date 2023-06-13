import React, { useContext } from "react";
import { ThemeContext } from "./ThemeContext";
import { MdDarkMode, MdLightMode } from "react-icons/md";

const ThemeToggle = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <button onClick={toggleTheme}>
      {theme === "light" ? <MdDarkMode /> : <MdLightMode />}
    </button>
  );
};

export default ThemeToggle;
