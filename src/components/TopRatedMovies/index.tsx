import React from 'react';
import { useTopRatedMovies } from '../../hooks';
import Loader from '../Loader';
import Movies from '../Movies';

function TopRatedMovies() {
  const { isLoading, data } = useTopRatedMovies();

  if (isLoading) return <Loader />;

  if (!data) return null;

  return <Movies movies={data.results} />;
}

export default TopRatedMovies;
