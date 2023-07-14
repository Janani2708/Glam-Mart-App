import React from 'react';
import './contact.css';


function ContactPage() {
  return (
    <div>
      <h1>Contact Us</h1>
      <div className="contact-form">
        <input type="text" placeholder="Your Name" />
        <input type="email" placeholder="Your Email" />
        <textarea placeholder="Your Message"></textarea>
        <button>Send Message</button>
      </div>
    </div>
  );
}

export default ContactPage;
