import { Button } from 'components/Button/Button';
import { useTheme } from 'components/ThemeProvider/useTheme';
import Head from 'next/head';

const Index = () => {
  const { theme, themeToggler } = useTheme();
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
        <h2>Текущая цветовая тема: {theme}</h2>
        <Button onClick={themeToggler}>Сменить тему</Button>
      </section>
    </>
  );
};

export default Index;
