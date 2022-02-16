import React from 'react';
import Navigation from '../Navigation';

function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-10 bg-zinc-900">
      <div className="p-4 md:p-8">
        <Navigation
          items={[
            {
              title: 'Popular',
              href: '/movies/popular',
            },
            {
              title: 'Top Rated',
              href: '/movies/top-rated',
            },
            {
              title: 'Now Playing',
              href: '/movies/now-playing',
            },
            {
              title: 'Upcoming',
              href: '/movies/upcoming',
            },
          ]}
        />
      </div>
    </header>
  );
}

export default Header;
