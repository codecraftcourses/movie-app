import React from 'react';
import {
  Tabs,
  PopularMovies,
  TopRatedMovies,
  NowPlayingMovies,
  UpcomingMovies,
} from '../components';

function Home() {
  return (
    <Tabs
      tabs={[
        {
          title: 'Popular',
          content: <PopularMovies />,
        },
        {
          title: 'Top Rated',
          content: <TopRatedMovies />,
        },
        {
          title: 'Now Playing',
          content: <NowPlayingMovies />,
        },
        {
          title: 'Upcoming',
          content: <UpcomingMovies />,
        },
      ]}
    />
  );
}

export default Home;
