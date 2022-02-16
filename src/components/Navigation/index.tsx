import React from 'react';
import type NavigationProps from './NavigationProps';
import NavigationItem from '../NavigationItem';

function Navigation({ items }: NavigationProps) {
  return (
    <nav>
      <ul className="scrollbar-hidden flex gap-4 overflow-x-auto">
        {items.map((item) => (
          <NavigationItem item={item} key={item.title} />
        ))}
      </ul>
    </nav>
  );
}

export default Navigation;
