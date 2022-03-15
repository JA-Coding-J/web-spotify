import { TabContextConsumer } from '@/context/TabContainerContext';
import React from 'react';
import AlbumTable from '../AlbumTable';
import TabContainerProvider from '@/context/TabContainerContext/provider';
import Container from '../Container';
import '@/assets/styles/search-result.css';
import { ResultType } from '@/types/spotify';

interface SearchResultProp {
  data: Record<string, ResultType>;
  tabsName: Array<string>;
}

const TableListCompMap = {
  albums: AlbumTable,
  artists: '',
  episodes: '',
  playlists: '',
  shows: '',
  tracks: '',
};

function SearchResult({ data, tabsName }: SearchResultProp) {
  function generateTable(tabIndex: number) {
    // different type result list
    const tableName = tabsName[tabIndex];
    const TableList = TableListCompMap[tableName];
    return data && data[tableName] && TableList ? (
      <TableList dataList={data[tableName].items} />
    ) : (
      <div>no result</div>
    );
  }

  return (
    <Container>
      <div className="search-result">
        <TabContainerProvider tabsName={tabsName}>
          <TabContextConsumer>
            {({ tabIndex }) => generateTable(tabIndex)}
          </TabContextConsumer>
        </TabContainerProvider>
      </div>
    </Container>
  );
}

export default SearchResult;
