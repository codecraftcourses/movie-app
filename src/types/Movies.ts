import type Movie from './Movie';

type Movies = {
  page: number;
  results: Movie[];
  total_pages: number;
};

export default Movies;
