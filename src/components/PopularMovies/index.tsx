import React from 'react';
import { usePopularMovies } from '../../hooks';
import Movies from '../Movies';

function PopularMovies() {
  const { isLoading, data, hasNextPage, fetchNextPage } = usePopularMovies();

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

export default PopularMovies;
