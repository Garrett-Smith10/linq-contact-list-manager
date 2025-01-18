/* eslint-disable react/prop-types */
import { useState } from 'react';
import './FilterContacts.css'; // Importing CSS styles for the FilterContacts component

export const FilterContacts = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState(''); // State for managing the search term

  // Handler for updating the search term and invoking the search function passed from parent
  const handleSearch = (event) => {
    setSearchTerm(event.target.value); // Updating search term state
    onSearch(event.target.value); // Calling the onSearch function with the updated search term
  };

  return (
    <div className="filter-contacts">
      <input 
        type="text" 
        value={searchTerm} 
        onChange={handleSearch} // Calling handleSearch on input change
        placeholder="Search contacts..." 
      />
    </div>
  );
};
