import React from 'react';
import { useResolvedPath, useMatch, Link } from 'react-router-dom';
import classNames from 'classnames';
import type NavigationItemProps from './NavigationItemProps';

function NavigationItem({ item }: NavigationItemProps) {
  const path = useResolvedPath(item.href);
  const isActive = useMatch({
    path: path.pathname,
    end: true,
  });

  return (
    <li>
      <Link
        className={classNames(
          'whitespace-nowrap text-2xl font-semibold focus:outline-none',
          {
            'text-zinc-400': !isActive,
          }
        )}
        to={item.href}
      >
        {item.title}
      </Link>
    </li>
  );
}

export default NavigationItem;
