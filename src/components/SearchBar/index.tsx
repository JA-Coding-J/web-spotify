import React, { ChangeEventHandler } from 'react';
import '@/assets/styles/search-bar.css';

interface SearchProp {
  onChange: ChangeEventHandler<HTMLInputElement>;
  value: string;
}

function SearchBar({ onChange, value }: SearchProp) {
  return (
    <label htmlFor="searchBox" className="search-bar">
      <span className="search-label">Search</span>
      <input
        type="search"
        name="search"
        id="searchBox"
        onChange={onChange}
        value={value}
        placeholder="I want to search for..."
      ></input>
    </label>
  );
}

export default SearchBar;
