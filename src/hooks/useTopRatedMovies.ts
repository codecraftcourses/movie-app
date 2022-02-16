import { useQuery } from 'react-query';
import type { AxiosResponse, AxiosError } from 'axios';
import type { Movies } from '../types';
import { axios } from '../lib';

const useTopRatedMovies = () =>
  useQuery<AxiosResponse<Movies>, AxiosError, Movies>(
    'top-rated-movies',
    async () => {
      const data = await axios.get('/movie/top_rated');

      return data;
    },
    {
      select: (data) => data.data,
    }
  );

export default useTopRatedMovies;
