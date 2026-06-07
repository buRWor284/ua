import Link from "next/link";

export default function NotFound() {
  return (
    <div className="text-center py-20">
      <p className="text-6xl font-bold text-gray-100">404</p>
      <h1 className="mt-4 text-xl font-semibold text-gray-700">Page not found</h1>
      <p className="mt-2 text-gray-400 text-sm">That page doesn't exist.</p>
      <Link href="/" className="mt-6 inline-block text-sm text-blue-600 hover:underline">
        ← Back to writing
      </Link>
    </div>
  );
}
