import React from 'react';
import type GenresProps from './GenresProps';
import Badge from '../Badge';

function Genres({ movie }: GenresProps) {
  return <Badge>{movie.genres.map((genre) => genre.name).join(', ')}</Badge>;
}

export default Genres;
