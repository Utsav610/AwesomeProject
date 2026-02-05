import {
  QUERY_RETRY_COUNT,
  QUERY_GC_TIME,
  QUERY_STALE_TIME,
  QUERY_REFETCH_ON_WINDOW_FOCUS,
  QUERY_MUTATION_RETRY_COUNT,
} from '@constants/index';
import { QueryClient } from '@tanstack/react-query';

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: QUERY_RETRY_COUNT,
      staleTime: QUERY_STALE_TIME,
      gcTime: QUERY_GC_TIME,
      refetchOnWindowFocus: QUERY_REFETCH_ON_WINDOW_FOCUS,
    },
    mutations: {
      retry: QUERY_MUTATION_RETRY_COUNT,
    },
  },
});
