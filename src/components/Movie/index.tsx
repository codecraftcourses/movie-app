import React from 'react';
import { Link } from 'react-router-dom';
import type MovieProps from './MovieProps';
import { useConfiguration } from '../../hooks';

function Movie({ movie }: MovieProps) {
  const { data } = useConfiguration();

  if (!data) return null;

  const baseUrl = data.data.images.base_url;
  const posterSize = data.data.images.poster_sizes.at(-1);

  return (
    <li>
      <Link className="block space-y-4" to={`/movies/${movie.id}`}>
        <img
          className="w-full rounded-lg"
          src={`${baseUrl}${posterSize}/${movie.poster_path}`}
          alt={movie.title}
        />
        <h2>{movie.title}</h2>
      </Link>
    </li>
  );
}

export default Movie;
