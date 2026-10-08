import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "TECH MEETS JAPAN — Global technology, matched to Japan",
  description: "海外テクノロジー企業と日本市場をつなぐ、独立系Japan Entry Intelligence Platform。",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="ja">
      <body>{children}</body>
    </html>
  );
}
