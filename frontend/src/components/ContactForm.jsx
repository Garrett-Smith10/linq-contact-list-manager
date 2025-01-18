/* eslint-disable react/prop-types */
import { useState } from 'react';
import './ContactForm.css';

export const ContactForm = ({ onAddContact }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const newContact = { name, email };
      await onAddContact(newContact);
      setName('');
      setEmail('');

      alert('Contact added successfully!')
    } catch (error) {
      console.error('Error creating contact:', error.message);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="contact-form">
      <input
        type="text"
        value={name}
        onChange={(event) => setName(event.target.value)}
        placeholder="Name"
        required
      />
      <input
        type="email"
        value={email}
        onChange={(event) => setEmail(event.target.value)}
        placeholder="Email"
        required
      />
      <button type="submit">Add Contact</button>
    </form>
  );
};
