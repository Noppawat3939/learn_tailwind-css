import { useId } from "react";
import { TextLink } from "../../components";

const Sidebar = (props) => {
  const { styles, onClick } = props;

  const listLink = [
    {
      to: "/",
      label: "Home",
    },
    {
      to: "/about",
      label: "About",
    },
    {
      to: "/store",
      label: "Store",
    },
  ];

  return (
    <aside className={styles}>
      <ul className="flex flex-col items-center justify-center h-full gap-10">
        {listLink.map((list) => (
          <TextLink
            to={list.to}
            key={useId()}
            text={list.label}
            onClick={onClick}
            styles="text-white text-lg tracking-[5px] hover:opacity-70 transition-all"
          />
        ))}
      </ul>
    </aside>
  );
};

export default Sidebar;
