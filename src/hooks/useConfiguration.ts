import { useQuery } from 'react-query';
import { axios } from '../lib';

const useConfiguration = () =>
  useQuery('configuration', async () => {
    const config = await axios.get('/configuration');

    return config;
  });

export default useConfiguration;
