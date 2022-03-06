import React from 'react';
import { useParams } from 'react-router';

function Track() {
  const { id } = useParams<{ id: string }>();

  return <div>Track Detail</div>;
}

export default Track;
