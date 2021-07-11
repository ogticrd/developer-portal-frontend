import '../styles/globals.css';
import 'tailwindcss/tailwind.css';
import type { AppProps } from 'next/app';
import Layout from '../components/layout.component';
import LanguageProvider from '../context/language.context';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <LanguageProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </LanguageProvider>
  );
}
export default MyApp;
