import Head from 'next/head';
import Header from './Header';
import Footer from './Footer';

const Layout = ({ children }) => {
  return (
    <>
      <Head>
        <title>Contact</title>
      </Head>
      <Header />
      {children}
      <Footer />
    </>
  );
};

export default Layout;
