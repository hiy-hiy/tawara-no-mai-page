"use client";
import AboutSection from "@/components/AboutSection";
import ContactSection from "@/components/ContactSection";
import HeroSection from "@/components/HeroSection";
import MediaSection from "@/components/MediaSection";
import RankingSection from "@/components/RankingSection";
import SystemSection from "@/components/SystemSection";
import TeamSection from "@/components/TeamSection";
import React from "react";
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    // Tailwind CSSを読み込むためのscriptタグをheadに追加します
    const tailwindScript = document.createElement('script');
    tailwindScript.src = 'https://cdn.tailwindcss.com';
    document.head.appendChild(tailwindScript);

    // 参考サイトの雰囲気に合わせ、Noto Serif JPフォントを読み込みます
    const fontLink = document.createElement('link');
    fontLink.href = "https://fonts.googleapis.com/css2?family=Yuji+Mai&display=swap";
    fontLink.rel = "stylesheet";
    document.head.appendChild(fontLink);

    // コンポーネントがアンマウントされた時に追加した要素を削除するクリーンアップ関数
    return () => {
      if (tailwindScript.parentNode) {
        tailwindScript.parentNode.removeChild(tailwindScript);
      }
      if (fontLink.parentNode) {
        fontLink.parentNode.removeChild(fontLink);
      }
    };
  }, []); // このeffectは初回レンダリング時に一度だけ実行されます

  return (
    <div className="bg-[#111] text-white" style={{ fontFamily: "'Yuji Mai', serif" }}>
      <main>
        <HeroSection />
        <AboutSection />
        <MediaSection />
        <SystemSection />
        <RankingSection />
        <TeamSection />
        <ContactSection />
      </main>
    </div>
  );
}