import type { Metadata } from "next";
import { Mulish } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";

const muli = Mulish({
  subsets: ["cyrillic"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: {
    default: "Arjun Jhukal's Blog",
    template: "%s | Arjun Jhukal's Blog",
  },
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${muli.className} antialiased`}>
        <Header />
        <main className="main">{children}</main>
      </body>
    </html>
  );
}
