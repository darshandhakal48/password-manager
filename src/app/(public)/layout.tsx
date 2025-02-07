"use client";
import React, { FC } from "react";
import Header from "./_components/header";
import Footer from "./_components/footer";

const PublicLayout: FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <>
      <div className="flex min-h-screen flex-col">
        <Header />
        <main>
          <div>{children}</div>
        </main>
        <Footer className="min-h-32 mt-20" />
      </div>
    </>
  );
};

export default PublicLayout;
