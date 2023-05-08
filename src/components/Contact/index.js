import React from "react";
import { NavLink } from "react-router-dom";

const Contact = () => {
  return (
    <div
      style={{
        fontFamily: "cursive",
        color: "#802b00",
        fontSize: "16px",
        textAlign: "center"
      }}
    >
      <h2>Contact Us</h2>
      <p>Need to get in touch with us? We'd love to hear from you!</p>
      <p>Here's how you can reach us:</p>
      <ul>
        <li>Phone: 555-555-5555</li>
        <li>Email: info@mybakery.com</li>
        <li>Address: 123 Main St, Anytown USA</li>
      </ul>
      <p>
        Alternatively, you can use the contact form below to send us a message:
      </p>
      <form>
        <label htmlFor="name" style={{ marginRight: "10px" }}>
          Name:
        </label>
        <input
          style={{ marginRight: "20px" }}
          type="text"
          id="name"
          name="name"
          required
        />

        <label htmlFor="email" style={{ marginRight: "10px" }}>
          Email:
        </label>
        <input
          style={{ marginRight: "20px" }}
          type="email"
          id="email"
          name="email"
          required
        />

        <label htmlFor="message" style={{ marginRight: "10px" }}>
          Message:
        </label>
        <textarea
          style={{ marginRight: "20px" }}
          id="message"
          name="message"
          rows="5"
          required
        ></textarea>

        <button
          type="submit"
          style={{
            backgroundColor: "wheat",
            color: "#802b00",
            cursor: "pointer",
            borderRadius: "5px",
            border: "1px solid #802b00"
          }}
        >
          Send
        </button>
      </form>
      <p>
        Want to make your heightat home? Here's one of our favorite recipes:
      </p>
      <ul>
        <li>
          <NavLink to="/products/15">Sugarplum fairy cakes</NavLink>
        </li>
      </ul>
    </div>
  );
};

export default Contact;
