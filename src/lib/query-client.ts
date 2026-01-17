import { QueryClient } from '@tanstack/react-query';
import { createSyncStoragePersister } from '@tanstack/query-sync-storage-persister';

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 1000 * 60 * 5, // 5 minutes
      gcTime: 1000 * 60 * 60 * 24, // 24 hours (formerly cacheTime)
    },
  },
});

export const persister = createSyncStoragePersister({
  storage: window.localStorage,
  key: 'calendar-anilist-cache',
});

export const clearQueryCache = async () => {
  queryClient.clear();
  localStorage.removeItem('calendar-anilist-cache');
};
