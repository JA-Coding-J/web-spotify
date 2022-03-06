import React, { useState } from 'react';
import { SearchType, useSearch } from '../../hooks/useSearch';
import SearchForm from '@/components/SearchForm';

export default function Home() {
  const [searchText, setSearchText] = useState<string>('');
  const [type, setType] = useState<Array<SearchType>>([]);
  // const [formData, setFormData] = useState<SearchPayloadType>();
  const { data, loading, error } = useSearch();

  // const generateTable = () =>
  //   Object.entries(data).map(([key, data]) => (
  //     <SearchResult headers={headers} dataList={data} />
  //   ));
  console.log(data);

  return (
    <div>
      <SearchForm
        searchText={searchText}
        searchChange={(e) => setSearchText(e.target.value)}
        type={type}
      />
    </div>
  );
}
