import React from 'react';
import { useNowPlayingMovies } from '../../hooks';
import Loader from '../Loader';
import Movies from '../Movies';

function NowPlayingMovies() {
  const { isLoading, data } = useNowPlayingMovies();

  if (isLoading) return <Loader />;

  if (!data) return null;

  return <Movies movies={data.results} />;
}

export default NowPlayingMovies;
