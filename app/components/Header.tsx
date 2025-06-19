import Link from "next/link";

export default function Header() {
  return (
    <header className="p-4 flex justify-between items-center border-b border-gray-200 dark:border-gray-800">
      <h1 className="text-xl font-bold">
        <Link href="/">My Portfolio</Link>
      </h1>
      <nav className="flex gap-4">
        <Link href="/" className="hover:underline">
          Home
        </Link>
        <Link href="/portfolio" className="hover:underline">
          Portfolio
        </Link>
      </nav>
    </header>
  );
}
