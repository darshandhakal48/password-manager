import { auth, signIn, signOut } from "@/auth";
import React from "react";
import Logo from "../../_components/logo";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { redirect } from "next/navigation";
import { Card, CardContent } from "@/components/ui/card";

const Auth = async () => {
  const session = await auth();

  if (session) redirect("/passwords");
  return (
    <div className="flex min-h-[calc(100vh-250px)] flex-col items-center justify-center p-6 md:p-10">
      <div className="w-full max-w-sm md:max-w-3xl">
        <div className="flex flex-col gap-6">
          <Card className="overflow-hidden">
            <CardContent className="grid min-h-72 p-0 md:grid-cols-2">
              <form
                className="p-6 md:p-8"
                action={async () => {
                  "use server";
                  await signIn("google");
                }}
              >
                <div className="flex flex-col justify-center gap-6">
                  <div className="flex flex-col items-center text-center">
                    <Logo />
                    <h1 className="text-2xl font-bold">Get Started Now</h1>
                    <p className="text-balance text-muted-foreground">
                      Login to your SAFE account
                    </p>
                  </div>
                  <Button
                    type="submit"
                    size="lg"
                    className="text-lg  gap-x-3"
                    variant="secondary"
                  >
                    <Image
                      src="/icons/Google.png"
                      alt="Google"
                      width={20}
                      height={20}
                    />
                    Sign In with Google
                  </Button>
                </div>
              </form>
              <div className="relative hidden bg-muted md:block">
                <Image
                  src="/images/login-illustration.png"
                  alt="Image"
                  width={500}
                  height={1000}
                  className="absolute inset-0 h-full w-full object-cover dark:brightness-[0.2] dark:grayscale"
                />
              </div>
            </CardContent>
          </Card>
          <div className="text-balance text-center text-xs text-muted-foreground [&_a]:underline [&_a]:underline-offset-4 hover:[&_a]:text-primary">
            By clicking continue, you agree to our{" "}
            <a href="#">Terms of Service</a> and <a href="#">Privacy Policy</a>.
          </div>
        </div>
      </div>
    </div>
  );
};
export default Auth;
