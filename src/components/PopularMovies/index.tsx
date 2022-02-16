import React from 'react';
import { usePopularMovies } from '../../hooks';
import Loader from '../Loader';
import Movies from '../Movies';

function PopularMovies() {
  const { isLoading, hasNextPage, fetchNextPage, data } = usePopularMovies();

  if (isLoading) return <Loader />;

  if (!data) return null;

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
