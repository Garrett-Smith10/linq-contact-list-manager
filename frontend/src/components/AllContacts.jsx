/* eslint-disable react/prop-types */
import './AllContacts.css';

export const Contacts = ({ contacts, onDelete }) => {
  return (
    <div className="all-contacts">
      {contacts.map(contact => (
        <div key={contact.id} className="contact-item">
          {contact.name} - {contact.email}
          <button onClick={() => onDelete(contact.id)}>Delete</button>
        </div>
      ))}
    </div>
  );
};
