import React from 'react';
import { useTopRatedMovies } from '../../hooks';
import Loader from '../Loader';
import Movies from '../Movies';

function TopRatedMovies() {
  const { isLoading, hasNextPage, fetchNextPage, data } = useTopRatedMovies();

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

export default TopRatedMovies;
