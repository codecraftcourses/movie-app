import React from 'react';
import { Link } from 'react-router-dom';
import type MovieProps from './MovieProps';
import { useConfiguration } from '../../hooks';
import Loader from '../Loader';

function Movie({ movie }: MovieProps) {
  const { isLoading, data } = useConfiguration();

  if (isLoading) return <Loader />;

  if (!data) return null;

  const baseUrl = data.data.images.base_url;
  const posterSize = data.data.images.poster_sizes[3];

  return (
    <li>
      <Link className="block space-y-4" to={`/movie/${movie.id}`}>
        <img
          className="w-full rounded-lg"
          src={`${baseUrl}${posterSize}${movie.poster_path}`}
          alt={movie.title}
        />
        <h2>{movie.title}</h2>
      </Link>
    </li>
  );
}

export default Movie;
