import React, { useContext } from "react";
import Banner from "../Banner/Banner";
import PopularClass from "../PopularClass/PopularClass";
import PopularInstructors from "../PopularInstructors/PopularInstructors";
import { ThemeContext } from "./ThemeContext";

const Home = () => {
  const { theme } = useContext(ThemeContext);

  // Define styles based on the theme
  const containerStyle = {
    background: theme === "dark" ? "#222" : "#fff",
    color: theme === "dark" ? "#fff" : "#222",
  };

  return (
    <div style={containerStyle}>
      <Banner />
      <PopularClass />
      <PopularInstructors />
    </div>
  );
};

export default Home;
