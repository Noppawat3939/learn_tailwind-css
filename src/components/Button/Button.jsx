const DEFAULT = { TITLE: "Button is Here" };

const Button = (props) => {
  const { title = DEFAULT.TITLE, styles } = props;

  return <button className={styles}>{title}</button>;
};

export default Button;
