import React, { useCallback, useEffect, useState } from 'react';
// @ts-ignore React 18
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { ApolloClient, ApolloProvider, InMemoryCache, NormalizedCacheObject } from '@apollo/client';
import { BrowserRouter } from 'react-router-dom';
import { LocalStorageWrapper, CachePersistor } from 'apollo3-cache-persist';

const Index = () => {
  const [client, setClient] = useState<ApolloClient<NormalizedCacheObject>>();
  const [persistor, setPersistor] = useState<CachePersistor<NormalizedCacheObject>>();

  useEffect(() => {
    async function init() {
      const cache = new InMemoryCache();
      let newPersistor = new CachePersistor({
        cache,
        storage: new LocalStorageWrapper(window.localStorage),
        debug: true,
        trigger: 'write',
      });
      await newPersistor.restore();
      setPersistor(newPersistor);
      setClient(
        new ApolloClient({
          uri: 'https://graphql.anilist.co',
          cache,
        })
      );
    }

    init().catch(console.error);
  }, []);

  const clearCache = useCallback(() => {
    if (!persistor) {
      return Promise.resolve();
    }
    return persistor.purge();
  }, [persistor]);

  if (!client) {
    return null;
  }

  return (
    <React.StrictMode>
      <BrowserRouter>
        <ApolloProvider client={client}>
          <App clearCache={clearCache} />
        </ApolloProvider>
      </BrowserRouter>
    </React.StrictMode>
  );
};

const container = document.getElementById('root');
const root = createRoot(container);

root.render(<Index />);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
