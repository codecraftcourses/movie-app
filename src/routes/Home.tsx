import React from 'react';
import { usePopularMovies } from '../hooks';
import { Movies } from '../components';

function Home() {
  const { data } = usePopularMovies();

  if (!data) return null;

  return (
    <>
      <h1>Popular Movies</h1>
      <Movies movies={data.data.results} />
    </>
  );
}

export default Home;
