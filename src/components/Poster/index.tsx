import React from 'react';
import type PosterProps from './PosterProps';
import { useConfiguration } from '../../hooks';
import Loader from '../Loader';

function Poster({ movie }: PosterProps) {
  const { isLoading, data } = useConfiguration();

  if (isLoading) return <Loader />;

  if (!data) return null;

  const baseUrl = data.images.base_url;
  const posterSize = data.images.poster_sizes[3];

  return (
    <img
      className="w-full rounded-lg"
      src={`${baseUrl}${posterSize}${movie.poster_path}`}
      alt={movie.title}
    />
  );
}

export default Poster;
