import React from 'react';
import { Outlet } from 'react-router-dom';
import { useConfiguration } from './hooks';
import { Main, Loader } from './components';

function App() {
  const { data, isLoading } = useConfiguration();

  if (!data) return null;

  return isLoading ? (
    <Main>
      <Loader />
    </Main>
  ) : (
    <Outlet />
  );
}

export default App;
