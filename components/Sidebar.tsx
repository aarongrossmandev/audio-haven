"use client";
import { FC, useMemo } from "react";
import { usePathname } from "next/navigation";
import { HiHome } from "react-icons/hi";
import { BiSearch } from "react-icons/bi";
import Box from "./Box";
import SidebarItem from "./SidebarItem";
import Library from "./Library";

interface SidebarProps {
  children: React.ReactNode;
}

const Sidebar: FC<SidebarProps> = ({ children }) => {
  const pathname = usePathname();

  const routes = useMemo(
    () => [
      {
        icon: HiHome,
        label: "Home",
        active: pathname === "/",
        href: "/",
      },
      {
        icon: BiSearch,
        label: "Search",
        active: pathname === "search",
        href: "/search",
      },
    ],
    [pathname]
  );
  return (
    <div className="flex h-full">
      <nav className="hidden md:flex flex-col gap-y-2 bg-black h-full w-[300px] p-2">
        <Box>
          <ul className="flex flex-col gap-y-4 px-5 py-4">
            {routes.map((item) => (
              <SidebarItem key={item.label} {...item} />
            ))}
          </ul>
        </Box>
        <Box className="overflow-y-auto h-full">
          <Library />
        </Box>
      </nav>
      <main className="h-full flex-1 overflow-y-auto py-2">{children}</main>
    </div>
  );
};

export default Sidebar;
