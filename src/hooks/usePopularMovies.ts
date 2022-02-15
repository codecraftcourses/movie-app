import { useQuery } from 'react-query';
import { axios } from '../lib';

const usePopularMovies = () =>
  useQuery('movies', async () => {
    const movies = await axios.get('/movie/popular');

    return movies;
  });

export default usePopularMovies;
