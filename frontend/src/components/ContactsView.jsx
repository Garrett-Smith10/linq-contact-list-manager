import { useState, useEffect } from 'react';
import { getAllContacts, addContact, deleteContact } from '../services/contactServices'; // Importing API functions for CRUD operations
import { ContactForm } from './ContactForm'; // Importing the ContactForm component
import { Contacts } from './AllContacts'; // Importing the Contacts display component
import { FilterContacts } from './FilterContacts.jsx'; // Importing the FilterContacts component
import './ContactsView.css'; // Importing the associated CSS styles for the ContactsView

export const ContactsView = () => {
  // State for managing all contacts and filtered contacts
  const [contacts, setContacts] = useState([]);
  const [filteredContacts, setFilteredContacts] = useState([]);

  // useEffect hook to fetch the contacts when the component mounts
  useEffect(() => {
    const fetchContacts = async () => {
      const fetchedContacts = await getAllContacts(); // Fetching all contacts from API
      setContacts(fetchedContacts); // Updating state with fetched contacts
      setFilteredContacts(fetchedContacts); // Also updating filtered contacts to display all initially
    };
    fetchContacts();
  }, []); // Empty dependency array to run only once when the component mounts

  // Handler to add a new contact
  const handleAddContact = async (newContact) => {
    try {
      const savedContact = await addContact(newContact); // Adding the new contact to the API
      setContacts([...contacts, savedContact]); // Updating state with the new contact
      setFilteredContacts([...contacts, savedContact]); // Adding the new contact to the filtered list
    } catch (error) {
      console.error('Error creating contact:', error.message); // Handling any errors during the add operation
    }
  };

  // Handler for searching contacts
  const handleSearch = (term) => {
    const lowerCaseTerm = term.toLowerCase(); // Converting search term to lowercase for case-insensitive comparison
    const filtered = contacts.filter(contact => 
        contact.name.toLowerCase().includes(lowerCaseTerm) || // Filtering by name
        contact.email.toLowerCase().includes(lowerCaseTerm) // Filtering by email
    );
    setFilteredContacts(filtered); // Updating filtered contacts state based on search results
  }

  // Handler for deleting a contact
  const handleDeleteContact = async (id) => {
    try {
      await deleteContact(id); // Deleting the contact from the API
      const updatedContacts = contacts.filter(contact => contact.id !== id); // Removing the contact from the local state
      setContacts(updatedContacts); // Updating contacts state
      setFilteredContacts(updatedContacts); // Updating filtered contacts state
    } catch (error) {
      console.error('Error deleting contact:', error); // Handling any errors during delete operation
    }
  };

  return (
    <div className="contacts-view">
      <h1>Contact List Manager</h1>
      <FilterContacts onSearch={handleSearch} /> {/* Passing the search handler to FilterContacts component */}
      <ContactForm onAddContact={handleAddContact} /> {/* Passing the add contact handler to ContactForm component */}
      <h2>View Contacts</h2>
      <Contacts contacts={filteredContacts} onDelete={handleDeleteContact} /> {/* Displaying filtered contacts with delete option */}
    </div>
  );
};
