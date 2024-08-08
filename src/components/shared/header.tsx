"use client";

import React from "react";
import logo from "@/assets/pngs/Logo.png";
import Image from "next/image";
import Link from "next/link";
import { Button } from "../ui/button";
import SearchIcon from "@/assets/search";
import NotificationIcon from "@/assets/notification";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";
import MenuIcon from "@/assets/svgs/menu";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

function Header() {
  const pathname = usePathname();
  return (
    <header className="fixed z-50 w-full bg-Black-60 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-50">
      <nav className="flex py-2 justify-between items-center card px-5 md:px-0">
        <Link href="/">
          <Image src={logo} alt="logo" width={150} />
        </Link>
        <div className="hidden items-center gap-4 bg-Black-45 p-1 rounded-xl border-2 border-Black-90 md:flex">
          {[
            { name: "Home", path: "/" },
            { name: "Movies & Shows", path: "/movies" },
            { name: "Support", path: "/support" },
            { name: "Subscriptions", path: "/subscriptions" },
          ].map((link) => (
            <Link
              key={link.name}
              href={link.path}
              className={cn(
                "p-3 rounded-lg hover:bg-Black-60",
                pathname === link.path ? "bg-Black-60" : ""
              )}
            >
              {link.name}
            </Link>
          ))}
        </div>
        <div className="flex gap-2 items-center md:gap-4">
          <Button size="icon" variant="ghost">
            <SearchIcon />
          </Button>
          <Button size="icon" variant="ghost">
            <NotificationIcon />
          </Button>

          <Dialog>
            <DialogTrigger asChild>
              <Button size="icon" variant="ghost" className="md:hidden">
                <MenuIcon />
              </Button>
            </DialogTrigger>
            <DialogContent className="w-full h-full bg-Black-60 border-0">
              <DialogHeader>
                <DialogTitle></DialogTitle>
              </DialogHeader>
              <div className="items-center gap-4 -mt-[40rem] flex flex-col justify-center">
                {[
                  { name: "Home", path: "/" },
                  { name: "Movies & Shows", path: "/movies" },
                  { name: "Support", path: "/support" },
                  { name: "Subscriptions", path: "/subscriptions" },
                ].map((link) => (
                  <Link
                    key={link.name}
                    href={link.path}
                    className={cn(
                      "p-3 rounded-lg hover:bg-Black-60",
                      pathname === link.path ? "text-Black-99" : ""
                    )}
                  >
                    <DialogClose>{link.name}</DialogClose>
                  </Link>
                ))}
              </div>
            </DialogContent>
          </Dialog>
        </div>
      </nav>
    </header>
  );
}

export default Header;
