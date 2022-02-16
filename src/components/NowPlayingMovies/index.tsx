import React from 'react';
import { useNowPlayingMovies } from '../../hooks';
import Loader from '../Loader';
import Movies from '../Movies';

function NowPlayingMovies() {
  const { isLoading, hasNextPage, fetchNextPage, data } = useNowPlayingMovies();

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

export default NowPlayingMovies;
