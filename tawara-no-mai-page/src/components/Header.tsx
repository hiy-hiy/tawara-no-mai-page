import Image from "next/image";
import Link from "next/link";

const Header = () => {
  return (
    <header className="py-4">
      <div className="container mx-auto flex justify-between items-center px-4">
        <Link href="/" className="flex items-center gap-4">
          <Image src="/logo.png" alt="Game Logo" width={50} height={50} />
          <h1 className="text-2xl font-bold font-display">たわらの舞</h1>
        </Link>
        <nav className="flex items-center gap-6">
          <Link href="#about" className="hover:text-gray-300 transition-colors">概要</Link>
          <Link href="#media" className="hover:text-gray-300 transition-colors">メディア</Link>
          <Link href="#ranking" className="hover:text-gray-300 transition-colors">ランキング</Link>
          <Link href="#contact" className="hover:text-gray-300 transition-colors">問合せ</Link>
          <div className="flex gap-2">
            <button className="font-bold">JP</button>
            <span>/</span>
            <button className="text-gray-500">EN</button>
          </div>
        </nav>
      </div>
    </header>
  );
};
export default Header;