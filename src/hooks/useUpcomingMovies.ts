import { useInfiniteQuery } from 'react-query';
import type { AxiosResponse, AxiosError } from 'axios';
import type { Movies } from '../types';
import { axios } from '../lib';

const useUpcomingMovies = () =>
  useInfiniteQuery<AxiosResponse<Movies>, AxiosError>(
    'upcoming-movies',
    async ({ pageParam = 1 }) => {
      const data = await axios.get('/movie/upcoming', {
        params: {
          page: pageParam,
        },
      });

      return data;
    },
    {
      getNextPageParam: (lastPage) =>
        lastPage.data.page === lastPage.data.total_pages
          ? undefined
          : lastPage.data.page + 1,
    }
  );

export default useUpcomingMovies;
