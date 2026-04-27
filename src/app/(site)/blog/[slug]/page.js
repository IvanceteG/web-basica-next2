import { notFound } from "next/navigation";
import { getPostBySlug, posts } from "../data";

export function generateStaticParams() {
  return posts.map((post) => ({ slug: post.slug }));
}

export default async function BlogPostPage({ params }) {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  return (
    <section className="space-y-6">
      <h1 className="text-3xl font-bold text-slate-900">{post.title}</h1>
      <p className="text-sm text-slate-600">{post.excerpt}</p>
      <article className="prose max-w-none text-slate-800">
        <p>{post.content}</p>
      </article>
    </section>
  );
}
