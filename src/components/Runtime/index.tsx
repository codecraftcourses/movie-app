import React from 'react';
import type RuntimeProps from './RuntimeProps';
import Badge from '../Badge';
import { formatRuntime } from '../../utils';

function Runtime({ movie }: RuntimeProps) {
  return <Badge>{formatRuntime(movie.runtime)}</Badge>;
}

export default Runtime;
