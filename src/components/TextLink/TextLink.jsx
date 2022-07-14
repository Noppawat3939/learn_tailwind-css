import { NavLink } from "react-router-dom";

const TextLink = (props) => {
  const { to, text, styles } = props;

  return (
    <span className={styles}>
      <NavLink to={to}>{text}</NavLink>
    </span>
  );
};

export default TextLink;
