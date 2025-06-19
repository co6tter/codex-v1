import Link from "next/link";

export default function Home() {
  return (
    <main className="container mx-auto py-8">
      <h1 className="text-3xl font-bold mb-4">My Code Portfolio</h1>
      <p className="mb-6">Welcome to my collection of programming projects.</p>
      <Link href="/projects" className="text-blue-500 underline">
        View Projects
      </Link>
    </main>
  );
}
