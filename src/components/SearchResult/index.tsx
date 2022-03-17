import { TabContextConsumer } from '@/context/TabContainerContext';
import React from 'react';
import AlbumTable from '../AlbumTable';
import TabContainerProvider from '@/context/TabContainerContext/provider';
import '@/assets/styles/search-result.css';
import { ResultType } from '@/types/spotify';
import CenterLoader from '../CenterLoader';

interface SearchResultProp {
  data: Record<string, ResultType>;
  tabsName: Array<string>;
  loading: boolean;
}

const TableListCompMap = {
  albums: AlbumTable,
  artists: '',
  episodes: '',
  playlists: '',
  shows: '',
  tracks: '',
};

function SearchResult({ data, tabsName, loading }: SearchResultProp) {
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
    <div className="search-result">
      <TabContainerProvider tabsName={tabsName}>
        <div className="search-result_table-container">
          {loading ? (
            <CenterLoader />
          ) : (
            <TabContextConsumer>
              {({ tabIndex }) => generateTable(tabIndex)}
            </TabContextConsumer>
          )}
        </div>
      </TabContainerProvider>
    </div>
  );
}

export default SearchResult;
