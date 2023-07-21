import React from "react";
import "./About.css";
import mine from "../assets/mine.jpg";
import Navbar from "../Components/Navbar"; // Import the CSS file for styling
import Background from "../Components/Background";

const About = () => {
  return (
    <div>
      <Navbar />
      <Background />

      <div className="contact-page">
        <div className="contact-container">
          <div className="left">
            <img
              src={mine} // Replace with your photo URL
              alt="Your Name"
              className="profile-photo"
            />
            <h2>Naga Venkata Prasanth Naidu Malla</h2>
            <h3>Objective</h3>
            <p>
              To utilize my technical skills and provide a professional service
              to customers by applying and honing my knowledge and working in a
              challenging and motivating working environment.
            </p>

            <h3>Education</h3>
            <p>
              <b style={{ color: "#1A2421" }}>
                JAWAHARLAL NEHRU TECHNOLOGICAL UNIVERSITY GURAJADA VIZIANAGARAM
              </b>
              <br />
              B.Tech
              <br />
              7.79 (till sem 5)
              <br />
              <br />
              <b style={{ color: "#1A2421" }}>
                SRI CHAITANYA JUNIOR COLLEGE, PALASA
              </b>
              <br />
              INTERMEDIATE
              <br />
              9.67
              <br />
              <br />
              <b style={{ color: "#1A2421" }}>
                RAVINDRA BHARATHI OLYMPIAD SCHOOL, TEKKALI
              </b>
              <br />
              10th CLASS
              <br />
              9.5
            </p>

            <h3>Skills</h3>
            <p>
              HTML, CSS, JavaScript
              <br />
              Python
              <br />
              React JS, React Storybook, React Flow
              <br />
              MS Excel, MS Word
              <br />
              Git, GitHub
              <br />
              Netlify
              <br />
              Framer
              <br />
              MySQL
              <br />
              Canva
            </p>
          </div>

          <div className="right">
            <h3>Experience</h3>
            <p>
              Drishya AI Labs
              <br />
              Software Developer Intern
              <br />
              23/11/2020 - 16/12/2020
              <br />
              07/04/2021 - 30/10/2021
              <br />
              - As a software developer intern, I had the opportunity to work
              with a variety of technologies, including NPM, React, ReactFlow,
              React Storybook, and Git. During my time as an intern, I
              contributed to the development of several projects, including:
              <br />
              - Developing and maintaining React components for a web
              application using React and React Storybook, which allowed for
              easy component testing and reusability.
              <br />
              - Implementing ReactFlow, a library for building interactive
              node-based graphs, to visualize data in a more intuitive way for a
              data-heavy project.
              <br />- Collaborating with a team of developers using Git for
              version control and managing project codebase.
            </p>

            <p>
              Octazen
              <br />
              Machine Learning using Python Internship
              <br />
              01/02/2022 - 30/03/2022
              <br />- During this internship, I got familiar with concepts of
              machine learning and got hands-on experience by working on a
              salary prediction project using linear regression model.
            </p>

            <h3>Contact</h3>
            <p>Email: prasanthmalla77@gmail.com</p>
            <p>Phone: 9491920031</p>
            <p>
              Address:
              <br />
              1-147, Venkateswara colony,
              <br />
              Tekkali, Srikakulam, A.P, 532201
            </p>

            <h3>Projects</h3>
            <p>
              Twitter Clone using HTML5 and CSS3
              <br />
              - I have created a Twitter clone static website. I have deployed
              my project using GitHub and Netlify.
              <br />
              <a
                href="https://lively-bombolone-66e19c.netlify.app/"
                target="_blank"
                rel="noopener noreferrer"
              >
                View Project
              </a>
            </p>
            <p>
              Salary Prediction using Linear Regression
              <br />- This project helped me work with datasets. I have
              downloaded a dataset from Kaggle and developed a machine learning
              salary prediction model using linear regression to predict the
              salary of a person using their years of experience as input.
            </p>
            <p>
              Auto Quote Generator using HTML5, CSS3, and JavaScript
              <br />
              - I have created a responsive Auto Quote Generator website. I have
              deployed my project using GitHub and Netlify.
              <br />
              <a
                href="https://aquamarine-kheer-17ecdd.netlify.app/"
                target="_blank"
                rel="noopener noreferrer"
              >
                View Project
              </a>
            </p>

            <h3>Certification</h3>
            <p>Introduction to Cybersecurity - Cisco Networking Academy</p>
            <p>
              Frontend Web Development Bootcamp: Build a Twitter Clone - Infosys
              Springboard
            </p>
            <p>
              PCAP: PROGRAMMING ESSENTIALS IN PYTHON - OpenEDG Python Institute
            </p>

            <h3>Achievements</h3>
            <p>5-star Python rating in Hackerrank</p>
            <p>2-star problem-solving rating in Hackerrank</p>

            <h3>Social</h3>
            <p>
              LinkedIn:{" "}
              <a
                href="https://www.linkedin.com/in/naga-venkata-prasanth-naidu-malla-86ba3223b"
                target="_blank"
                rel="noopener noreferrer"
              >
                https://www.linkedin.com/in/naga-venkata-prasanth-naidu-malla-86ba3223b
              </a>
            </p>
            <p>
              GitHub:{" "}
              <a
                href="https://github.com/prasanthmalla77"
                target="_blank"
                rel="noopener noreferrer"
              >
                https://github.com/prasanthmalla77
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
