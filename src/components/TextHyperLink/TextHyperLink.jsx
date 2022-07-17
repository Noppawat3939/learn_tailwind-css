const TextHyperLink = (props) => {
  const { href, styles, text } = props;

  return (
    <a href={href} target="_blank" rel="noopener noreferrer" className={styles}>
      {text}
    </a>
  );
};

export default TextHyperLink;
