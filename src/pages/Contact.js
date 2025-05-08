import React from 'react';
import './Contact.css';
import Footer from '../Footer';
const Contact = () => (
  <div className="contact">
    <h2>Contact Me</h2>
    <form>
      <input type="text" placeholder="Your Name" required />
      <input type="email" placeholder="Your Email" required />
      <textarea placeholder="Your Message" required />
      <button type="submit">Send</button>
    </form>
    <Footer />
  </div>
);

export default Contact;
