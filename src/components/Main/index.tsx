import React from 'react';
import classNames from 'classnames';
import type MainProps from './MainProps';

function Main({ className, children }: MainProps) {
  return (
    <main className={classNames('space-y-4 p-4 md:p-8', className)}>
      {children}
    </main>
  );
}

export default Main;
