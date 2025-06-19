import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-6 p-8 font-[family-name:var(--font-geist-sans)]">
      <h1 className="text-4xl font-bold">Welcome to my portfolio</h1>
      <Link href="/portfolio" className="text-blue-600 hover:underline text-lg">
        View my projects
      </Link>
    </main>
  );
}
