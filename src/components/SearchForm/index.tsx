import React, { ChangeEventHandler } from 'react';
import SearchBar from '../SearchBar';
import './search-form.css';
import Button from '../Button';

interface SearchFormProp {
  searchText: string;
  searchChange: ChangeEventHandler<HTMLInputElement>;
  type: Array<string>;
}

function SearchForm({ searchText, searchChange, type }: SearchFormProp) {
  return (
    <div className="search-form">
      <div className="search-bar-box">
        <SearchBar value={searchText} onChange={searchChange} />
        <Button>Search</Button>
      </div>
    </div>
  );
}

export default SearchForm;
