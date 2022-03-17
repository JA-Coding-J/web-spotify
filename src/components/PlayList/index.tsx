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
import React from 'react';
import { useHistory, useParams } from 'react-router';
import '@/assets/styles/playlist.css';
import CenterLoader from '../CenterLoader';

function playlist() {
  const { id } = useParams<{ id: string }>();
  const history = useHistory();
  const { data, loading } = useAlbumById(id);

  function totalDuration() {
    const ms = data?.tracks.items.reduce((res, t) => res + t.duration_ms, 0);
    if (!ms) return;
    const { hour, min, sec } = convertDuration(ms);
    return (
      <span className="playlist-duration">
        {hour && hour + ' h '}
        {min && min + ' min '}
        {sec && sec + ' sec'}
      </span>
    );
  }

  return (
    data && (
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
        <div className="playlist_page-bg-head" />
        <div className="playlist_page-bg-tracklist" />
        {loading ? (
          <CenterLoader />
        ) : (
          <>
            <div className="playlist_head">
              <div className="playlist_head-img">
                <img
                  src={imageSortBySize(data.images)[1].url}
                  style={{ width: '100%' }}
                />
              </div>
              <div className="playlist_head-right">
                <p className="playlist_head-right_type">
                  {data.type.toUpperCase()}
                </p>
                <h1>{data.name}</h1>
                <p className="playlist_head-right_desc">{data.label ?? ''}</p>
                <p className="playlist_head-right_owner">
                  {data.artists?.length && (
                    <a href={data.artists[0].external_urls.spotify}>
                      {data.artists[0].name}
                    </a>
                  )}
                  {data.release_date && (
                    <span>{data.release_date.slice(0, 4)}</span>
                  )}
                  {data.total_tracks > 0 && (
                    <span>
                      {data.total_tracks + ' songs'}, {totalDuration()}
                    </span>
                  )}
                </p>
              </div>
            </div>
            <div className="playlist_track-list-container">
              <Table>
                <Thead>
                  <Th name="#" />
                  <Th name="title" />
                  <Th name="duration" />
                </Thead>
                <Tbody>
                  {data.tracks?.items &&
                    data.tracks.items.map((track, index) => (
                      <tr
                        key={track.id}
                        onClick={() =>
                          openPageInNewTab(track.external_urls.spotify)
                        }
                      >
                        <Td>{index}</Td>
                        <Td>{track.name}</Td>
                        <Td>{trackDuration(track.duration_ms)}</Td>
                      </tr>
                    ))}
                </Tbody>
              </Table>
            </div>
          </>
        )}
      </section>
    )
  );
}

export default playlist;
