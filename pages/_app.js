import Head from 'next/head';
import Layout from '../components/Layout';
import Image from 'next/image';
import earthImg from '../public/earth.png';
import '../styles/globals.scss';

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:wght@300&display=swap"
          rel="stylesheet"
        />
      </Head>
      <main>
        <Component {...pageProps} />
      </main>
      {/* <Image
        src={earthImg}
        width={500}
        height={300}
        alt="earth"
        placeholder="blur" 
      /> */}
    </Layout>
  );
}

//placeholder="blur" - будет размыто пока грузится картинка
export default MyApp;
