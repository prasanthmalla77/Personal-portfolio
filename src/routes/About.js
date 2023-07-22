import React, { useState } from 'react';
import './About.css';
import Background from '../Components/Background';
import Navbar from '../Components/Navbar';

const About = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted!'); // Add this line to check if handleSubmit is triggered
    // Rest of the code...
  
  
    // Replace 'YOUR_FORMSPREE_ENDPOINT' with the Formspree endpoint
    const formEndpoint = 'https://formspree.io/f/mnqkngnd';

    // Make a POST request to Formspree to send the form data to your email
    fetch(formEndpoint, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    })
      .then((response) => {
        console.log('Form data sent successfully:', response);
        // You can show a success message or redirect the user to a thank you page here
      })
      .catch((error) => {
        console.error('Error sending form data:', error);
        // Handle errors, show error message, etc.
      });
  };

  return (
    <div>
    <Navbar/>
    <Background/>
    <div className='container'>
    <form onSubmit={handleSubmit}>
      <div>
      
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label htmlFor="message">Message:</label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          required
        />
      </div>
      <button type="submit">Submit</button>
    </form></div></div>
  );
};

export default About;
