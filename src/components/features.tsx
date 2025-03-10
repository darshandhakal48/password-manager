"use client";
import Image from "next/image";
import React from "react";
import { WobbleCard } from "./ui/wobble-card";

export function Features() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 max-w-7xl mx-auto w-full">
      <WobbleCard
        containerClassName="col-span-1 lg:col-span-2 h-full bg-pink-800 min-h-[500px] lg:min-h-[300px]"
        className=""
      >
        <div className="max-w-xs">
          <h2 className="text-left mona-sans text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
            Password Manager
          </h2>
          <p className="mt-4 text-left  text-base/6 text-neutral-200">
            Store you passwords, notes, credit cards in SAFE and lock it with
            your own masterpassword
          </p>
        </div>
        <Image
          src="/images/login-illustration.png"
          width={500}
          height={500}
          alt="linear demo image"
          className="absolute -right-0 lg:-right-[20%] filter -bottom-10 object-contain rounded-2xl"
        />
      </WobbleCard>
      <WobbleCard containerClassName="col-span-1 min-h-[300px]">
        <h2 className="max-w-80 mona-sans text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
          Free To Use
        </h2>
        <p className="mt-4 max-w-[26rem] text-left  text-base/6 text-neutral-200">
          Protect your password and private items for free forever with SAFE
        </p>
      </WobbleCard>
      <WobbleCard
        containerClassName="col-span-1 lg:col-span-2 h-full bg-blue-800 min-h-[500px] lg:min-h-[300px]"
        className=""
      >
        <div className="max-w-xs">
          <h2 className="text-left mona-sans text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
            Security
          </h2>
          <p className="mt-4 text-left text-base/6 text-neutral-200">
            Every password you create with SAFE is encrypted using your master
            password, making it readable only by you and ensuring your sensitive
            information stays secure.
          </p>
        </div>
        <Image
          src="/images/encryption-ilustration.jpg"
          width={500}
          height={500}
          alt="linear demo image"
          className="absolute -right-0 lg:-right-[20%] filter -bottom-3 object-contain rounded-2xl"
        />
      </WobbleCard>
      <WobbleCard containerClassName="col-span-1 bg-yellow-700 min-h-[300px]">
        <h2 className="max-w-80 mona-sans text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
          Safe and Easy Access
        </h2>
        <p className="mt-4 max-w-[26rem] text-left  text-base/6 text-neutral-200">
          Whenever and wherever you need to access your stored passwords, simply
          log in and use your master password to decrypt them. This seamless
          process ensures you can retrieve your information quickly and
          securely.
        </p>
      </WobbleCard>
    </div>
  );
}
