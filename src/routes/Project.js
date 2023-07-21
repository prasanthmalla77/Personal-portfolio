import React from "react";
import "./Project.css";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import ReactionTesterImage from "../assets/ReactionTester.png"; // Import the PNG image

const Projects = () => {
  // Sample project data, replace this with your own project details
  const projects = [
    {
      title: "Project 1",
      description:
        "The Reaction Tester is an interactive web application designed to test users' reaction speed. When the user clicks on a circle displayed on the screen, the application instantly provides an alert with the time taken to click. It offers an engaging and fun way for users to challenge themselves, measure their reaction time, and strive for improved performance.",
      imageUrl: ReactionTesterImage, // Use the imported image here
      projectUrl:
        "https://github.com/prasanthmalla77/ReactionTesterUsingJavascript",
      Live: "https://brilliant-bublanina-e5b4d6.netlify.app/",
    },
    {
      title: "Project 1",
      description: "This is the description for Project 1.",
      imageUrl: ReactionTesterImage, // Use the imported image here
      projectUrl:
        "https://github.com/prasanthmalla77/ReactionTesterUsingJavascript",
      Live: "https://brilliant-bublanina-e5b4d6.netlify.app/",
    },
    {
      title: "Project 1",
      description: "This is the description for Project 1.",
      imageUrl: ReactionTesterImage, // Use the imported image here
      projectUrl:
        "https://github.com/prasanthmalla77/ReactionTesterUsingJavascript",
      Live: "https://brilliant-bublanina-e5b4d6.netlify.app/",
    },
    {
      title: "Project 1",
      description: "This is the description for Project 1.",
      imageUrl: ReactionTesterImage, // Use the imported image here
      projectUrl:
        "https://github.com/prasanthmalla77/ReactionTesterUsingJavascript",
      Live: "https://brilliant-bublanina-e5b4d6.netlify.app/",
    },
    {
      title: "Project 1",
      description: "This is the description for Project 1.",
      imageUrl: ReactionTesterImage, // Use the imported image here
      projectUrl:
        "https://github.com/prasanthmalla77/ReactionTesterUsingJavascript",
      Live: "https://brilliant-bublanina-e5b4d6.netlify.app/",
    },
    {
      title: "Project 1",
      description: "This is the description for Project 1.",
      imageUrl: ReactionTesterImage, // Use the imported image here
      projectUrl:
        "https://github.com/prasanthmalla77/ReactionTesterUsingJavascript",
      Live: "https://brilliant-bublanina-e5b4d6.netlify.app/",
    },
    // Add more projects as needed
  ];

  return (
    <div>
      <Navbar />
      <div className="projects">
        <h2 className="section-title">Projects</h2>
        <div className="projects-container">
          {projects.map((project, index) => (
            <div className="project" key={index}>
              <img src={project.imageUrl} alt={project.title} />
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <a
                href={project.projectUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                View Project
              </a>
              <a href={project.Live} target="_blank" rel="noopener noreferrer">
                Live Project
              </a>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Projects;
