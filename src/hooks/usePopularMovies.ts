import { useInfiniteQuery } from 'react-query';
import type { AxiosResponse, AxiosError } from 'axios';
import type { Movies } from '../types';
import { axios } from '../lib';

const usePopularMovies = () =>
  useInfiniteQuery<AxiosResponse<Movies>, AxiosError>(
    'popular-movies',
    async ({ pageParam = 1 }) => {
      const data = await axios.get('/movie/popular', {
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

export default usePopularMovies;
