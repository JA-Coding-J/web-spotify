import { AlbumType, SearchType } from '../types/spotify';
import { useEffect } from 'react';
import { useGet } from './http';
import { SearchTypeEnum } from '@/consts';

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
  q: QType;
  type: Array<SearchType>;
  include_external?: 'audio';
  limit?: number;
  market?: string;
  offset?: number;
};

// type SearchParam = {
//   q: QType;
//   type: string;
//   include_external?: 'audio';
//   limit?: number;
//   market?: string;
//   offset?: number;
// };

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
