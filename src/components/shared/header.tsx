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

function Header() {
  const pathname = usePathname();
  return (
    <header className="fixed z-50 w-full bg-Black-60 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-50">
      <nav className="flex py-2 justify-between items-center max-w-7xl mx-auto">
        <div>
          <Image src={logo} alt="logo" width={150} />
        </div>
        <div className="flex items-center gap-4 bg-Black-45 p-1 rounded-xl border-2 border-Black-90">
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
        <div className="flex gap-4 items-center">
          <Button size="icon" variant="ghost">
            <SearchIcon />
          </Button>
          <Button size="icon" variant="ghost">
            <NotificationIcon />
          </Button>
        </div>
      </nav>
    </header>
  );
}

export default Header;
