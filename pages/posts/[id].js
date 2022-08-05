import Head from 'next/head';
import PostInfo from '../../components/PostInfo';

//getStaticPaths позволяет сгенерировать множество страниц на сервере по id
export const getStaticPaths = async () => {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts`);
  const data = await res.json();

  const paths = data.map(({ id }) => ({
    params: { id: id.toString() },
  }));

  return {
    paths,
    fallback: false, // на 404 если ошибка
  };
};

export const getStaticProps = async (context) => {
  const { id } = context.params; //context.query

  try {
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
    const data = await res.json();
    return data
      ? {
          props: { post: data }, //возвращает объект для использования в компоненте ниже
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

const Post = ({ post }) => {
  return (
    <>
      <Head>
        <title>Post</title>
      </Head>
      <PostInfo post={post} />
    </>
  );
};

export default Post;
