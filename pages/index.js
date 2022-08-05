import Head from 'next/head';
import Socials from '../components/Socials';
import Heading from '../components/Heading';
import styles from '../styles/Home.module.scss';

export const getStaticProps = async () => {
  try {
    const res = await fetch(`${process.env.API_HOST}/socials/`);
    const data = await res.json();
    return data
      ? {
          props: { socials: data }, //возвращает объект для использования в компоненте ниже
        }
      : {
          notFound: true,
        };
  } catch (error) {
    return {
      notFound: true,
    };
  }
};

//получили socials из api/socials и передали в компонент
export default function Home({ socials }) {
  console.log(socials);
  return (
    <div className={styles.wrapper}>
      <Head>
        <title>Home</title>
      </Head>
      <Heading text="Next app!" />
      <Socials socials={socials} />
    </div>
  );
}
