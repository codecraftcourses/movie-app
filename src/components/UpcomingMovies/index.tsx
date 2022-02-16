import React from 'react';
import { useUpcomingMovies } from '../../hooks';
import Loader from '../Loader';
import Movies from '../Movies';

function UpcomingMovies() {
  const { isLoading, hasNextPage, fetchNextPage, data } = useUpcomingMovies();

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

export default UpcomingMovies;
