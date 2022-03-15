export const albumList = [
  {
    album_type: 'album',
    artists: [
      {
        external_urls: {
          spotify: 'https://open.spotify.com/artist/4oUHIQIBe0LHzYfvXNW4QM',
        },
        href: 'https://api.spotify.com/v1/artists/4oUHIQIBe0LHzYfvXNW4QM',
        id: '4oUHIQIBe0LHzYfvXNW4QM',
        name: 'Morgan Wallen',
        type: 'artist',
        uri: 'spotify:artist:4oUHIQIBe0LHzYfvXNW4QM',
      },
    ],
    available_markets: ['AD', 'AE'],
    external_urls: {
      spotify: 'https://open.spotify.com/album/6JlCkqkqobGirPsaleJpFr',
    },
    href: 'https://api.spotify.com/v1/albums/6JlCkqkqobGirPsaleJpFr',
    id: '6JlCkqkqobGirPsaleJpFr1',
    images: [],
    name: 'Dangerous: The Double Album',
    release_date: '2021-01-08',
    release_date_precision: 'day',
    total_tracks: 30,
    type: 'album',
    uri: 'spotify:album:6JlCkqkqobGirPsaleJpFr',
  },
  {
    album_type: 'album',
    artists: [],
    available_markets: ['AD', 'AE'],
    external_urls: {
      spotify: 'https://open.spotify.com/album/6JlCkqkqobGirPsaleJpFr',
    },
    href: 'https://api.spotify.com/v1/albums/6JlCkqkqobGirPsaleJpFr',
    id: '6JlCkqkqobGirPsaleJpFr2',
    images: [],
    name: 'Dangerous: The Double Album',
    release_date: '2021-01-08',
    release_date_precision: 'day',
    total_tracks: 30,
    type: 'album',
    uri: 'spotify:album:6JlCkqkqobGirPsaleJpFr',
  },
  {
    album_type: 'album',
    artists: [],
    available_markets: ['AD', 'AE'],
    external_urls: {
      spotify: 'https://open.spotify.com/album/6JlCkqkqobGirPsaleJpFr',
    },
    href: 'https://api.spotify.com/v1/albums/6JlCkqkqobGirPsaleJpFr',
    id: '6JlCkqkqobGirPsaleJpFr3',
    images: [],
    name: 'Dangerous: The Double Album',
    release_date: '2021-01-08',
    release_date_precision: 'day',
    total_tracks: 30,
    type: 'album',
    uri: 'spotify:album:6JlCkqkqobGirPsaleJpFr',
  },
];

export const albums = {
  href: 'https://api.spotify.com/v1/search?query=album&type=album&locale=en-US%2Cen%3Bq%3D0.9%2Czh%3Bq%3D0.8%2Czh-TW%3Bq%3D0.7%2Czh-CN%3Bq%3D0.6&offset=0&limit=20',
  items: albumList,
  limit: 20,
  next: 'https://api.spotify.com/v1/search?query=album&type=album&locale=en-US%2Cen%3Bq%3D0.9%2Czh%3Bq%3D0.8%2Czh-TW%3Bq%3D0.7%2Czh-CN%3Bq%3D0.6&offset=20&limit=20',
  offset: 0,
  previous: null,
  total: 10109,
};

export const searchResult = {
  albums: albums,
};
