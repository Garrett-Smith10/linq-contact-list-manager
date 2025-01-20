# Contact List Manager

A simple web application for managing contacts using React for the frontend and JSON Server for the backend.

## Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Requirements](#requirements)
- [Installation](#installation)
- [Folder Structure](#folder-structure)
- [How It Works](#how-it-works)
- [Features and Trade-Offs](#features-and-trade-offs)
- [Contributing](#contributing)
- [License](#license)

## Overview

Contact List Manager is a lightweight web application designed to help users efficiently manage their contacts. Built with React for the frontend and JSON Server for the backend, this app provides a straightforward way to add, view, search, and delete contacts. The application offers a responsive design, ensuring a smooth user experience.

### Features

- Add Contacts: Input contact details (name and email) to create new entries.
- View Contacts: Dynamically update the contact list as contacts are added or removed.
- Search Contacts: Real-time search functionality by name or email.
- Delete Contacts: Remove individual contacts from the list (bonus feature).

## Tech Stack

- Frontend: React
- Backend: JSON Server (mock API with database.json)
- Styling: Plain CSS (minimal styling focus)
- Concurrency: concurrently package for simultaneous frontend and backend server operation

## Requirements

- Node.js: Essential for running the application
- npm: Included with Node.js and used for dependency management

## Installation

To set up the application locally:

1. Clone the repository:
bash git clone https://github.com/yourusername/contact-list-manager.git cd contact-list-manager


2. Install backend dependencies:
`cd backend npm install json-server@0`


3. Install frontend dependencies:
`cd npm install`


4. Run the application:
`npm start`

This command will:
- Start the frontend server on `http://localhost:5173`
- Start the backend server on `http://localhost:8088`
- Both servers will operate simultaneously, allowing full-stack interaction

## Folder Structure

```bash 
/contact-list-manager 
├── /backend # Backend mock API with JSON Server 
│ └── database.json # JSON Server data (mock data storage) 
├── /frontend # React frontend │ 
├── /components # React components (e.g., ContactsView, ContactForm) 
│ └── /services # API service functions (e.g., addContact, getAllContacts) 
└── package.json # Project configuration and dependencies 
```


## How It Works

### Frontend

The React frontend allows users to interact with contacts through:

- Adding Contacts: Sends POST requests to the backend.
- Viewing/Search Contacts: Retrieves all contacts via GET requests.
- Deleting Contacts: Sends DELETE requests to remove specific contacts.

### Backend

Powered by JSON Server, this backend simulates RESTful API operations:

- Stores contact data in `database.json`
- Provides endpoints for CRUD operations:
  - GET /contacts: Retrieve all contacts
  - POST /contacts: Add new contacts
  - DELETE /contacts/{id}: Remove contacts by ID

## Features and Trade-Offs

### Search Functionality

Implementation: Real-time filtering on the frontend
Trade-off: Suitable for small datasets; may require server-side filtering for larger sets

### Data Persistence

Implementation: Local storage using `database.json`
Trade-off: Ideal for mock data; production would require a real database

### Frontend Styling

Implementation: Plain CSS for simplicity
Trade-off: Prioritizes functionality over design polish

### Deleting Contacts

Bonus Feature: Individual contact deletion implemented
Trade-off: Basic implementation; could benefit from confirmation dialogs and error handling

### Tests 

If I were to continue working on this project in the future, I would add tests to the frontend.
