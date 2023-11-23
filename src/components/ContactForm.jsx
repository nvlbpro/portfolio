import React, { useState } from 'react';

function ContactForm() {
  // State for form fields and form message
  const [form, setForm] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [formMessage, setFormMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false); // New state for tracking submission status

  // Handle input changes
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Clear form fields immediately
    setForm({ name: '', email: '', subject: '', message: '' });

    // Prevent multiple submissions while the form is being processed
    if (isSubmitting) {
      return;
    }

    try {
      setIsSubmitting(true); // Set submission status to true

      // Make a fetch request to the server
      const response = await fetch(process.env.REACT_APP_MAIL_API, {
        method: 'POST',
        mode: 'cors',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: new URLSearchParams(form).toString(),
      });

      // Parse the response JSON
      const data = await response.json();
      // console.log('PHP Response:', data);

      // Update form message based on the response
      setFormMessage(data.message || "Oops! Something went wrong, and we couldn't send your message.");
    } catch (error) {
      // Log and display an error message
      console.error('Error sending message', error);
      setFormMessage("Oops! Something went wrong, and we couldn't send your message.");
    } finally {
      setIsSubmitting(false); // Reset submission status
    }
  };

  return (
    <section id="contact">
      {/* Form and form message */}
      <form className="contact-form form" id="contact-form" onSubmit={handleSubmit}>
        <div className={`form-message ${formMessage === "Oops! Something went wrong, and we couldn't send your message." ? 'error' : 'success'}`}>
        <div className="form-message-content">{formMessage}</div>
        </div>
        {/* Form controls */}
        <div className="controls">
          {/* Individual form fields */}
          <input
            id="form_name"
            type="text"
            name="name"
            placeholder="Your Name"
            required
            onChange={handleChange}
            value={form.name}
          />
          <input
            id="form_email"
            type="email"
            name="email"
            placeholder="Your Email"
            required
            onChange={handleChange}
            value={form.email}
          />
          <input
            id="form_subject"
            type="text"
            name="subject"
            placeholder="Your Subject"
            required
            onChange={handleChange}
            value={form.subject}
          />
          <textarea
            id="form_message"
            name="message"
            placeholder="Your Message"
            rows="4"
            required
            onChange={handleChange}
            value={form.message}
          ></textarea>
          {/* Submit button */}
          <button type="submit" className="button" data-text="Send Message" disabled={isSubmitting}>
            <span>{isSubmitting ? "Sending..." : "Send Message"}</span>
          </button>
        </div>
      </form>
    </section>
  );
}

export default ContactForm;
