import React, { Fragment } from 'react';
import useInfiniteScroll from 'react-infinite-scroll-hook';
import type MoviesProps from './MoviesProps';
import Movie from '../Movie';
import Loader from '../Loader';

function Movies({ loading, hasNextPage, onLoadMore, pages }: MoviesProps) {
  const [sentryRef] = useInfiniteScroll({
    loading,
    hasNextPage,
    onLoadMore,
    rootMargin: '0px 0px 25% 0px',
  });

  return (
    <ul className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
      {pages.map((page) => (
        <Fragment key={page.data.page}>
          {page.data.results.map((movie) => (
            <Movie movie={movie} key={movie.id} />
          ))}
        </Fragment>
      ))}
      {(loading || hasNextPage) && (
        <li ref={sentryRef}>
          <Loader />
        </li>
      )}
    </ul>
  );
}

export default Movies;
