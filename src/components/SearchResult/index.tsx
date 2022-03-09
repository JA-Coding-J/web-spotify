import { useTabContext } from '@/context/TabContainerContext';
import React from 'react';
import AlbumTable from '../AlbumTable';
import TabContainerProvider from '@/context/TabContainerContext/provider';
import Container from '../Container';
import './search-result.css';
import { ResultType } from '@/types/spotify';

interface SearchResultProp {
  data: Record<string, ResultType>;
}

const TableListComp = {
  albums: AlbumTable,
  artists: '',
  episodes: '',
  playlists: '',
  shows: '',
  tracks: '',
};

const tabsName = [
  'albums',
  'artists',
  'episodes',
  'playlists',
  'shows',
  'tracks',
];

function SearchResult({ data }: SearchResultProp) {
  const { tabIndex } = useTabContext();
  function generateTable() {
    // different type result list
    const tableName = tabsName[tabIndex];
    const TableList = TableListComp[tableName];
    return (
      data && data[tableName] && <TableList dataList={data[tableName].items} />
    );
  }

  return (
    <Container>
      <div className="search-result">
        <TabContainerProvider tabsName={tabsName}>
          {generateTable()}
        </TabContainerProvider>
      </div>
    </Container>
  );
}

export default SearchResult;
