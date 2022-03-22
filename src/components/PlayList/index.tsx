import Table from '@/components/Table';
import { Tbody, Td } from '@/components/Table/Tbody';
import Thead, { Th } from '@/components/Table/Thead';
import { useAlbumById } from '@/hooks/useSearch';
import {
  convertDuration,
  imageSortBySize,
  openPageInNewTab,
  trackDuration,
} from '@/utils';
import React, { ReactNode } from 'react';
import { useHistory } from 'react-router';
import '@/assets/styles/playlist.css';
import CenterLoader from '../CenterLoader';
import { SpotifyType } from '@/types/spotify';

interface PlayListInterface {
  img: { url: string; isBg?: boolean };
  type: SpotifyType;
  title: string;
  description: ReactNode;
  loading: boolean;
  owners: Array<{ url: string; name: string }>;
  release_date: string;
  tracksTotal: { total: number; duration?: string };
  children: ReactNode;
}

function Playlist({
  img,
  type,
  title,
  description,
  loading,
  owners,
  release_date,
  tracksTotal,
  children,
}: Partial<PlayListInterface>) {
  const history = useHistory();
  return (
    <section className="playlist">
      <div className="top-bar">
        <button
          type="button"
          className="top-bar-back-btn"
          onClick={() => history.goBack()}
        >
          <i />
        </button>
      </div>
      <div
        className="playlist_page-bg-head"
        style={
          img && img.isBg
            ? {
                backgroundImage: `linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, .5)), url(${img.url})`,
              }
            : {}
        }
      />
      <div className="playlist_page-bg-tracklist" />
      {loading ? (
        <CenterLoader />
      ) : (
        <>
          <div className="playlist_head">
            <div className="playlist_head-img">
              {!img.isBg && <img src={img.url} style={{ width: '100%' }} />}
            </div>
            <div className="playlist_head-right">
              <p className="playlist_head-right_type">{type}</p>
              <h1>{title}</h1>
              <p className="playlist_head-right_desc">{description}</p>
              <p className="playlist_head-right_owner">
                {owners?.length && <a href={owners[0].url}>{owners[0].name}</a>}
                {release_date && <span>{release_date}</span>}
                {tracksTotal && (
                  <span>
                    {tracksTotal.total + ' songs'}
                    {tracksTotal.duration && `,${tracksTotal.duration}`}
                  </span>
                )}
              </p>
            </div>
          </div>
          <div className="playlist_track-list-container">{children}</div>
        </>
      )}
    </section>
  );
}

export default Playlist;
