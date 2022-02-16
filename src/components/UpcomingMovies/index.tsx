import React from 'react';
import { useUpcomingMovies } from '../../hooks';
import Loader from '../Loader';
import Movies from '../Movies';

function UpcomingMovies() {
  const { isLoading, data } = useUpcomingMovies();

  if (isLoading) return <Loader />;

  if (!data) return null;

  return <Movies movies={data.results} />;
}

export default UpcomingMovies;
