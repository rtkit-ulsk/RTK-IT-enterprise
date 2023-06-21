import '../styles/global.css';

import ThemeProvider from 'components/ThemeProvider/ThemeProvider';
import { AppProps } from 'next/app';

const MyApp = (props: AppProps) => {
  const { Component, pageProps } = props;
  return (
    <ThemeProvider>
      <div>
        <Component {...pageProps} />
      </div>
    </ThemeProvider>
  );
};

export default MyApp;
