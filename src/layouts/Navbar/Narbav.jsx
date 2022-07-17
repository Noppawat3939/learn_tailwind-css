import { useState } from "react";
import { Button, Text } from "../../components";
import { Close, Menu } from "../../icons";
import { Sidebar } from "../../layouts";

import { useStore } from "../Sidebar/Sidebar.store";

const Navbar = () => {
  const isOpenSidebar = useStore((state) => state.isOpenSidebar);
  const setIsOpenSidebar = useStore((state) => state.setIsOpenSidebar);

  return (
    <nav className="flex fixed top-0 w-full items-center justify-center py-4 px-20 ">
      <Text text="Logo" styles="text-5xl text-white font-bold" />
      <Button
        onClick={setIsOpenSidebar}
        title={isOpenSidebar ? <Close /> : <Menu />}
        styles="text-white fixed right-8 z-50 hover:opacity-60 transition-all"
      />
      {isOpenSidebar && (
        <Sidebar
          styles="bg-[rgba(0,0,0,.65)] fixed top-0 right-0 h-full w-80"
          onClick={setIsOpenSidebar}
        />
      )}
    </nav>
  );
};

export default Navbar;
