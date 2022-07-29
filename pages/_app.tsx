import { Provider } from 'react-redux';
import store from 'utils/store';
import Head from 'next/head';
import type { AppProps } from 'next/app';

import 'styles/globals.css';



function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
     <Head>
      <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossOrigin="anonymous"/>
     </Head>
     <Component {...pageProps} />
    </Provider>
  );
}

export default MyApp;
