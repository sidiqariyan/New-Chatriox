const posts = [
  { 
    title: "How AI predicts email engagement", 
    excerpt: "We break down our predictive models and how they score subject lines and audiences.", 
    tag: "AI", 
    date: "Nov 5, 2025",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=400&h=250&fit=crop&auto=format"
  },
  { 
    title: "Deliverability 101: a modern guide", 
    excerpt: "From IP warmup to DMARC, learn the levers that truly move deliverability.", 
    tag: "Deliverability", 
    date: "Oct 22, 2025",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=250&fit=crop&auto=format"
  },
  { 
    title: "Design systems for email", 
    excerpt: "Component-driven emails with tokens, themes and multi-brand support.", 
    tag: "Design", 
    date: "Sep 17, 2025",
    image: "https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?w=400&h=250&fit=crop&auto=format"
  },
];

export default function Blogs() {
  return (
    <section className="container py-24" id="blogs">
      <h2 className="font-display text-3xl md:text-4xl">From our blog</h2>
      <div className="mt-8 grid md:grid-cols-3 gap-6">
        {posts.map((p) => (
          <article key={p.title} className="rounded-2xl glass overflow-hidden hover:shadow-glow transition group">
            <div className="aspect-video overflow-hidden">
              <img 
                src={p.image} 
                alt={p.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="p-6">
              <div className="text-xs text-foreground/60">{p.tag} • {p.date}</div>
              <h3 className="mt-2 font-medium">{p.title}</h3>
              <p className="mt-2 text-sm text-foreground/70">{p.excerpt}</p>
              <a href="#" className="mt-4 inline-block btn-gradient px-4 py-2 rounded-md text-white text-sm font-semibold">Read more</a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}