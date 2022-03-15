import React, { useEffect, useState } from 'react';
import { useSearch } from '../../hooks/useSearch';
import SearchResult from '@/components/SearchResult';
import SearchForm from '@/components/SearchForm';
import { SearchType } from '../../types/spotify';
import { SearchTypeEnum, tabNameMap } from '@/consts';

export default function Home() {
  const [searchText, setSearchText] = useState<string>('');
  const [types, setTypes] = useState<Array<SearchType>>(
    Object.keys(SearchTypeEnum) as Array<SearchType>,
  );
  // const [formData, setFormData] = useState<SearchPayloadType>();
  const { data, loading, error } = useSearch();

  useEffect(() => {
    console.log(data);
    console.log(extractObjectType(data));
  }, [data]);

  return (
    <div className="home" style={{ backgroundColor: '#1b1b1b' }}>
      <SearchForm
        searchText={searchText}
        searchChange={(e) => setSearchText(e.target.value)}
        type={types}
      />
      <SearchResult data={data} tabsName={types.map((t) => tabNameMap[t])} />
    </div>
  );
}

function extractObjectType(target) {
  const typeObj = { keys: [] };
  if (target === null || target === undefined) return target;
  if (typeof target === 'object' && !Array.isArray(target)) {
    typeObj.keys = Object.keys(target);
    Object.entries(target).forEach(([k, v]) => {
      typeObj[k] = extractObjectType(v);
    });
    return typeObj;
  } else if (Array.isArray(target)) {
    return [extractObjectType(target[0])];
  } else {
    return typeof target;
  }
}
