import { useState } from "react";
import { createContact } from "../services/contactServices.js";


export const ContactForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const newContact = {
      name: name,
      email: email,
    };
    
    createContact(newContact)
    .then(() => {
        setName('');
        setEmail('');
    })  
};

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={handleNameChange}
          required
        />
      </div>
      <div>
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={handleEmailChange}
          required
        />
      </div>
      <button type="submit">Submit</button>
    </form>
  );
};
