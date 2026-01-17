import React from 'react';
import { createRoot } from 'react-dom/client';
import './tailwind.css';
import './index.css';
import App from './App';
import { PersistQueryClientProvider } from '@tanstack/react-query-persist-client';
import { queryClient, persister, clearQueryCache } from './lib/query-client';
import { ThemeProvider } from '@/components/theme-provider';

const Index = () => {
  return (
    <React.StrictMode>
      <PersistQueryClientProvider client={queryClient} persistOptions={{ persister }}>
        <ThemeProvider defaultTheme="system" storageKey="vite-ui-theme">
          <App clearCache={clearQueryCache} />
        </ThemeProvider>
      </PersistQueryClientProvider>
    </React.StrictMode>
  );
};

const root = createRoot(document.getElementById('root') as HTMLElement);
root.render(<Index />);
