export const Contacts = ({ contacts }) => {
  return (
    <div>
      {contacts.map(contact => (
        <div key={contact.id}>{contact.name} - {contact.email}</div>
      ))}
    </div>
  );
};