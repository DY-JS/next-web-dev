import Heading from './Heading';

const PostInfo = ({ post }) => {
  const { title, body } = post || {};

  if (!post) {
    return <Heading tag="h3" text="Empty contact" />;
  }

  return (
    <>
      <Heading tag="h3" text={title} />
      <div>
        <strong>Post: </strong>
        {body}
      </div>
    </>
  );
};

export default PostInfo;
