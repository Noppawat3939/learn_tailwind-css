import { useId } from "react";
import { TextLink } from "../../components";

const Sidebar = () => {
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
    <aside className="bg-[rgba(0,0,0,.5)] fixed right-0 top-0 h-full w-80 ">
      <ul className="flex flex-col items-center justify-center h-full gap-10">
        {listLink.map((list) => (
          <TextLink
            to={list.to}
            key={useId()}
            text={list.label}
            styles="text-white text-lg tracking-[5px] hover:opacity-70 transition-all"
          />
        ))}
      </ul>
    </aside>
  );
};

export default Sidebar;
