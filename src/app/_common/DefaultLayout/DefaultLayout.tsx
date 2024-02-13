import React from "react";
import Header from "../Header";
import Page from "../Page";

export default function DefaultLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Header />
      <Page>
       {children}
      </Page>
    </>
  );
}
