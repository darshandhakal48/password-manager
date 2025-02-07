"use client";
import React, { FC, useEffect, useState } from "react";
import Logo from "./logo";
import Navbar from "./navbar";
import { Button, buttonVariants } from "@/components/ui/button";
import GetItOnPlayStore from "@/components/GetItOnPlayStore";
import { cn } from "@/lib/utils";
import Link from "next/link";
import MobileHeader from "./mobile-header";
import { useScroll } from "@/lib/hooks/useScroll";
import { useSession } from "next-auth/react";
import { FaSpinner } from "react-icons/fa6";

const Header: FC<React.HTMLAttributes<HTMLDivElement>> = (props) => {
  const scroll = true;
  const scrolled = useScroll(50);
  const { data: session, status } = useSession();

  return (
    <header
      className={`sticky top-0 z-40 flex w-full justify-center bg-background/60 backdrop-blur-xl transition-all ${
        scroll ? (scrolled ? "border-b" : "bg-transparent") : "border-b"
      }`}
    >
      <div className="flex container max-w-6xl h-14 items-center justify-between py-4">
        <Link href="/" className="flex items-center space-x-1.5">
          <Logo />
        </Link>

        <Navbar />

        <div className="flex items-center space-x-3">
          {status === "loading" ? (
            <Button size="sm">
              <FaSpinner />
            </Button>
          ) : status === "authenticated" ? (
            <Link href={"/"} className="hidden md:block">
              <Button className="gap-2 px-5" variant="default" size="sm">
                <span>Dashboard</span>
              </Button>
            </Link>
          ) : (
            <Link href={"/auth"} className="hidden md:block">
              <Button className="gap-2 px-5" variant="default" size="sm">
                <span>Login</span>
              </Button>
            </Link>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
