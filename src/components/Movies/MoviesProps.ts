import type { AxiosResponse } from 'axios';
import type { Movies } from '../../types';

type MoviesProps = {
  loading: boolean;
  hasNextPage: boolean;
  onLoadMore: () => void;
  pages: AxiosResponse<Movies>[];
};

export default MoviesProps;
