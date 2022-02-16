import React from 'react';
import type RatingProps from './RatingProps';
import Badge from '../Badge';

function Rating({ movie }: RatingProps) {
  return (
    <Badge color="primary" icon="star">
      {movie.vote_average.toFixed(1)}
    </Badge>
  );
}

export default Rating;
