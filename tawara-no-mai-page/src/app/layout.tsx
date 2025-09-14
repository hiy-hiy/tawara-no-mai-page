import type { Metadata } from "next";
import { Noto_Serif_JP, Cinzel } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const notoSerifJP = Noto_Serif_JP({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-noto-serif-jp",
});

const cinzel = Cinzel({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-cinzel",
});

export const metadata: Metadata = {
  title: "【あなたのゲームタイトル】",
  description: "【あなたのゲームの概要】",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja" className="scroll-smooth">
      <body className={`${notoSerifJP.variable} ${cinzel.variable} font-serif`}>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}