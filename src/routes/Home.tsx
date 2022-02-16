import React from 'react';
import { usePopularMovies } from '../hooks';
import { Loader, Movies } from '../components';

function Home() {
  const { isLoading, data } = usePopularMovies();

  if (isLoading) return <Loader />;

  if (!data) return null;

  return (
    <>
      <h1>Popular Movies</h1>
      <Movies movies={data.results} />
    </>
  );
}

export default Home;
