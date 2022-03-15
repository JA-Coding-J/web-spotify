import { AlbumListItemType } from '@/types/spotify';
import React from 'react';
import '@/assets/styles/album.css';
import { imageSortBySize } from '@/utils';

interface AlbumCardProp {
  albumData: AlbumListItemType;
  onClickCard?: React.MouseEventHandler;
}

function AlbumCard({ albumData, onClickCard }: AlbumCardProp) {
  return (
    albumData && (
      <div className="album-card" onClick={onClickCard}>
        <div className="album-box">
          <div className="album-img">
            <img
              src={imageSortBySize(albumData.images)[1]?.url ?? ''}
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
    )
  );
}

export default AlbumCard;
