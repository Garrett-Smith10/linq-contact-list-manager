/* eslint-disable react/prop-types */
import { useState } from 'react';

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
    } catch (error) {
      console.error('Error creating contact:', error.message);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Name"
      />
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Email"
      />
      <button type="submit">Add Contact</button>
    </form>
  );
};