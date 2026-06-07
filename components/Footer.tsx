export default function Footer() {
  return (
    <footer className="border-t border-gray-100 mt-auto">
      <div className="max-w-2xl mx-auto px-4 py-8 flex items-center justify-between text-sm text-gray-400">
        <span>© {new Date().getFullYear()} Usman Ajmal</span>
        <div className="flex gap-5">
          <a
            href="https://github.com/usmanajmal"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-700 transition-colors"
          >
            GitHub
          </a>
          <a
            href="https://linkedin.com/in/usmanajmal"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-700 transition-colors"
          >
            LinkedIn
          </a>
          <a
            href="https://twitter.com/usmanajmal"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-700 transition-colors"
          >
            Twitter
          </a>
        </div>
      </div>
    </footer>
  );
}
