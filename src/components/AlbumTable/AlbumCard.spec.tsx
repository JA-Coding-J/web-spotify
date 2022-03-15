import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import AlbumCard from './AlbumCard';
import { albumList } from '@/__mocks__/mockData';
import { AlbumListItemType } from '@/types/spotify';

describe('[AlbumCard Component]', () => {
  const albumData = albumList[0] as AlbumListItemType;
  const onClickCard = jest.fn();
  test('should trigger onClick callback when click card', () => {
    const { container } = render(
      <AlbumCard albumData={albumData} onClickCard={onClickCard} />,
    );
    fireEvent.click(container.childNodes[0]);
    expect(onClickCard).toHaveBeenCalled();
  });
});
