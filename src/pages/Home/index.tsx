import React, { useEffect, useState } from 'react';
import {
  SearchPayloadType,
  useGetNewReleaseAlbums,
  useSearch,
} from '../../hooks/useSearch';
import SearchResult from '@/components/SearchResult';
import SearchForm from '@/components/SearchForm';
import { SpotifyType } from '../../types/spotify';
import { SearchTypeEnum, tabNameMap } from '@/utils/consts';
import '@/assets/styles/home.css';
import { useGet } from '@/hooks/http';
import AlbumTable from '@/components/AlbumTable';
import Container from '@/components/Container';
import CenterLoader from '@/components/CenterLoader';

export default function Home() {
  const [searchText, setSearchText] = useState<string>();
  const [types, setTypes] = useState<Array<SpotifyType>>([
    SearchTypeEnum.album,
    SearchTypeEnum.artist,
  ]);
  const { data: newRelsAlbums, loading: nrLoading } =
    useGetNewReleaseAlbums(20);
  const { request, data, loading, authorization } = useGet<
    any,
    SearchPayloadType
  >(`/search`);

  useEffect(() => {
    onSearch();
  }, [searchText, types, authorization]);

  const onSearch = async () => {
    if (!searchText || types?.length === 0) return;
    await request({
      params: {
        q: searchText,
        type: types.join(','),
      },
    });
  };

  return (
    <div className="home">
      <SearchForm
        searchText={searchText}
        searchChange={(e) => setSearchText(e.target.value)}
        submit={(e) => onSearch()}
        selectedTypes={types}
        onChangeType={(values) => setTypes(values as Array<SpotifyType>)}
        typeList={[SearchTypeEnum.album, SearchTypeEnum.artist]}
      />
      {searchText ? (
        <SearchResult
          searchText={searchText}
          data={data}
          tabsName={types.map((t) => tabNameMap[t])}
          loading={loading}
        />
      ) : (
        <Container>
          {nrLoading ? (
            <CenterLoader />
          ) : (
            <div>
              <h2>New Release Albums</h2>
              <br />
              <AlbumTable dataList={newRelsAlbums?.albums.items || []} />
            </div>
          )}
        </Container>
      )}
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
