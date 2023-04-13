import React from 'react';

const ContactSection = () => {
  return (
    <section className="contact-section">
      <h2>Contact Us</h2>
      <p className="contact-description">If you have any questions or inquiries, please feel free to get in touch with us.</p>
      <form className="contact-form">
        <label htmlFor="name" className="contact-label">Name</label>
        <input type="text" id="name" name="name" className="contact-input" placeholder="Your name" required />
        <label htmlFor="email" className="contact-label">Email</label>
        <input type="email" id="email" name="email" className="contact-input" placeholder="Your email" required />
        <label htmlFor="message" className="contact-label">Message</label>
        <textarea id="message" name="message" className="contact-textarea" rows="5" placeholder="Your message" required></textarea>
        <button type="submit" className="contact-button">Send Message</button>
      </form>
      <div className="contact-details">
        <h3>Contact Information</h3>
        <ul className="contact-list">
          <li><strong>Email:</strong> example@example.com</li>
          <li><strong>Phone:</strong> +1 123-456-7890</li>
          <li><strong>Address:</strong> 1234 Main St, City, State ZIP Code</li>
        </ul>
      </div>
    </section>
  );
}

export default ContactSection;
