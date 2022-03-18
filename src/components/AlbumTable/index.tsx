import { AlbumListItemType } from '@/types/spotify';
import { imageSortBySize } from '@/utils';
import React from 'react';
import { useHistory } from 'react-router';
import Card from '../Card';

interface AlbumTableProps {
  dataList: Array<AlbumListItemType>;
}

function AlbumTable({ dataList }: AlbumTableProps) {
  const history = useHistory();
  const onClickCard = (id: string) => history.push(`/album/${id}`);
  return (
    dataList &&
    dataList.length && (
      <div style={{ display: 'flex', flexWrap: 'wrap' }}>
        {dataList.map((album) => (
          <Card
            key={album.id}
            img={{
              src: imageSortBySize(album.images)[1]?.url ?? '',
              alt: album.name,
            }}
            mainTitle={{
              name: album.name,
              extUrl: album.external_urls.spotify,
            }}
            subTitle={album.artists.map((a) => ({
              name: a.name,
              extUrl: a.external_urls.spotify,
            }))}
            onClickCard={() => onClickCard(album.id)}
          />
        ))}
      </div>
    )
  );
}

export default AlbumTable;
