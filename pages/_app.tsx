import '../styles/global.css';
import 'styles/variables.css';
import '@design-system-rt/rtk-fonts';

import { AppProps } from 'next/app';
import ThemeProvider from 'src/app/lib/ThemeProvider/ThemeProvider';

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
