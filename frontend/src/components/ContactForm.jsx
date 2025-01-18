/* eslint-disable react/prop-types */
import { useState } from 'react';
import './ContactForm.css'; // Importing CSS styles for the ContactForm component

export const ContactForm = ({ onAddContact }) => {
  const [name, setName] = useState(''); // State for managing the contact name
  const [email, setEmail] = useState(''); // State for managing the contact email

  // Handler for form submission
  const handleSubmit = async (event) => {
    event.preventDefault(); // Preventing default form submission behavior

    try {
      const newContact = { name, email }; // Creating a new contact object
      await onAddContact(newContact); // Calling onAddContact function passed from parent to add the new contact
      setName(''); // Resetting name field
      setEmail(''); // Resetting email field

      alert('Contact added successfully!'); // Alerting the user about successful addition
    } catch (error) {
      console.error('Error creating contact:', error.message); // Handling errors during contact creation
    }
  };

  return (
    <form onSubmit={handleSubmit} className="contact-form">
      <input
        type="text"
        value={name}
        onChange={(event) => setName(event.target.value)} // Updating name state on input change
        placeholder="Name"
        required // Making this field required
      />
      <input
        type="email"
        value={email}
        onChange={(event) => setEmail(event.target.value)} // Updating email state on input change
        placeholder="Email"
        required // Making this field required
      />
      <button type="submit">Add Contact</button> {/* Submit button for the form */}
    </form>
  );
};
