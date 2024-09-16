function Link(props) {
  const { href, text } = props;
  return (
    <a href={href} target="_blank">
      {text}
    </a>
  );
}

export default Link;
