import React from 'react';
import { useSearchTracksById } from '@/hooks/useSearch';
import { useParams } from 'react-router';

function Track() {
  const { id } = useParams<{ id: string }>();
  const { data } = useSearchTracksById(id);

  return <div>{JSON.stringify(data)}</div>;
}

export default Track;
