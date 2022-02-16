import { useQuery } from 'react-query';
import { axios } from '../lib';

const useMovie = (id: string) =>
  useQuery(['movie', id], async () => {
    const movie = await axios.get(`/movie/${id}`);

    return movie;
  });

export default useMovie;
