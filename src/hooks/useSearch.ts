import {
  AlbumListItemType,
  AlbumType,
  ArtistType,
  ResultType,
  SpotifyType,
  TopTracksType,
} from '../types/spotify';
import { useEffect } from 'react';
import { useGet } from './http';
import { countryName, SearchTypeEnum } from '@/utils/consts';

export type QType =
  | 'album'
  | 'artist'
  | 'track'
  | 'year'
  | 'upc'
  | 'tag:hipster'
  | 'tag:new'
  | 'isrc'
  | 'genre';

export type SearchPayloadType = {
  q: string;
  type: Array<SpotifyType>;
  include_external?: 'audio';
  limit?: number;
  market?: string;
  offset?: number;
};

const defaultPayload = {
  q: 'album',
  type: Object.keys(SearchTypeEnum),
} as SearchPayloadType;

export const useSearch = (payload: SearchPayloadType = defaultPayload) => {
  const params = {
    ...payload,
    type: payload.type.join(','),
  };
  const queryString = new URLSearchParams();
  Object.entries(params).forEach(([key, value]) =>
    queryString.append(key, String(value)),
  );
  const { request, authorization, ...rest } = useGet<any, SearchPayloadType>(
    `/search?${queryString}`,
  );
  useEffect(() => {
    if (!payload.q) return;
    request();
  }, [authorization]);
  return { request, ...rest };
};

export const useGetNewReleaseAlbums = (limit = 5, offset = 0) => {
  const { request, authorization, ...rest } = useGet<{
    albums: ResultType<AlbumListItemType>;
  }>(
    `browse/new-releases?country=${countryName}&limit=${limit}&offset=${offset}`,
  );
  useEffect(() => {
    request();
  }, [authorization]);
  return { ...rest };
};

export const useSearchTracksById = (id: string) => {
  const { request, authorization, ...rest } = useGet<any, any>(`/tracks/${id}`);
  useEffect(() => {
    if (!id) return;
    request();
  }, [authorization]);
  return { ...rest };
};

export const useAlbumById = (id: string) => {
  const { request, authorization, ...rest } = useGet<AlbumType>(
    `/albums/${id}`,
  );
  useEffect(() => {
    if (!id) return;
    request();
  }, [authorization]);
  return { ...rest };
};

export const useArtistById = (id: string) => {
  const { request, authorization, ...rest } = useGet<ArtistType>(
    `/artists/${id}`,
  );
  useEffect(() => {
    if (!id) return;
    request();
  }, [authorization]);
  return { ...rest };
};

export const useArtistTopTracks = (id: string) => {
  // const countryName = useAppSelector(selectCountry);
  const { request, authorization, ...rest } = useGet<{
    tracks: Array<TopTracksType>;
  }>(`/artists/${id}/top-tracks?market=${countryName}`);
  useEffect(() => {
    if (!id) return;
    request();
  }, [authorization]);
  return { ...rest };
};
