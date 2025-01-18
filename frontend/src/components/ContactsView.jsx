import { useState, useEffect } from 'react';
import { getAllContacts, createContact } from '../services/contactServices';
import { ContactForm } from './ContactForm';
import { Contacts } from './AllContacts'; // Assuming you have a Contacts component
import { FilterContacts } from './FilterContacts.jsx';

export const ContactsView = () => {
  const [contacts, setContacts] = useState([]);
  const [filteredContacts, setFilteredContacts] = useState([])

  useEffect(() => {
    const fetchContacts = async () => {
      const fetchedContacts = await getAllContacts();
      setContacts(fetchedContacts);
      setFilteredContacts(fetchedContacts);
    };
    fetchContacts();
  }, []); // Empty dependency array means this effect runs only once on mount

  const handleAddContact = async (newContact) => {
    try {
      const savedContact = await createContact(newContact);
      setContacts([...contacts, savedContact]);
      setFilteredContacts([...contacts, savedContact])
    } catch (error) {
      console.error('Error creating contact:', error.message);
    }
  };

  const handleSearch = (term) => {
    const lowerCaseTerm = term.toLowerCase();
    const filtered = contacts.filter(contact => 
        contact.name.toLowerCase().includes(lowerCaseTerm) ||
        contact.email.toLowerCase().includes(lowerCaseTerm)
    );
    setFilteredContacts(filtered)
  }

  return (
    <div>
      <h1>Contact List</h1>
      <FilterContacts onSearch={handleSearch}/>
      <ContactForm onAddContact={handleAddContact} />
      <Contacts contacts={filteredContacts} />
    </div>
  );
};