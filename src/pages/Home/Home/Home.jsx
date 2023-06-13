import React, { useContext } from "react";
import Banner from "../Banner/Banner";
import PopularClass from "../PopularClass/PopularClass";
import PopularInstructors from "../PopularInstructors/PopularInstructors";
import { ThemeContext } from "./ThemeContext";
import Training from "../Training/Training";

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
      <Training></Training>
      <PopularInstructors />
    </div>
  );
};

export default Home;
