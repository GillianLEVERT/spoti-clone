"use client";
import React, { useMemo } from "react";
import { usePathname } from "next/navigation";
//icons
import { HiHome } from "react-icons/hi";
import { BiSearch } from "react-icons/bi";
//components
import { Box } from "./Box";
import { SidebarItem } from "./SidebarItem";
import { Library } from "./Library";

interface SidebarProps {
  children: React.ReactNode;
}

export const Sidebar: React.FC<SidebarProps> = ({ children }) => {
  const pathname = usePathname();
  const routes = useMemo(
    () => [
      {
        icon: HiHome,
        label: "Home",
        active: pathname !== "/search",
        href: "/",
      },
      {
        icon: BiSearch,
        label: "Search",
        active: pathname === "/search",
        href: "/search",
      },
    ],
    []
  );

  return (
    <main className="flex h-full p-1">
      <div className="hidden md:flex flex-col gap-y-2 bg-[#123] h-full w-[300px] p-2">
        <Box>
          <div className="flex flex-col gap-y-4 px-5 py-4 ">
            {routes.map((item) => (
              <SidebarItem key={item.label} {...item} />
            ))}
          </div>
        </Box>
        <Box className="overflow-y-auto h-full ">
          <Library />
        </Box>
      </div>
      <div className="h-full flex-1 overflow-y-auto py-2">{children}</div>
    </main>
  );
};
