import React from 'react';
import { useNowPlayingMovies } from '../../hooks';
import Movies from '../Movies';

function NowPlayingMovies() {
  const { isLoading, data, hasNextPage, fetchNextPage } = useNowPlayingMovies();

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

export default NowPlayingMovies;
