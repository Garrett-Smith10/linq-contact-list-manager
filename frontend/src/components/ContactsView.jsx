import { useState, useEffect } from 'react';
import { getAllContacts, createContact } from '../services/contactServices';
import { ContactForm } from './ContactForm';
import { Contacts } from './AllContacts'; // Assuming you have a Contacts component

export const ContactsView = () => {
  const [contacts, setContacts] = useState([]);

  useEffect(() => {
    const fetchContacts = async () => {
      const fetchedContacts = await getAllContacts();
      setContacts(fetchedContacts);
    };
    fetchContacts();
  }, []); // Empty dependency array means this effect runs only once on mount

  const handleAddContact = async (newContact) => {
    try {
      const savedContact = await createContact(newContact);
      setContacts([...contacts, savedContact]);
    } catch (error) {
      console.error('Error creating contact:', error.message);
    }
  };

  return (
    <div>
      <h1>Contact List</h1>
      <ContactForm onAddContact={handleAddContact} />
      <Contacts contacts={contacts} />
    </div>
  );
};