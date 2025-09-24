import React from "react";

export default function Blogs() {
  const [posts, setPosts] = React.useState<any[]>([]);

  React.useEffect(() => {
    const base = (import.meta as any).env?.VITE_API_URL;

    // Determine API base robustly. If VITE_API_URL is provided and looks like an origin
    // we use it without trailing slash; otherwise fallback to '/api'.
    let apiBase = "/api";
    if (typeof base === "string" && base.length) {
      // If user provided a full URL (starts with http) use as-is, else use the value directly
      apiBase = base.startsWith("http")
        ? base.replace(/\/$/, "")
        : base.replace(/\/$/, "");
    }

    const url = `${apiBase.replace(/\/$/, "")}/blog?limit=3`;

    (async () => {
      try {
        const res = await fetch(url);
        if (!res.ok) {
          console.error(
            "Failed to fetch blogs:",
            res.status,
            res.statusText,
            url,
          );
          return;
        }
        const json = await res.json();
        setPosts(json.data?.posts || []);
      } catch (err) {
        console.error("Error fetching blogs:", err, url);
      }
    })();
  }, []);

  if (!posts.length) return null;

  return (
    <section className="container py-24" id="blogs">
      <h2 className="font-display text-3xl md:text-4xl">From our blog</h2>
      <div className="mt-8 grid md:grid-cols-3 gap-6">
        {posts.map((p) => (
          <article
            key={p.slug}
            className="rounded-2xl glass overflow-hidden hover:shadow-glow transition group"
          >
            {p.coverImage ? (
              <div className="aspect-video overflow-hidden">
                <img
                  src={p.coverImage}
                  alt={p.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
            ) : null}
            <div className="p-6">
              <div className="text-xs text-foreground/60">
                {new Date(p.publishedAt || p.createdAt).toLocaleDateString()}
              </div>
              <h3 className="mt-2 font-medium">{p.title}</h3>
              <p className="mt-2 text-sm text-foreground/70">{p.excerpt}</p>
              <a
                href={`/blog/${p.slug}`}
                className="mt-4 inline-block px-4 py-2 rounded-md text-white text-sm font-semibold bg-sky-500 hover:bg-sky-700"
              >
                Read more
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
