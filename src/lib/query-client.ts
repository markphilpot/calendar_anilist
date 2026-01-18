import { QueryClient } from '@tanstack/react-query';
import { createAsyncStoragePersister } from '@tanstack/query-async-storage-persister';

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 1000 * 60 * 5, // 5 minutes
      gcTime: 1000 * 60 * 60 * 24, // 24 hours (formerly cacheTime)
    },
  },
});

export const persister = createAsyncStoragePersister({
  storage: window.localStorage,
  key: 'calendar-anilist-cache',
});

export const clearQueryCache = async () => {
  queryClient.clear();
  localStorage.removeItem('calendar-anilist-cache');
};
