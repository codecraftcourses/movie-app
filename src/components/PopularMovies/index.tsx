import React from 'react';
import { usePopularMovies } from '../../hooks';
import Loader from '../Loader';
import Movies from '../Movies';

function PopularMovies() {
  const { isLoading, data } = usePopularMovies();

  if (isLoading) return <Loader />;

  if (!data) return null;

  return <Movies movies={data.results} />;
}

export default PopularMovies;
