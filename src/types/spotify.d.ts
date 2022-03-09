import { SearchTypeEnum } from '@/consts';

export type SearchType = keyof typeof SearchTypeEnum;

export interface ResultType<T = Record<string, any>> {
  href: string;
  items: Array<T>;
  limit: number;
  next: string | null;
  offset: number;
  previous: string | null;
  total: number;
}

export type Image = {
  height: number;
  width: number;
  url: string;
};

export type Followers = {
  href: string | null;
  total: number;
};

export type ExternalUrls = {
  spotify: string;
};

export type CopyRight = {
  text: string;
  type: 'C' | 'P';
};

export interface AlbumListItemType {
  id: string;
  name: string;
  album_type: string;
  artists: Array<Partial<ArtistType>>;
  available_markets: Array<string>;
  external_urls: ExternalUrls;
  href: string;
  images: Array<Image>;
  release_date: string;
  release_date_precision: string;
  total_tracks: number;
  type: 'album';
  uri: string;
}

export interface AlbumType extends AlbumListItemType {
  label: string;
  tracks: ResultType<TrackType>;
  popularity: number;
  genres: Array<unknown>;
  copyrights: Array<CopyRight>;
}

export type ArtistType = {
  id: string;
  name: string;
  images: Array<Image>;
  external_urls: ExternalUrls;
  href: string;
  followers: Followers;
  genres: Array<string>;
  popularity: number;
  type: 'artist';
  uri: string;
};

export type EpisodeType = {
  id: string;
};

export type UserType = {
  id: string;
  display_name: string;
  external_urls: ExternalUrls;
  href: string;
  type: 'user';
  uri: string;
};

export type PlayListType = {
  id: string;
  name: string;
  images: Array<Image>;
  href: string;
  description: string;
  external_urls: ExternalUrls;
  collaborative: boolean;
  owner: UserType;
  primary_color?: string | null;
  public?: string | null;
  snapshot_id: string;
  tracks: Array<{ href: string; total: number }>;
  type: 'playlist';
  uri: string;
};

export type ShowType = {
  id: string;
};

export type TrackType = {
  id: string;
  name: string;
  artists: Array<Partial<ArtistType>>;
  available_markets: Array<string>;
  disc_number: number;
  duration_ms: number;
  explicit: boolean;
  album: AlbumListItemType;
  external_ids: { isrc: string };
  external_urls: ExternalUrls;
  href: string;
  is_local: boolean;
  popularity: number;
  preview_url: string | null;
  track_number: number;
  type: 'track';
  uri: string;
};
