import { AlbumListItemType } from '@/types/spotify';
import React from 'react';
import { useHistory } from 'react-router';
import AlbumCard from './AlbumCard';

interface AlbumTableProps {
  dataList: Array<AlbumListItemType>;
}

// const headers = [
//   'id',
//   'name',
//   'image',
//   'total_tracks',
//   'artists',
//   'release_date',
//   'Link',
// ];

function AlbumTable({ dataList }: AlbumTableProps) {
  const history = useHistory();
  const onClickCard = (id: string) => history.push(`/album/${id}`);
  return (
    dataList && (
      <div className="album-table">
        {dataList.map((album) => (
          <AlbumCard
            key={album.id}
            albumData={album}
            onClickCard={() => onClickCard(album.id)}
          />
        ))}
      </div>
    )
  );
}

export default AlbumTable;
