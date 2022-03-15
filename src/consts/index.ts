export const client_id = 'e614c19f6cb847fda90cb66eecb3452f';
export const client_secret = 'fe72307cc3684c2286115d5a60110734';

export enum SearchTypeEnum {
  'album' = 'album',
  'artist' = 'artist',
  'playlist' = 'playlist',
  'track' = 'track',
  'show' = 'show',
  'episode' = 'episode',
}

export const tabNameMap = {
  [SearchTypeEnum.album]: 'albums',
  [SearchTypeEnum.artist]: 'artists',
  [SearchTypeEnum.episode]: 'episodes',
  [SearchTypeEnum.playlist]: 'playlists',
  [SearchTypeEnum.show]: 'shows',
  [SearchTypeEnum.track]: 'tracks',
};
