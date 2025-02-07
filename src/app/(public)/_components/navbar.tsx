"use client";
import { navbarLinks } from "@/constants";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { FC } from "react";

const Navbar: FC<React.HTMLAttributes<HTMLDivElement>> = (props) => {
  const pathname = usePathname();
  return (
    <nav className="hidden gap-6 md:flex">
      {navbarLinks.map((item, index) => {
        return (
          <Link
            key={index}
            href={item.link}
            prefetch={true}
            className={cn(
              "flex items-center text-lg font-medium transition-colors hover:text-foreground/80 sm:text-sm",
              item.link === pathname ? "text-foreground" : "text-foreground/60",
            )}
          >
            {item.title}
          </Link>
        );
      })}
    </nav>
  );
};

export default Navbar;
