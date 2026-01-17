import React from 'react';
import { createRoot } from 'react-dom/client';
import './tailwind.css';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { QueryClientProvider } from '@tanstack/react-query';
import { PersistQueryClientProvider } from '@tanstack/react-query-persist-client';
import { queryClient, persister, clearQueryCache } from './lib/query-client';

const Index = () => {
  return (
    <React.StrictMode>
      <BrowserRouter>
        <PersistQueryClientProvider
          client={queryClient}
          persistOptions={{ persister }}
        >
          <App clearCache={clearQueryCache} />
        </PersistQueryClientProvider>
      </BrowserRouter>
    </React.StrictMode>
  );
};

const root = createRoot(document.getElementById('root') as HTMLElement);
root.render(<Index />);
