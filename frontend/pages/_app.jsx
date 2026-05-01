import '../styles/globals.css';
import { useEffect } from 'react';
import { useRouter } from 'next/router';

function MyApp({ Component, pageProps }) {
  const router = useRouter();
  useEffect(() => {
    const isLoggedIn = localStorage.getItem('isLoggedIn');
    if (!isLoggedIn && router.pathname !== '/login') {
      router.push('/login');
    }
  }, [router.pathname]);
  return <Component {...pageProps} />;
}

export default MyApp;
