import React from 'react';
import '../../../css/Layout/About/style.css';

const About = () => {
    return (
        <div className="about-container">
            <h1 className="about-title">About Us</h1>
            <p className="about-description">
                Welcome to our company! We are committed to delivering the best services and solutions to our clients. Our team consists of dedicated professionals who are passionate about what they do. Below, you can learn more about our mission, vision, and the team that makes it all happen.
            </p>

            <div className="about-section">
                <h2>Our Mission</h2>
                <p>
                    Our mission is to provide high-quality products that combine performance with value pricing while establishing a successful relationship with our customers and our suppliers.
                </p>
            </div>

            <div className="about-section">
                <h2>Our Vision</h2>
                <p>
                    To be a company that continuously improves the quality of its services and products, achieving a balance between profitability and growth.
                </p>
            </div>

            <div className="about-team">
                <h2>Meet Our Team</h2>
                <div className="team-member">
                    <h3>John Doe</h3>
                    <p>CEO</p>
                    <p>John is the visionary behind our company. With over 20 years of experience in the industry, he leads our team with a focus on innovation and excellence.</p>
                </div>
                <div className="team-member">
                    <h3>Jane Smith</h3>
                    <p>CTO</p>
                    <p>Jane oversees all technical aspects of our company, ensuring that our solutions are cutting-edge and meet the highest standards.</p>
                </div>
                <div className="team-member">
                    <h3>Emily Johnson</h3>
                    <p>COO</p>
                    <p>Emily is responsible for the day-to-day operations, making sure everything runs smoothly and efficiently.</p>
                </div>
            </div>
        </div>
    );
};

export default About;
