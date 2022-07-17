import { NavLink } from "react-router-dom";

const TextLink = (props) => {
  const { to, text, styles, onClick, ...otherProps } = props;

  return (
    <span className={styles}>
      <NavLink to={to} onClick={onClick} {...otherProps}>
        {text}
      </NavLink>
    </span>
  );
};

export default TextLink;
