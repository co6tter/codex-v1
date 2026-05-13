import Link from "next/link";

const navItems = [
  { href: "/", label: "Home" },
  { href: "/portfolio", label: "Work" },
];

export default function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-[#d5dde3] bg-[#f5f7f8]/95 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-5 sm:px-8">
        <Link
          href="/"
          className="flex items-center gap-3"
          aria-label="Narrow Pixel home"
        >
          <span className="grid h-9 w-9 place-items-center rounded-md bg-[#17201d] text-sm font-semibold text-white">
            NP
          </span>
          <span className="hidden text-sm font-semibold text-[#17201d] sm:block">
            Narrow Pixel
          </span>
        </Link>
        <nav
          className="flex items-center gap-1"
          aria-label="Primary navigation"
        >
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="rounded-md px-3 py-2 text-sm font-medium text-[#4f5b64] transition hover:bg-white hover:text-[#17201d]"
            >
              {item.label}
            </Link>
          ))}
          <a
            href="mailto:hello@example.com"
            className="ml-2 rounded-md bg-[#17201d] px-3 py-2 text-sm font-semibold text-white transition hover:bg-[#2f756b]"
          >
            Contact
          </a>
        </nav>
      </div>
    </header>
  );
}
