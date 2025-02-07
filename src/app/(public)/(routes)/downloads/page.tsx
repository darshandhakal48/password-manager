"use client";
import React from "react";
import Logo from "../../_components/logo";
import { buttonVariants } from "@/components/ui/button";
import Image from "next/image";
import { FaApple, FaChrome, FaGooglePlay } from "react-icons/fa6";
import Link from "next/link";
import { MoveRight } from "lucide-react";

const Downloads = () => {
  return (
    <div>
      <div className="flex flex-wrap flex-col gap-20 my-10 lg:flex-row max-w-6xl justify-between mx-auto items-center lg:min-h-[50vh]">
        <div className="flex-1 flex flex-col md:mt-0 mt-10">
          <h1 className="mb-5 text-4xl lg:text-6xl font-bold">Download Now </h1>
          <p className="text-xl mb-10">
            Secure cloud syncing lets you access your sensitive information from
            anywhere on any device
          </p>
          <div className="flex gap-4">
            <Link
              href="/auth"
              className={buttonVariants({ size: "lg", className: "gap-x-2" })}
            >
              <p className="text-lg">Get Started</p>
              <MoveRight size={20} />
            </Link>
          </div>
        </div>
        <div className="flex justify-center flex-1">
          <Image
            src="/images/devices.svg"
            className="w-[500px]"
            width={920.109}
            height={411.952}
            alt="devices"
          />
        </div>
      </div>
      <div className="pt-20 space-y-10 max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold text-center">
          Download For Various Platform
        </h1>
        <div className="grid grid-cols-1 gap-y-5 md:grid-cols-3 gap-x-20">
          <div className="flex items-center gap-x-10 text-2xl font-bold bg-primary text-primary-foreground px-10 py-5 rounded-xl hover:scale-110 shadow-lg shadow-gray-800 cursor-pointer">
            <FaApple size={50} />
            Apple Store
          </div>
          <div className="flex items-center gap-x-10 text-2xl font-bold bg-primary text-primary-foreground px-10 py-5 rounded-xl hover:scale-110 shadow-lg shadow-gray-800 cursor-pointer">
            <FaGooglePlay size={50} />
            Google Play Store
          </div>
          <div className="flex items-center gap-x-10 text-2xl font-bold bg-primary text-primary-foreground px-10 py-5 rounded-xl hover:scale-110 shadow-lg shadow-gray-800 cursor-pointer">
            <FaChrome size={50} />
            Chrome Extension
          </div>
        </div>
      </div>
    </div>
  );
};

export default Downloads;
