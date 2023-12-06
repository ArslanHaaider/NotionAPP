import "../globals.css";
import React from "react";
import Header from "../../components/landing-page/header";

export default function HomePageLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Header/>
        {children}</body>
    </html>
  );
}
