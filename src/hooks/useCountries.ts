import { useQuery, useQueryClient } from 'react-query';
import { Countries } from 'types';
import { getAllCountries } from '../api';

const staleTime = 1000 * 60 * 60;

function useCountries() {
  const queryClient = useQueryClient();
  const result = useQuery<Countries | null, Error>(
    'countries',
    getAllCountries,
    {
      retry: 1,
      staleTime,
      initialData: () => queryClient.getQueryData('countries'),
    },
  );

  return { ...result, countries: result.data };
}

export { useCountries };
