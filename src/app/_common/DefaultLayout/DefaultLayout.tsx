"use client"

import { useAppSelector } from "@/app/_providers/Providers";
import React from "react";
import Header from "../Header";
import Page from "../Page";

export default function DefaultLayout({
  children,
}: {
  children: React.ReactNode;
  }) {
  const modal = useAppSelector((state) => state.utils.modal);
  
  return (
    <>
      <Header />
      <Page>
        {children}
        {modal}
      </Page>
    </>
  );
}
