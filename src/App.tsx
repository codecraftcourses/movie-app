import React from 'react';
import { Outlet } from 'react-router-dom';
import { useConfiguration } from './hooks';

function App() {
  const { isLoading, data } = useConfiguration();

  if (isLoading || !data) return null;

  return <Outlet />;
}

export default App;
