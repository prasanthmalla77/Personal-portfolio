import React from "react";
//rafce for automatiic functional component
import Navbar from "../Components/Navbar";
import HeroImg from "../Components/HeroImg";
import Footer from "../Components/Footer";
import ProjectWithOutFooter from "./ProjectWithOutFooter";
const Home = () => {
  return (
    <div>
      <Navbar />
      <HeroImg />
      <ProjectWithOutFooter/>
      <Footer />
    </div>
  );
};

export default Home;
