const DEFAULT = { TITLE: "Button is Here" };

const Button = (props) => {
  const { title = DEFAULT.TITLE, styles, onClick } = props;

  return (
    <button className={styles} onClick={onClick}>
      {title}
    </button>
  );
};

export default Button;
