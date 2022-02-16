import { useQuery } from 'react-query';
import type { AxiosResponse, AxiosError } from 'axios';
import type { Movies } from '../types';
import { axios } from '../lib';

const usePopularMovies = () =>
  useQuery<AxiosResponse<Movies>, AxiosError, Movies>(
    'movies',
    async () => {
      const data = await axios.get('/movie/popular');

      return data;
    },
    {
      select: (data) => data.data,
    }
  );

export default usePopularMovies;
