"use client";

import { usePathname } from "next/navigation";

const NavHeader = () => {
  const path = usePathname();

  return <span>{path === "/" ? "Home" : path.split("/")[1]}</span>;
};

export default NavHeader;
