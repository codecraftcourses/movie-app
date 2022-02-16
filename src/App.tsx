import React from 'react';
import { Outlet } from 'react-router-dom';
import { useConfiguration } from './hooks';
import { Loader, Main } from './components';

function App() {
  const { data, isLoading } = useConfiguration();

  if (!data) return null;

  return <Main>{isLoading ? <Loader /> : <Outlet />}</Main>;
}

export default App;
