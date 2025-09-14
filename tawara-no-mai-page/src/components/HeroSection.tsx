import Image from "next/image";

const HeroSection = () => {
  return (
    <section className="relative h-[150vh] flex items-center justify-center text-center my-12">
      <Image
        src="/key-visual.png" // あなたのキービジュアル画像
        alt="Key Visual"
        layout="fill"
        objectFit="cover"
        className="z-0 opacity-50"
      />
      <div className="relative z-10 p-8">
        <h2 className="text-5xl font-extrabold mb-4 font-display leading-tight">
          人々を救うべく、たわらを手に立ち上がれ！
        </h2>
        <p className="text-xl max-w-2xl mx-auto">
          米不足に苦しむ農民を救えるのは、君だけだ！<br/>さあ、今“たわらの舞”をする時だ！
        </p>
        <div className="mt-8">
          <p className="text-lg bg-red-800 inline-block px-6 py-2 rounded-lg">
            東京ゲームショウ2025 | ブース番号: XX-XX
          </p>
        </div>
      </div>
    </section>
  );
};
export default HeroSection;