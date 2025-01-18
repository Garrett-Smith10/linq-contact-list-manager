/* eslint-disable react/prop-types */
import { useState } from "react";

export const FilterContacts = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleChange = (event) => {
    setSearchTerm(event.target.value);
    onSearch(event.target.value);
  };

  return (
    <div className="filter-container">
      <label htmlFor="search-input">Search Contacts:</label>
      <input
        id="search-input"
        type="text"
        value={searchTerm}
        onChange={handleChange}
        placeholder="Enter name or email"
      />
    </div>
  );
};
