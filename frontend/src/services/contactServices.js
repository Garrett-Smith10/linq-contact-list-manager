export const getAllContacts = () => {
    return fetch("http://localhost:8088/contacts")
      .then((res) => res.json());
  };
  
  export const addContact = (newContact) => {
    return fetch("http://localhost:8088/contacts", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(newContact)
    })
    .then((res) => res.json())
  };

  export const deleteContact = (id) => {
    return fetch(`http://localhost:8088/contacts/${id}`, {
      method: "DELETE"
    })
    .then((res) => res.json())
    .catch((error) => {
      console.error('Error deleting contact:', error);
      throw error;
    });
  };