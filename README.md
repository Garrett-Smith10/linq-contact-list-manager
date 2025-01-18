# Contact List Manager
Overview
Contact List Manager is a simple web application that allows users to add, view, search, and delete contacts. This app is built with React for the frontend and JSON Server for the backend, providing a lightweight, mock API for data storage.

The app provides basic functionality for managing contacts, including:

Add Contact: Users can add a contact with name and email.
View Contacts: Users can view all contacts stored in the system.
Search Contacts: Users can search for contacts by name or email.
Delete Contacts: Users can delete contacts from the list (bonus feature).
Features
Add Contacts: Users can input their contact details (name and email) and add them to the contact list.
View Contacts: The contact list is dynamically updated as contacts are added or deleted.
Search Contacts: The app supports searching contacts by name or email.
Delete Contacts: Users can delete a contact from the list (bonus feature).
Responsive Design: The frontend is styled to be clean and user-friendly.
Tech Stack
Frontend: React
Backend: JSON Server (mock API with database.json)
Styling: Plain CSS (for simple, minimal styling)
Concurrency: concurrently package for running both frontend and backend servers simultaneously
Requirements
Node.js: Ensure you have Node.js installed to run the application.
npm: The Node package manager (comes with Node.js).
Installation
Follow these steps to set up the application on your local machine.

1. Clone the repository
Clone the repository to your local machine:

bash
Copy
Edit
git clone https://github.com/yourusername/contact-list-manager.git
cd contact-list-manager
2. Install Backend Dependencies
Navigate to the backend directory and install the necessary dependencies, including JSON Server:

bash
Copy
Edit
cd backend
npm install json-server@0
3. Install Frontend Dependencies
Return to the root directory and install the frontend dependencies:

bash
Copy
Edit
cd ..
npm install
4. Run the Application
To start both the frontend and backend servers concurrently, run the following command from the root directory:

bash
Copy
Edit
npm start
This will:

Start the frontend server on http://localhost:5173.
Start the backend server on http://localhost:8088.
Both servers will run simultaneously, allowing you to interact with the full-stack application.

Folder Structure
bash
Copy
Edit
/contact-list-manager
├── /backend          # Backend mock API with JSON Server
│   └── database.json # JSON Server data (mock data storage)
├── /frontend         # React frontend
│   ├── /components   # React components (e.g., ContactsView, ContactForm)
│   └── /services     # API service functions (e.g., addContact, getAllContacts)
└── package.json      # Project configuration and dependencies
How It Works
Frontend
The React frontend allows users to add, delete, and search contacts. It communicates with the backend using HTTP requests via the fetch API. When a user adds a new contact, the frontend sends a POST request to the backend. For searching and viewing contacts, it sends a GET request to the backend.

Backend
The backend is powered by JSON Server, which simulates a RESTful API. The contacts are stored in the database.json file, and CRUD operations are performed on this data. JSON Server provides a simple way to mock the backend without needing a database.

Contact API Endpoints
GET /contacts: Retrieves all contacts.
POST /contacts: Adds a new contact.
DELETE /contacts/{id}: Deletes a contact by ID.
Features and Trade-Offs
1. Search Functionality:
Implementation: The search functionality is implemented by filtering the contacts list in real-time based on the name or email. It uses the fetch API to retrieve all contacts from the backend and filters them on the client side.
Trade-off: Since the data is stored in database.json, fetching all contacts and filtering them on the frontend works well with a small dataset but may not be ideal for a large scale application. In a real-world scenario, pagination and server-side filtering would be necessary for optimal performance.
2. Data Persistence:
Implementation: The contact data is stored in a local database.json file served by JSON Server.
Trade-off: While JSON Server is convenient for mock data and rapid development, it is not meant for production-level storage. In a full-stack application, a proper database (e.g., MongoDB or PostgreSQL) would be used for data persistence.
3. Frontend Styling:
Implementation: Basic CSS is used to style the app.
Trade-off: The styling is minimal, focusing on functionality over design. In a production app, a more polished UI with frameworks like Bootstrap or Material UI could be used to enhance the user experience.
4. Deleting Contacts:
Bonus Feature: A "Delete" button is added next to each contact for deletion functionality.
Trade-off: While deletion works well for this small app, additional confirmations and error handling (e.g., handling failed deletions) could be added for better user experience in a larger app.
