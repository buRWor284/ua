import Link from "next/link";

export default function Navbar() {
  return (
    <header className="border-b border-gray-100">
      <div className="max-w-2xl mx-auto px-4 py-5 flex items-center justify-between">
        <Link
          href="/"
          className="font-semibold text-gray-900 hover:text-blue-600 transition-colors"
        >
          Usman Ajmal
        </Link>
        <nav className="flex gap-6 text-sm text-gray-500">
          <Link href="/" className="hover:text-gray-900 transition-colors">
            Writing
          </Link>
          <Link href="/about" className="hover:text-gray-900 transition-colors">
            About
          </Link>
          <a
            href="/Resume-UsmanAjmal.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-900 transition-colors"
          >
            Resume
          </a>
        </nav>
      </div>
    </header>
  );
}
