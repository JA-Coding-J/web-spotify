import { ArtistType } from '@/types/spotify';
import { imageSortBySize } from '@/utils';
import React from 'react';
import { useHistory } from 'react-router';
import Card from '../Card';

interface ArtistTableProps {
  dataList: Array<ArtistType>;
}

function ArtistTable({ dataList }: ArtistTableProps) {
  const history = useHistory();
  const onClickCard = (id: string) => history.push(`/artist/${id}`);
  return (
    dataList &&
    dataList.length && (
      <div style={{ display: 'flex', flexWrap: 'wrap' }}>
        {dataList.map((artist) => (
          <Card
            key={artist.id}
            img={{
              src: imageSortBySize(artist.images)[1]?.url ?? '',
              alt: artist.name,
            }}
            imageType="cycle"
            mainTitle={{
              name: artist.name,
              extUrl: artist.external_urls.spotify,
            }}
            subTitle={[{ name: artist.type }]}
            onClickCard={() => onClickCard(artist.id)}
          />
        ))}
      </div>
    )
  );
}

export default ArtistTable;
