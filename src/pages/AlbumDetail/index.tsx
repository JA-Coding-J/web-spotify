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
import { useParams } from 'react-router';
import '@/assets/styles/album.css';
import Playlist from '@/components/PlayList';

function AlbumDetail() {
  const { id } = useParams<{ id: string }>();
  const { data, loading } = useAlbumById(id);

  function totalDuration() {
    const ms = data?.tracks.items.reduce((res, t) => res + t.duration_ms, 0);
    if (!ms) return;
    const { hour, min, sec } = convertDuration(ms);
    return `${hour ? hour + ' h ' : ''}${min && min + ' min '}${
      sec && sec + ' sec'
    }`;
  }

  return data ? (
    <Playlist
      img={{
        url: imageSortBySize(data.images)[data.images.length - 2].url,
        isBg: false,
      }}
      type={data.type}
      title={data.name}
      description={<>{data.label ?? ''}</>}
      owners={data.artists.map((a) => ({
        url: a.external_urls.spotify,
        name: a.name,
      }))}
      release_date={data.release_date}
      tracksTotal={{ total: data.total_tracks, duration: totalDuration() }}
      loading={loading}
    >
      <Table>
        <Thead>
          <Th name="" />
          <Th name="" />
          <Th name="" />
        </Thead>
        <Tbody>
          {data &&
            data.tracks.items.map((track, index) => (
              <tr
                key={track.id || index}
                onClick={() => openPageInNewTab(track.external_urls.spotify)}
              >
                <Td>{index}</Td>
                <Td>{track.name}</Td>
                <Td>{trackDuration(track.duration_ms)}</Td>
              </tr>
            ))}
        </Tbody>
      </Table>
    </Playlist>
  ) : (
    <></>
  );
}

export default AlbumDetail;
