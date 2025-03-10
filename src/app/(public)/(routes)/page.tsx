import { Button, buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Apple, Globe, LogInIcon, MoveRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import Logo from "../_components/logo";
import { HowItWorks } from "@/components/how-it-work";
import { WobbleCard } from "@/components/ui/wobble-card";
import GetItOnPlayStore from "@/components/GetItOnPlayStore";
import { auth } from "@/auth";
import { redirect } from "next/navigation";
import { Features } from "@/components/features";

const HomePage = async () => {
  const landingScreenHeight = "min-h-[calc(100vh-80px)]";
  const session = await auth();

  if (session) {
    redirect("/passwords");
  }
  return (
    <div>
      <div
        className={
          "flex flex-wrap flex-col gap-20 my-10 lg:flex-row max-w-6xl justify-between mx-auto items-center lg:min-h-[50vh]"
        }
      >
        <div className="flex-1 flex flex-col md:mt-0 mt-10">
          <h1 className="mb-5 text-4xl lg:text-6xl font-bold">
            Your Passwords, Always Safe and Remembered.
          </h1>
          <p className="text-xl mb-10">
            The free, ultra-secure password manager that keeps your data safe
            across all your devices.
          </p>
          <div className="flex gap-4">
            <Link
              href="/auth"
              className={buttonVariants({ size: "lg", className: "gap-x-2" })}
            >
              <p className="text-lg">Get Started</p>
              <MoveRight size={20} />
            </Link>
            <Link
              href="/auth"
              className={buttonVariants({
                variant: "outline",
                size: "lg",
                className: "gap-x-2",
              })}
            >
              <p className="text-lg">Learn More</p>
            </Link>
          </div>
        </div>
        <div className="">
          <Image
            src="/images/mobile.svg"
            alt="mobile"
            width={372}
            height={746}
            className=""
          />
        </div>
      </div>
      <div className="space-y-10">
        <div className="justify-center text-5xl mona-sans font-extrabold text-center flex md:flex-row flex-col items-center md:items-end gap-x-3">
          <Logo className="md:h-full md:mt-0 md-1" height="h-[50px]" />
          Features
        </div>
        <Features />
      </div>

      <div className="text-6xl font-extrabold text-center mt-40 space-y-10">
        <h1>
          Feels great in{" "}
          <span className="text-primary font-extrabold">low-light</span>
        </h1>

        <div className="flex flex-wrap justify-center items-center gap-x-10">
          <div className="bg-gray-900 max-w-[500px] space-y-3 px-11 py-8 rounded-xl">
            <h3 className="text-4xl mona-sans">
              Dark Mode <span className="text-primary">On</span>
            </h3>
            <p className="text-lg font-normal">
              Securely manage your passwords with ease and enjoy a sleek Dark
              Mode for a seamless experience
            </p>
          </div>
          <div className="max-w-[500px] space-y-3 px-11 py-8 rounded-xl">
            <h3 className="text-4xl mona-sans">
              <span className="text-primary">3x</span> Experience
            </h3>
            <p className="text-lg font-normal">
              Experience triple the convenience and security with our advanced
              password manager
            </p>
          </div>
        </div>
      </div>

      <WobbleCard
        className="flex flex-col gap-3 w-full items-center justify-center md:py-20 py-10"
        containerClassName="my-5 md:my-10 container px-0 mx-auto"
      >
        <div className="text-5xl mona-sans font-bold items-center md:flex-row flex-col justify-center text-center flex gap-x-4 capitalize">
          <h1>Get started with</h1> <Logo height="h-[full]" /> <h1>today</h1>
        </div>
        <div className="flex flex-wrap justify-center gap-y-3 gap-x-5 items-center">
          <Link
            href="/auth"
            className={buttonVariants({
              variant: "secondary",
              className: "gap-x-2 bg-black h-full cursor-pointer z-10",
            })}
          >
            <Globe size={20} /> Continue On Web
          </Link>
          <Link
            href="/auth"
            className={buttonVariants({
              variant: "secondary",
              className: "gap-x-2 bg-black h-full cursor-pointer z-10",
            })}
          >
            <Apple size={20} /> Download For iOs
          </Link>
          <Link
            href="/auth"
            className={buttonVariants({
              variant: "secondary",
              className: "gap-x-2 bg-black h-full cursor-pointer z-10",
            })}
          >
            <Image
              src="/icons/PlayStore.svg"
              alt="playstore"
              width={21}
              height={24}
              className="w-[21px]"
            />
            Download For Android
          </Link>
        </div>
      </WobbleCard>
    </div>
  );
};

export default HomePage;
