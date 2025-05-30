import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Goch Onwubiko Services",
  description: "Goch Onwubiko Services",
  generator: "CreativeCoderJed",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
