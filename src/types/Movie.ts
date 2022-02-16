import type Genre from './Genre';

type Movie = {
  id: number;
  title: string;
  poster_path: string;
  vote_average: number;
  release_date: string;
  genres: Genre[];
  runtime: number;
  overview: string;
};

export default Movie;
