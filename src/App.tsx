import React from 'react';
import { Outlet } from 'react-router-dom';
import { useConfiguration } from './hooks';
import { Main } from './components';

function App() {
  const { data } = useConfiguration();

  if (!data) return null;

  return (
    <Main>
      <Outlet />
    </Main>
  );
}

export default App;
