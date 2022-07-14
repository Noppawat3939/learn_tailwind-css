import { useId } from "react";
import { Button, Text } from "../../components";
import { Menu } from "../../icons";
import Sidebar from "../Sidebar/Sidebar";

const Navbar = () => {
  return (
    <nav className="flex fixed top-0 w-full items-center justify-center py-4 px-20 ">
      <Text text="Logo" styles="text-5xl text-white font-bold" />
      <Button
        title={<Menu />}
        styles="text-white fixed right-8 z-50 hover:opacity-60 transition-all"
      />
      <Sidebar />
    </nav>
  );
};

export default Navbar;
