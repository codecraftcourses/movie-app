import { useQuery } from 'react-query';
import type { AxiosResponse, AxiosError } from 'axios';
import type { Movie } from '../types';
import { axios } from '../lib';

const useMovie = (id: string) =>
  useQuery<AxiosResponse<Movie>, AxiosError, Movie>(
    ['movie', id],
    async () => {
      const data = await axios.get(`/movie/${id}`);

      return data;
    },
    {
      select: (data) => data.data,
    }
  );

export default useMovie;
