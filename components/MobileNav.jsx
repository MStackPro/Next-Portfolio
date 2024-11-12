"use client"

import React, { useState } from "react";
import { CiMenuBurger } from "react-icons/ci";
import { IoIosArrowRoundBack } from "react-icons/io";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { Box } from "@mui/material";
import { List } from "@mui/material";
import { SwipeableDrawer } from "@mui/material";
import { IconButton } from "@mui/material";

const links = [
  { name: "home", path: "/" },
  { name: "services", path: "#services" },
  { name: "resume", path: "#resume" },
  { name: "work", path: "#work" },
  { name: "contact", path: "#contact" },
];

export default function MobileNav() {
  const pathname = usePathname();
  const [drawerOpen, setDrawerOpen] = useState(false);

  const toggleDrawer = (open) => (event) => {
    if (
      event &&
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setDrawerOpen(open);
  };

  const drawerList = () => (
    <Box
      sx={{ width: 250 }}
      role="presentation"
      onClick={toggleDrawer(false)}
      onKeyDown={toggleDrawer(false)}
      className="flex justify-center items-center flex-col gap-10"
    >
      <IconButton onClick={toggleDrawer(false)} className="mr-40 mt-4">
        <IoIosArrowRoundBack className="text-4xl text-accent" />
      </IconButton>

      <List>
        {/* NAV */}
        <nav className="flex flex-col justify-center items-center gap-4 mt-28">
          {links.map((link, index) => {
            return (
              <Link
                href={link.path}
                key={index}
                className={`${
                  link.path === pathname &&
                  "text-accent border-b-2 border-accent"
                } capitalize hover:text-accent text-sm transition-all duration-500 ease-in-out text-white underline-hover`}
              >
                {link.name}
              </Link>
            );
          })}
        </nav>
      </List>
    </Box>
  );

  return (
    <section>
      <IconButton edge="end" aria-label="menu" onClick={toggleDrawer(true)}>
        <CiMenuBurger className="text-accent text-3xl mr-3" />
      </IconButton>

      <SwipeableDrawer
        anchor="right"
        open={drawerOpen}
        onClose={toggleDrawer(false)}
        onOpen={toggleDrawer(true)}
        PaperProps={{ style: { backgroundColor: "#1c1c22" } }}
      >
        {drawerList()}
      </SwipeableDrawer>
    </section>
  );
}
