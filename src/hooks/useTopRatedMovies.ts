import { useInfiniteQuery } from 'react-query';
import type { AxiosResponse, AxiosError } from 'axios';
import type { Movies } from '../types';
import { axios } from '../lib';

const useTopRatedMovies = () =>
  useInfiniteQuery<AxiosResponse<Movies>, AxiosError>(
    'top-rated-movies',
    async ({ pageParam = 1 }) => {
      const data = await axios.get('/movie/top_rated', {
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

export default useTopRatedMovies;
