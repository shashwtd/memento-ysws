import type { Metadata } from "next";
import { Jua } from "next/font/google";
import Header from "@/components/Header";
import "./globals.css";

const jua = Jua({
  weight: "400",
  variable: "--font-jua",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Memento | You Ship, We Ship",
  description: "Build something for someone you love. We'll ship it to them.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${jua.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <Header />
        {children}
      </body>
    </html>
  );
}
