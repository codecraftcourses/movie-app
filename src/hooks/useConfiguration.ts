import { useQuery } from 'react-query';
import type { AxiosResponse, AxiosError } from 'axios';
import type { Configuration } from '../types';
import { axios } from '../lib';

const useConfiguration = () =>
  useQuery<AxiosResponse<Configuration>, AxiosError, Configuration>(
    'configuration',
    async () => {
      const data = await axios.get('/configuration');

      return data;
    },
    {
      select: (data) => data.data,
    }
  );

export default useConfiguration;
