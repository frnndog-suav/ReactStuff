// eslint-disable-next-line react/prop-types
export function Post({ author, content }) {
  return (
    <div>
      <h3>{author}</h3>
      <p>{content}</p>
    </div>
  );
}
