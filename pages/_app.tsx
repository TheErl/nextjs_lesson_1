import { Provider as ReduxProvider } from 'react-redux';
import store from 'utils/store';
import Head from 'next/head';
import type { AppProps } from 'next/app';
import CssBaseline from '@mui/material/CssBaseline';
import 'styles/globals.css';
import ThemeContext from 'components/ThemeContext';
function MyApp({ Component, pageProps }: AppProps) {

  return (
      <ReduxProvider store={store}>    
      <ThemeContext>
          <Head>
            <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossOrigin="anonymous"/>
          </Head>
          <>
          <CssBaseline />
          <Component {...pageProps}/>
          </>
        </ThemeContext>    
      </ReduxProvider>
  );
}

export default MyApp;
