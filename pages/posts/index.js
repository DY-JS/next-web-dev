import Head from 'next/head';
import Link from 'next/link';
import Heading from '../../components/Heading';

//через getStaticProps получаем данные на сервере, а не на клиенте
//заменяет логику получения данных в useEffect
export const getStaticProps = async () => {
  try {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts');
    const data = await res.json();
    return data
      ? {
          props: { posts: data }, //возвращает объект для использования в компоненте ниже
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
//notFound: true - если ответ от сервера не получен перекинет на страницу 404
const Posts = ({ posts }) => {
  return (
    <>
      <Head>
        <title>Posts</title>
      </Head>
      <Heading text="Posts List:" />
      <ul>
        {posts &&
          posts.map(({ id, title }) => (
            <li key={id}>
              <Link href={`posts/${id}`}>
                <strong>{title}</strong>
              </Link>
            </li>
          ))}
      </ul>
    </>
  );
};
export default Posts;
