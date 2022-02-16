import { useQuery } from 'react-query';
import type { AxiosResponse, AxiosError } from 'axios';
import type { Movies } from '../types';
import { axios } from '../lib';

const useUpcomingMovies = () =>
  useQuery<AxiosResponse<Movies>, AxiosError, Movies>(
    'upcoming-movies',
    async () => {
      const data = await axios.get('/movie/upcoming');

      return data;
    },
    {
      select: (data) => data.data,
    }
  );

export default useUpcomingMovies;
