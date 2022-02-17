import React from 'react';
import { useUpcomingMovies } from '../../hooks';
import Movies from '../Movies';

function UpcomingMovies() {
  const { isLoading, data, hasNextPage, fetchNextPage } = useUpcomingMovies();

  if (isLoading || !data) return null;

  return (
    <Movies
      loading={isLoading}
      hasNextPage={Boolean(hasNextPage)}
      onLoadMore={fetchNextPage}
      pages={data.pages}
    />
  );
}

export default UpcomingMovies;
