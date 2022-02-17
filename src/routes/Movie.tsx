import React from 'react';
import { useParams } from 'react-router-dom';
import { useMovie } from '../hooks';
import {
  Main,
  Fade,
  Poster,
  Rating,
  ReleaseDate,
  Genres,
  Runtime,
  Button,
} from '../components';

function Movie() {
  const { id } = useParams();
  const { isLoading, data } = useMovie(id!);

  if (isLoading || !data) return null;

  return (
    <Main>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-[20rem,1fr] md:gap-8">
        <Fade>
          <Poster movie={data} />
        </Fade>
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
          <Button href={data.homepage} icon="external-link">
            Go to Website
          </Button>
        </div>
      </div>
    </Main>
  );
}

export default Movie;
