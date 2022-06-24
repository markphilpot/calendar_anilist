import React, { useCallback, useEffect, useState } from 'react';
import { createRoot } from 'react-dom/client';
import './tailwind.css';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { ApolloClient, ApolloProvider, InMemoryCache, NormalizedCacheObject } from '@apollo/client';
import { BrowserRouter } from 'react-router-dom';
import { LocalStorageWrapper, CachePersistor } from 'apollo3-cache-persist';
import { useWatchColorScheme, ThemeContext } from './context/theme';

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

  const colorScheme = useWatchColorScheme();

  if (!client) {
    return null;
  }

  return (
    <React.StrictMode>
      <BrowserRouter>
        <ApolloProvider client={client}>
          <ThemeContext.Provider value={colorScheme}>
            <App clearCache={clearCache} />
          </ThemeContext.Provider>
        </ApolloProvider>
      </BrowserRouter>
    </React.StrictMode>
  );
};

const root = createRoot(document.getElementById('root') as HTMLElement);
root.render(<Index />);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
