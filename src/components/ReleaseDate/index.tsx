import React from 'react';
import dayjs from 'dayjs';
import type ReleaseDateProps from './ReleaseDateProps';
import Badge from '../Badge';

function ReleaseDate({ movie }: ReleaseDateProps) {
  return <Badge>{dayjs(movie.release_date).format('YYYY')}</Badge>;
}

export default ReleaseDate;
