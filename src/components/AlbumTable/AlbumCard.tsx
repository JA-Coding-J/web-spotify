import { AlbumListItemType } from '@/types/spotify';
import React from 'react';
import { useHistory } from 'react-router';
import './album.css';

interface AlbumCardProp {
  albumData: AlbumListItemType;
}

function AlbumCard({ albumData }: AlbumCardProp) {
  const history = useHistory();
  function onClickCard(e) {
    console.log('GO TO DETAIL PAGE');
    history.push(`/album/${albumData.id}`);
  }
  return (
    <div className="album-card" onClick={onClickCard}>
      <div className="album-box">
        <div className="album-img">
          <img
            src={
              albumData.images.sort((a, b) => (a.width < b.width ? -1 : 1))[1]
                .url
            }
            alt={albumData.name}
            style={{ width: '100%' }}
          />
        </div>
        <div className="album-desc">
          <a href={albumData.external_urls.spotify}>
            <p className="name">{albumData.name}</p>
          </a>
          <p className="artist">
            {albumData.artists.map((artist) => (
              <a href={artist.external_urls.spotify} key={artist.name}>
                {artist.name}
              </a>
            ))}
          </p>
        </div>
      </div>
    </div>
  );
}

export default AlbumCard;
