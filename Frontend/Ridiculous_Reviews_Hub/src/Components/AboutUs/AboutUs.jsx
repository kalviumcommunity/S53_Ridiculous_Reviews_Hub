import React from 'react'
import './AboutUs.css'
// 
function AboutUs() {
  return (
    <>
      <div className="about-us-container">
        <div className="about-us-content">
          <h1>About Us</h1>
          <section className="company-info">
            <h2>Our Company</h2>
            <p>Welcome to Ridiculous Review Hub! We are dedicated to providing you with the most ridiculous reviews on the internet.</p>
            <p>Our team scours the web to find the most absurd, hilarious, and sometimes insightful reviews from various platforms and brings them to you in one convenient location.</p>
          </section>
          <section className="mission-vision">
            <h2>Our Mission & Vision</h2>
            <p>Our mission is to spread joy and laughter by showcasing the most entertaining reviews from across the web.</p>
            <p>We envision a world where everyone can come together to enjoy the lighter side of consumer feedback.</p>
          </section>
          <section className="team">
            <h2>Our Team</h2>
            <p>Our team is composed of passionate individuals who love to discover and share amusing reviews.</p>
            <ul>
              <li>Nasir Qureshi - CEO</li>
              <li>Bari  Qureshi - Head of Content</li>
              <li>Basit  Qureshi - Lead Developer</li>
            </ul>
          </section>
        </div>
      </div>
    </>
  )
}

export default AboutUs