import React, { useState, useEffect } from "react";

function ContactForm() {
  // State for form fields, form message, and message class
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [formMessage, setFormMessage] = useState("");
  const [messageStatusClass, setMessageStatusClass] = useState(""); // New state for message class
  const [isSubmitting, setIsSubmitting] = useState(false); // New state for tracking submission status

  // Handle input changes
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Clear form fields immediately
    setForm({ name: "", email: "", subject: "", message: "" });

    // Prevent multiple submissions while the form is being processed
    if (isSubmitting) {
      return;
    }

    try {
      setIsSubmitting(true); // Set submission status to true

      // Make a fetch request to the server
      const response = await fetch(process.env.REACT_APP_MAIL_API, {
        method: "POST",
        mode: "cors",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: new URLSearchParams(form).toString(),
      });

      // Parse the response JSON
      const data = await response.json();

      // Update form message and message class based on the response
      setFormMessage(
        data.message ||
          "Oops! Something went wrong, and we couldn't send your message."
      );
      setMessageStatusClass(
        data.status === "error"
          ? "error"
          : data.status === "success"
          ? "success"
          : ""
      );
    } catch (error) {
      // Log and display an error message
      console.error("Error sending message", error);
      setFormMessage(
        "Oops! Something went wrong, and we couldn't send your message."
      );
      setMessageStatusClass("error");
    } finally {
      setIsSubmitting(false); // Reset submission status
    }
  };

  // Handle the automatic reset of messageClassName
  useEffect(() => {
    const resetMessageStatusClass = () => {
      setMessageStatusClass("");
    };

    // Set a timeout to reset the messageClassName after 10 seconds
    const timeoutId = setTimeout(resetMessageStatusClass, 10000);

    // Clear the timeout when the component is unmounted or when messageClassName changes
    return () => clearTimeout(timeoutId);
  }, [messageStatusClass]);

  return (
    <section className="contact">
      <span className="ancres" id="contact"></span>
      <h2 className="contact__title">CONTACT</h2>
      {/* Form and form message */}
      <div className="contact__container">
        <div className="contact__infos">
          <a className="contact__infos-item" href="tel:+33651638740">
            <i className="fa-solid fa-phone"></i>
            <div className="info-item__content">
              <h3>Call Me</h3>
              <p>+33 651 638 740</p>
            </div>
          </a>
          <div className="contact__infos-item">
            <i className="fa-solid fa-building"></i>
            <div className="info-item__content">
              <h3>Visit Me</h3>
              <p>
                33 av. de Calais
                <br />
                Grand-Fort-Philippe
              </p>
            </div>
          </div>
          <a
            className="contact__infos-item"
            href="mailto:contact@nvlb.fr?subject=Demande%20de%20contact%20depuis%20le%20portfolio&body=Bonjour%20,%0A%0AJe%20suis%20intéressé(e)%20par%20votre%20travail%20et%20j'aimerais%20discuter%20de%20la%20possibilité%20de%20collaborer.%20Voici%20quelques%20informations%20supplémentaires%20:%0A%0ANom%20:%20%0APrénom%20:%20%0AEntreprise%20(si%20applicable)%20:%20%0ATéléphone%20:%20%0A%0AMerci%20!"
          >
            <i className="fa-solid fa-envelope"></i>
            <div className="info-item__content">
              <h3>Email Me</h3>
              contact@nvlb.fr
            </div>
          </a>
        </div>
        <form
          className="contact__form"
          id="contact-form"
          onSubmit={handleSubmit}
        >
          <div className={`contact__form-message ${messageStatusClass}`}>
            <div className="contact__form-message-content">{formMessage}</div>
          </div>

          <div className="contact__form-fields">
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
            <button
              type="submit"
              className="button"
              data-text="Send Message"
              disabled={isSubmitting}
            >
              <span>{isSubmitting ? "Sending..." : "Send Message"}</span>
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}

export default ContactForm;
