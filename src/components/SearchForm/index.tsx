import React, { ChangeEventHandler, MouseEventHandler } from 'react';
import SearchBar from '../SearchBar';
import '@/assets/styles/search-form.css';
import Button from '../controls/Button';
import Selector from '@/components/controls/Selector';
import { SearchTypeEnum } from '@/utils/consts';

interface SearchFormProp {
  searchText: string;
  searchChange: ChangeEventHandler<HTMLInputElement>;
  submit: MouseEventHandler<HTMLButtonElement>;
  selectedTypes: Array<string>;
  onChangeType: (values: Array<string>) => any;
  typeList: Array<string>;
}

function SearchForm({
  searchText,
  searchChange,
  submit,
  selectedTypes,
  onChangeType,
  typeList,
}: SearchFormProp) {
  return (
    <div className="search-form">
      <div className="search-bar-box">
        <SearchBar value={searchText} onChange={searchChange} />
        <Selector
          label="Type"
          options={(typeList || []).map((o) => ({ value: o }))}
          multiple
          placeholder="select search types"
          values={selectedTypes}
          onChange={onChangeType}
        />

        <Button onClick={submit}>Search</Button>
      </div>
    </div>
  );
}

export default SearchForm;
