import React from 'react';
import '../../../css/Layout/Contact/style.css';


const Contact = () => {
    return (
        <div className="contact-container">
            <h1 className="contact-title">Contact Us</h1>
            <p className="contact-description">
                If you have any questions, feel free to reach out to us by filling out the form below, or use the contact information provided.
            </p>

            <div className="contact-info">
                <h2>Contact Information</h2>
                <p>Email: info@example.com</p>
                <p>Phone: +1 234 567 890</p>
                <p>Address: 123 Main Street, Anytown, USA</p>
            </div>

            <form className="contact-form">
                <label htmlFor="name">Name:</label>
                <input type="text" id="name" name="name" required />

                <label htmlFor="email">Email:</label>
                <input type="email" id="email" name="email" required />

                <label htmlFor="message">Message:</label>
                <textarea id="message" name="message" rows="5" required></textarea>

                <button type="submit" className="contact-submit-button">Send Message</button>
            </form>
        </div>
    );
};

export default Contact;
