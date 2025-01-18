import { useState, useEffect } from 'react';
import { getAllContacts, addContact, deleteContact } from '../services/contactServices';
import { ContactForm } from './ContactForm';
import { Contacts } from './AllContacts'; 
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
  }, []); 

  const handleAddContact = async (newContact) => {
    try {
      const savedContact = await addContact(newContact);
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

  const handleDeleteContact = async (id) => {
    try {
      await deleteContact(id);
      const updatedContacts = contacts.filter(contact => contact.id !== id);
      setContacts(updatedContacts);
      setFilteredContacts(updatedContacts);
    } catch (error) {
      console.error('Error deleting contact:', error);
    }
  };

  return (
    <div>
      <h1>Contact List</h1>
      <FilterContacts onSearch={handleSearch}/>
      <ContactForm onAddContact={handleAddContact} />
      <h2>View Contacts</h2>
      <Contacts contacts={filteredContacts} onDelete={handleDeleteContact}/>
    </div>
  );
};