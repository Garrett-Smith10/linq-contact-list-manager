// Function to fetch all contacts from the server
export const getAllContacts = () => {
    return fetch("http://localhost:8088/contacts")  // Send a GET request to retrieve all contacts
      .then((res) => res.json())  // Parse the JSON response and return the result
      .catch((error) => {
        console.error('Error fetching contacts:', error);  // Log any errors to the console
        throw error;  // Rethrow the error to be handled by the caller
      });
  };
  
  // Function to add a new contact to the server
  export const addContact = (newContact) => {
    return fetch("http://localhost:8088/contacts", {
      method: "POST",  // Set the HTTP method to POST to add a new contact
      headers: {
        "Content-Type": "application/json"  // Set content type to JSON for sending request body
      },
      body: JSON.stringify(newContact)  // Convert the new contact object to a JSON string for the request body
    })
      .then((res) => res.json())  // Parse and return the JSON response from the server
      .catch((error) => {
        console.error('Error adding contact:', error);  // Log any errors to the console
        throw error;  // Rethrow the error to be handled by the caller
      });
  };
  
  // Function to delete a contact from the server by ID
  export const deleteContact = (id) => {
    return fetch(`http://localhost:8088/contacts/${id}`, {
      method: "DELETE"  // Set the HTTP method to DELETE to remove the specified contact
    })
      .then((res) => res.json())  // Parse the JSON response and return the result
      .catch((error) => {
        console.error('Error deleting contact:', error);  // Log any errors to the console
        throw error;  // Rethrow the error to be handled by the caller
      });
  };
  