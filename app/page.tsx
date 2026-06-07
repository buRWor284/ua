import Link from "next/link";
import { getAllPosts } from "@/lib/posts";

export default function Home() {
  const posts = getAllPosts();

  return (
    <div>
      <div className="mb-12">
        <h1 className="text-2xl font-semibold text-gray-900 mb-2">Writing</h1>
        <p className="text-gray-500 text-sm">
          Notes on software, front-end engineering, and whatever else catches my attention.
        </p>
      </div>

      <ul className="space-y-10">
        {posts.map((post) => (
          <li key={post.slug}>
            <Link href={`/blog/${post.slug}`} className="group block">
              <time className="text-xs text-gray-400 font-mono">
                {new Date(post.date).toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </time>
              <h2 className="mt-1 text-lg font-medium text-gray-900 group-hover:text-blue-600 transition-colors">
                {post.title}
              </h2>
              <p className="mt-1 text-sm text-gray-500 leading-relaxed">
                {post.excerpt}
              </p>
              {post.tags.length > 0 && (
                <div className="mt-2 flex gap-2 flex-wrap">
                  {post.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs text-gray-400 bg-gray-50 border border-gray-100 rounded px-2 py-0.5"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              )}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
