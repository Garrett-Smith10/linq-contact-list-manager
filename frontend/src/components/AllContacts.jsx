/* eslint-disable react/prop-types */
import './AllContacts.css'; // Importing CSS styles for the AllContacts component

export const Contacts = ({ contacts, onDelete }) => {
  return (
    <div className="all-contacts">
      {contacts.map(contact => (
        <div key={contact.id} className="contact-item">
          {contact.name} - {contact.email} {/* Displaying contact details */}
          <button onClick={() => onDelete(contact.id)}>Delete</button> {/* Delete button with handler */}
        </div>
      ))}
    </div>
  );
};
