import { useQuery } from 'react-query';
import type { AxiosResponse, AxiosError } from 'axios';
import type { Movies } from '../types';
import { axios } from '../lib';

const useNowPlayingMovies = () =>
  useQuery<AxiosResponse<Movies>, AxiosError, Movies>(
    'now-playing-movies',
    async () => {
      const data = await axios.get('/movie/now_playing');

      return data;
    },
    {
      select: (data) => data.data,
    }
  );

export default useNowPlayingMovies;
