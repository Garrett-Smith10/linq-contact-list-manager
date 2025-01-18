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
        pattern="[A-Za-z]+"
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