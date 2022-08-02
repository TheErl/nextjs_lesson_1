import { useState } from 'react';
import { Provider as ReduxProvider } from 'react-redux';
import store from 'utils/store';
import Head from 'next/head';
import type { AppProps } from 'next/app';
import { Provider } from 'utils/theme';
import { Theme } from 'types/theme';

import 'styles/globals.css';



function MyApp({ Component, pageProps }: AppProps) {
  
  const [theme, setTheme] = useState<Theme>('light');

  const handleChangeTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  return (
    <Provider value={theme}>
      <ReduxProvider store={store}>
      <Head>
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossOrigin="anonymous"/>
      </Head>
      <>
      <button onClick={handleChangeTheme}>Change theme</button>
      <Component {...pageProps} />
      </>
      </ReduxProvider>
    </Provider>
  );
}

export default MyApp;
