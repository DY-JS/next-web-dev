import Head from 'next/head';
import Link from 'next/link';
import Heading from '../../components/Heading';

//через getStaticProps получаем данные на сервере, а не на клиенте
//заменяет логику получения данных в useEffect
export const getStaticProps = async () => {
  try {
    const res = await fetch('https://jsonplaceholder.typicode.com/users');
    const data = await res.json();
    return data
      ? {
          props: { contacts: data }, //возвращает объект для использования в компоненте ниже
          revalidate: 10, //запрос отправляется каждые 10 сек
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
const Contacts = ({ contacts }) => {
  return (
    <>
      <Head>
        <title>Contacts</title>
      </Head>
      <Heading text="Contacts List:" />
      <ul>
        {contacts &&
          contacts.map(({ id, name, email }) => (
            <li key={id}>
              <Link href={`contacts/${id}`}>
                <strong>{name}</strong>
              </Link>
            </li>
          ))}
      </ul>
    </>
  );
};
export default Contacts;
