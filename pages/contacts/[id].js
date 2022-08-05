import Head from 'next/head';
import ContactInfo from '../../components/ContactInfo';

export const getServerSideProps = async (context) => {
  const { id } = context.query;
  //  const {id} = context.params;  то же самое  что и context.query
  try {
    const res = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
    const data = await res.json();

    return data
      ? {
          props: { contact: data }, //возвращает объект для использования в компоненте ниже
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

const Contact = ({ contact }) => {
  return (
    <>
      <Head>
        <title>Contact</title>
      </Head>
      <ContactInfo contact={contact} />
    </>
  );
};

export default Contact;
