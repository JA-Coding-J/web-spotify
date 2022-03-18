import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Card from '.';
import { albumList } from '@/__mocks__/mockData';
import { AlbumListItemType } from '@/types/spotify';
import { imageSortBySize } from '@/utils';

describe('[AlbumCard Component]', () => {
  const albumData = albumList[0] as AlbumListItemType;
  const onClickCard = jest.fn();
  test('should trigger onClick callback when click card', () => {
    const { container } = render(
      <Card
        img={{
          src: imageSortBySize(albumData.images)[1]?.url ?? '',
          alt: albumData.name,
        }}
        mainTitle={{
          name: albumData.name,
          extUrl: albumData.external_urls.spotify,
        }}
        subTitle={albumData.artists.map((a) => ({
          name: a.name,
          extUrl: a.external_urls.spotify,
        }))}
        onClickCard={onClickCard}
      />,
    );
    fireEvent.click(container.childNodes[0]);
    expect(onClickCard).toHaveBeenCalled();
  });
});
