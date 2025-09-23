import { useEffect, useState } from "react";

interface BlogPost {
  id?: string;
  _id?: string;
  title: string;
  excerpt?: string;
  content?: string;
  tag?: string;
  category?: string;
  image?: string;
  coverImage?: string;
  slug?: string;
  url?: string;
  date?: string;
  createdAt?: string;
}

const BLOG_API: string | undefined = import.meta.env.VITE_BLOG_API_URL;

export default function Blogs() {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let isMounted = true;
    (async () => {
      if (!BLOG_API) {
        if (isMounted) setLoading(false);
        return;
      }
      try {
        const res = await fetch(BLOG_API, { headers: { "Content-Type": "application/json" } });
        if (!res.ok) throw new Error(`Failed to load posts (${res.status})`);
        const data = await res.json();
        const items: BlogPost[] = Array.isArray(data) ? data : (data.data || data.posts || []);
        if (isMounted) setPosts(items.filter(Boolean));
      } catch (e) {
        if (isMounted) setPosts([]);
      } finally {
        if (isMounted) setLoading(false);
      }
    })();
    return () => { isMounted = false; };
  }, []);

  if (loading) return null; // Avoid layout shift; no placeholders
  if (!posts.length) return null; // Hide section if no posts available

  return (
    <section className="container py-24" id="blogs">
      <h2 className="font-display text-3xl md:text-4xl">From our blog</h2>
      <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {posts.map((p) => {
          const key = p._id || p.id || p.slug || p.title;
          const href = p.url || (p.slug ? `/blog/${p.slug}` : "#");
          const img = p.image || p.coverImage;
          const tag = p.tag || p.category;
          const date = p.date || p.createdAt;
          return (
            <article key={key} className="rounded-2xl glass overflow-hidden hover:shadow-glow transition group">
              <div className="aspect-video overflow-hidden">
                {img ? (
                  <img
                    src={img}
                    alt={p.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    loading="lazy"
                    decoding="async"
                  />
                ) : (
                  <div className="w-full h-full bg-muted" />
                )}
              </div>
              <div className="p-6">
                <div className="text-xs text-foreground/60">
                  {tag ? `${tag} • ` : ""}{date ? new Date(date).toLocaleDateString() : ""}
                </div>
                <h3 className="mt-2 font-medium">{p.title}</h3>
                {p.excerpt && (
                  <p className="mt-2 text-sm text-foreground/70">{p.excerpt}</p>
                )}
                <a href={href} className="mt-4 inline-block px-4 py-2 rounded-md text-white text-sm font-semibold bg-sky-500 hover:bg-sky-700">Read more</a>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}
