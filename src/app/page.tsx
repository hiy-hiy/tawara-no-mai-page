// "use client"; // RankingSectionがClient Componentなら必要
import RankingSection from "@/components/RankingSection";
// 他のコンポーネントも必要に応じてインポートしてOKです
// import HeroSection from "@/components/HeroSection";

export default function Home() {
  // 問題のuseEffectフックを完全に削除しました

  return (
    <div>
      <main>
        {/* まずはRankingSectionだけ表示してみる */}
        <RankingSection />
        {/* <HeroSection /> */}
      </main>
    </div>
  );
}