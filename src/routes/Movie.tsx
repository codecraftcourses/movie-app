import React from 'react';
import { useParams } from 'react-router-dom';
import { useMovie } from '../hooks';
import {
  Loader,
  Poster,
  Rating,
  ReleaseDate,
  Genres,
  Runtime,
} from '../components';

function Movie() {
  const { id } = useParams();
  const { isLoading, data } = useMovie(id!);

  if (isLoading) return <Loader />;

  if (!data) return null;

  return (
    <div className="grid grid-cols-1 gap-4 md:grid-cols-[20rem,1fr]">
      <Poster movie={data} />
      <div className="space-y-4">
        <h1>{data.title}</h1>
        <div className="flex flex-wrap gap-2">
          <Rating movie={data} />
          <ReleaseDate movie={data} />
          <Genres movie={data} />
          <Runtime movie={data} />
        </div>
        <div className="space-y-2">
          <h2>Overview</h2>
          <p>{data.overview}</p>
        </div>
      </div>
    </div>
  );
}

export default Movie;
