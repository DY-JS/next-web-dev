import Heading from './Heading';

const ContactInfo = ({ contact }) => {
  const { name, email, address } = contact || {};
  const { street, suite, city, zipcode } = address || {};
  console.log(email, street);
  if (!contact || !address) {
    return <Heading tag="h3" text="Empty contact" />;
  }

  return (
    <>
      <Heading tag="h3" text={name} />
      <div>
        <strong>Email:</strong>
        {email}
      </div>
      <div>
        <strong>Address: </strong>
        {`${street}, ${suite}, ${zipcode}, ${city}`}
      </div>
    </>
  );
};

export default ContactInfo;
