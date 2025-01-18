/* eslint-disable react/prop-types */
export const Contacts = ({ contacts, onDelete }) => {
  return (
    <div>
      {contacts.map(contact => (
        <div key={contact.id}>{contact.name} - {contact.email}
        <button onClick={() => onDelete(contact.id)}> Delete</button></div>
      ))}
    </div>
  );
};