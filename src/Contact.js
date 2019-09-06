import React from "react";
import Container from "./Container";
import "./Contact.css";

function Contact() {
  return (
    <div className="Contact">
      <Container>
        <form
          className="Contact-form text-center border border-light p-5"
          name="contact"
          method="POST"
        >
          <input type="hidden" name="form-name" value="contact" />
          <p className="Contact-title">Contact</p>

          <input
            type="text"
            name="Name"
            className="form-control"
            placeholder="Name"
            required
          />

          <input
            type="email"
            name="Email"
            className="form-control"
            placeholder="Your Email"
            required
          />

          <textarea
            className="form-control"
            name="Message"
            rows="5"
            placeholder="Message"
            required
          />

          <button type="submit" className="Contact-btn">
            Send
          </button>
        </form>
      </Container>
    </div>
  );
}

export default Contact;
