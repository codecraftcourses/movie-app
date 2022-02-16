import React from 'react';
import { Link } from 'react-router-dom';
import type MovieProps from './MovieProps';
import Fade from '../Fade';
import Poster from '../Poster';
import Rating from '../Rating';
import ReleaseDate from '../ReleaseDate';

function Movie({ movie }: MovieProps) {
  return (
    <Fade>
      <li>
        <Link className="block space-y-2" to={`/movie/${movie.id}`}>
          <Poster movie={movie} />
          <h2>{movie.title}</h2>
          <div className="flex gap-2">
            <Rating movie={movie} />
            <ReleaseDate movie={movie} />
          </div>
        </Link>
      </li>
    </Fade>
  );
}

export default Movie;
