import Image from "next/image";
import Link from "next/link";

const Header = () => {
  return (
    <header className="fixed top-0 w-full z-50 bg-black bg-opacity-80 backdrop-blur-sm py-4">
      <div className="container mx-auto flex justify-between items-center px-4">
        <Link href="/" className="flex items-center gap-4">
          <Image src="/logo.png" alt="Game Logo" width={150} height={150} />
        </Link>
        <nav className="flex items-center gap-6">
          <Link href="#about" className="hover:text-gray-300 transition-colors">概要</Link>
          <Link href="#system" className="hover:text-gray-300 transition-colors">システム</Link>
          <Link href="#ranking" className="hover:text-gray-300 transition-colors">ランキング</Link>
          <Link href="#team" className="hover:text-gray-300 transition-colors">開発チーム</Link>
          {/*<div className="flex gap-2">
            <button className="font-bold">JP</button>
            <span>/</span>
            <button className="text-gray-500">EN</button>
          </div>*/}
        </nav>
      </div>
    </header>
  );
};
export default Header;