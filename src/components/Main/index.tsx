import React from 'react';
import type MainProps from './MainProps';

function Main({ children }: MainProps) {
  return <main className="container space-y-4 py-4">{children}</main>;
}

export default Main;