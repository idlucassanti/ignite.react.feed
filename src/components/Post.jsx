export function Post(props) {
  return (
    <div>
      <section>{props.content}</section>
      <strong>{props.author}</strong>
    </div>
  );
}