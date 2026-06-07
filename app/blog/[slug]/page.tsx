import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Link from "next/link";
import { getAllPosts, getPostBySlug } from "@/lib/posts";
import { marked } from "marked";

type Props = {
  params: { slug: string };
};

export async function generateStaticParams() {
  const posts = getAllPosts();
  return posts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const post = getPostBySlug(params.slug);
  if (!post) return {};
  return {
    title: post.title,
    description: post.excerpt,
  };
}

export default function BlogPost({ params }: Props) {
  const post = getPostBySlug(params.slug);
  if (!post) notFound();

  const html = marked(post.content) as string;

  return (
    <article>
      <Link
        href="/"
        className="text-sm text-gray-400 hover:text-gray-700 transition-colors inline-flex items-center gap-1 mb-8"
      >
        ← Writing
      </Link>

      <header className="mb-10">
        <time className="text-xs text-gray-400 font-mono">
          {new Date(post.date).toLocaleDateString("en-US", {
            year: "numeric",
            month: "long",
            day: "numeric",
          })}
        </time>
        <h1 className="mt-2 text-2xl font-semibold text-gray-900 leading-tight">
          {post.title}
        </h1>
        {post.tags.length > 0 && (
          <div className="mt-3 flex gap-2 flex-wrap">
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
      </header>

      <div
        className="post-content prose prose-gray max-w-none prose-a:text-blue-600 prose-code:text-sm prose-pre:bg-slate-800 prose-pre:text-slate-100"
        dangerouslySetInnerHTML={{ __html: html }}
      />
    </article>
  );
}
