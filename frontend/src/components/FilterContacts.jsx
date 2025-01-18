/* eslint-disable react/prop-types */
import { useState } from 'react';
import './FilterContacts.css';

export const FilterContacts = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
    onSearch(event.target.value);
  };

  return (
    <div className="filter-contacts">
      <input 
        type="text" 
        value={searchTerm} 
        onChange={handleSearch} 
        placeholder="Search contacts..." 
      />
    </div>
  );
};
