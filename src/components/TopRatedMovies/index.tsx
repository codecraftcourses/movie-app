import React from 'react';
import { useTopRatedMovies } from '../../hooks';
import Movies from '../Movies';

function TopRatedMovies() {
  const { isLoading, data, hasNextPage, fetchNextPage } = useTopRatedMovies();

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

export default TopRatedMovies;
