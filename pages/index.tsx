import Head from 'next/head';
import { HomePage } from 'src/pages/home';

const Index = () => {
  return (
    <>
      <Head>
        <meta property="og:url" content="https://github.com/rtkit-ulsk/next-enterprise" />
        <meta
          property="og:image"
          content="https://raw.githubusercontent.com/Blazity/next-enterprise/main/project-logo.png"
        />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <title>Next.js RTK IT Boilerplate</title>
      </Head>
      <section>
        <HomePage />
      </section>
    </>
  );
};

export default Index;
