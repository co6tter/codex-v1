import type { Metadata } from "next";
import "./globals.css";
import Header from "./components/Header";

export const metadata: Metadata = {
  title: {
    default: "Narrow Pixel Portfolio",
    template: "%s | Narrow Pixel",
  },
  description:
    "A focused portfolio for product design, frontend systems, and interactive web work.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        <Header />
        <main>{children}</main>
      </body>
    </html>
  );
}
