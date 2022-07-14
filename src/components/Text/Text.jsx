const Text = (props) => {
  const { text, styles } = props;
  return <span className={styles}>{text}</span>;
};

export default Text;
