import React from "react";
//rafce for automatiic functional component
import Navbar from "../Components/Navbar";
import HeroImg from "../Components/HeroImg";
import Footer from "../Components/Footer";
import Background from "../Components/Background";
import ProjectWithOutFooter from "./ProjectWithOutFooter";
const Home = () => {
  return (
    <div>
      <Background />
      <Navbar />
      <HeroImg />
      <ProjectWithOutFooter />
      <Footer />
    </div>
  );
};

export default Home;
