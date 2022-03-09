import React, { ChangeEventHandler } from 'react';
import './search-bar.css';

interface SearchProp {
  onChange: ChangeEventHandler<HTMLInputElement>;
  value: string;
}

function SearchBar({ onChange, value }: SearchProp) {
  return (
    <div className="search-bar">
      <span className="search-label">Search</span>
      <input
        type="search"
        name="search"
        id="searchBox"
        onChange={onChange}
        value={value}
        placeholder="I want to search for..."
      ></input>
    </div>
  );
}

export default SearchBar;
