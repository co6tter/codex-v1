import Link from "next/link";

export const metadata = {
  title: "Home",
};

export default function Home() {
  return (
    <section className="flex items-center justify-center min-h-screen bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 text-center">
      <div className="space-y-6">
        <h1 className="text-5xl font-extrabold bg-gradient-to-r from-yellow-300 via-pink-300 to-purple-400 bg-clip-text text-transparent">Welcome to My Portfolio</h1>
        <p className="text-lg text-white/90">Explore my projects and design ideas.</p>
        <Link href="/portfolio" className="inline-block rounded-md bg-white/20 px-6 py-3 text-white hover:bg-white/30 transition">
          View Portfolio
        </Link>
      </div>
    </section>
  );
}
