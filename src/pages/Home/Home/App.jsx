import React from "react";
import { ThemeProvider } from "./ThemeContext";
import Home from "./Home";
import ThemeToggle from "./ThemeToggle ";

const App = () => {
  return (
    <ThemeProvider>
      <p className="text-right  relative -left-14 text-xl mb-2">
        <ThemeToggle />
      </p>
      <Home />
    </ThemeProvider>
  );
};

export default App;
