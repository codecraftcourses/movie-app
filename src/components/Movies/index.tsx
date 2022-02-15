import React from 'react';
import type MoviesProps from './MoviesProps';
import Movie from '../Movie';

function Movies({ movies }: MoviesProps) {
  return (
    <ul className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
      {movies.map((movie) => (
        <Movie movie={movie} key={movie.id} />
      ))}
    </ul>
  );
}

export default Movies;
