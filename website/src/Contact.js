import React from 'react';
import './contact.css';

const Contact = () => {
    return (
        <section id="contact" className="contact-section">
            <h2>Contact Me</h2>
            <form className="contact-form">
                <label>Name:</label>
                <input type="text" />
                <label>Email:</label>
                <input type="email" />
                <label>Message:</label>
                <textarea></textarea>
                <button type="submit">Submit</button>
            </form>
        </section>
    );
}

export default Contact;
