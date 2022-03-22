import Playlist from '@/components/PlayList';
import Table from '@/components/Table';
import { Tbody, Td } from '@/components/Table/Tbody';
import Thead, { Th } from '@/components/Table/Thead';
import { useArtistTopTracks } from '@/hooks/useSearch';
import { ArtistType, TopTracksType } from '@/types/spotify';
import { imageSortBySize, openPageInNewTab, trackDuration } from '@/utils';
import React, { useEffect, useState } from 'react';
import { useLocation, useParams } from 'react-router';

function ArtistDetail() {
  const { id } = useParams<{ id: string }>();
  const { state } = useLocation<{ data: ArtistType }>();
  const [artist, setArtist] = useState<Partial<ArtistType>>(null);
  const [tracks, setTracks] = useState<Array<TopTracksType>>([]);
  const { data, loading } = useArtistTopTracks(id);
  useEffect(() => {
    setArtist(state.data);
  }, [state]);

  useEffect(() => {
    console.log(data);

    setTracks(data?.tracks || []);
  }, [data]);
  return artist ? (
    <Playlist
      img={{
        url: imageSortBySize(artist.images)[artist.images.length - 1].url,
        isBg: true,
      }}
      type={artist.type}
      title={artist.name}
      description={
        <>
          <span style={{ fontSize: '1.5em' }}>{artist.popularity} </span>
          Popularity
        </>
      }
      loading={loading}
    >
      <Table>
        <Thead>
          <Th name="" />
          <Th name="" />
          <Th name="" />
        </Thead>
        <Tbody>
          {tracks &&
            tracks.map((track, index) => (
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

export default ArtistDetail;
