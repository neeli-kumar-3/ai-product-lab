import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="border-b border-gray-800">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5">
        <Link
          href="/"
          className="text-base font-semibold tracking-wide"
        >
          AI Build Portfolio
        </Link>

        <div className="flex items-center gap-6 text-sm text-gray-300">
  <a
    href="https://www.linkedin.com/in/neelikumar3"
    target="_blank"
    rel="noopener noreferrer"
    className="transition hover:text-white"
  >
    LinkedIn
  </a>

  <a
    href="https://github.com/neeli-kumar-3"
    target="_blank"
    rel="noopener noreferrer"
    className="transition hover:text-white"
  >
    GitHub
  </a>
</div>
      </div>
    </nav>
  );
}