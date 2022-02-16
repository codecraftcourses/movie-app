import React from 'react';
import { useParams } from 'react-router-dom';
import { useMovie } from '../hooks';
import { Loader } from '../components';

function Movie() {
  const { id } = useParams();
  const { isLoading, data } = useMovie(id!);

  if (isLoading) return <Loader />;

  if (!data) return null;

  return <h1>{data.data.title}</h1>;
}

export default Movie;
