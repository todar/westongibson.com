import React from "react";
import Container from "../components/Container";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import "./Contact.css";

function Contact() {
  return (
    <div className="Contact" id="contact">
      <Container>
        <form
          className="Contact-form text-center border border-light p-5"
          name="contact"
          method="POST"
        >
          <input type="hidden" name="form-name" value="contact" />
          <p className="Contact-title">
            <FontAwesomeIcon icon={faEnvelope} /> Contact
          </p>

          <label className="Contact-label" htmlFor="Name">
            Name
            <input type="text" name="Name" className="form-control" required />
          </label>

          <label className="Contact-label" htmlFor="Email">
            Email
            <input
              type="email"
              name="Email"
              className="form-control"
              required
            />
          </label>

          <label className="Contact-label" htmlFor="Message">
            Message
            <textarea
              className="form-control"
              name="Message"
              rows="5"
              required
            />
          </label>

          <button type="submit" className="Contact-btn">
            Send
          </button>
        </form>
      </Container>
    </div>
  );
}

export default Contact;
