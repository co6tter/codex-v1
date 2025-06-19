import Link from "next/link";

export default function Header() {
  return (
    <header className="border-b mb-8 py-4">
      <nav className="container mx-auto flex gap-4">
        <Link href="/" className="font-semibold">Home</Link>
        <Link href="/projects" className="font-semibold">Projects</Link>
      </nav>
    </header>
  );
}
