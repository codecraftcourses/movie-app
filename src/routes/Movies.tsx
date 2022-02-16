import React from 'react';
import { Outlet } from 'react-router-dom';
import { Main, Header } from '../components';

function Movies() {
  return (
    <>
      <Header />
      <Main className="mt-12 md:mt-16">
        <Outlet />
      </Main>
    </>
  );
}

export default Movies;
