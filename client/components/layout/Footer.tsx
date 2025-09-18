import { cn } from "@/lib/utils";

const columns = [
  {
    title: "Products",
    links: ["Bulk Email", "WhatsApp", "Validation", "AI Analyzer", "Templates"],
  },
  {
    title: "Solutions",
    links: ["Enterprise", "SaaS", "Ecommerce", "Financial", "Healthcare"],
  },
  {
    title: "Resources",
    links: ["Docs", "API", "Status", "Case Studies", "Security", "Help Center", "Services", "How To Use"],
  },
  {
    title: "Company",
    links: ["About", "Careers", "Press", "Contact", "Legal"],
  },
];

export default function Footer() {
  return (
    <footer className="relative mt-24 bg-[radial-gradient(1200px_500px_at_50%_120%,_rgba(124,77,255,0.2),_transparent)]">
      <div className="container grid grid-cols-1 md:grid-cols-5 gap-8 py-16">
        <div>
          <div className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-lg bg-[conic-gradient(at_70%_120%,_#00e5ff,_#7c4dff,_#00bcff)] shadow-[0_0_30px_#7c4dff66]"></div>
            <span className="font-display text-lg tracking-tight">
              Chatriox
            </span>
          </div>
          <p className="mt-4 text-sm text-foreground/70 max-w-sm">
            AI-powered enterprise marketing platform. Built for scale,
            compliance and performance.
          </p>
          <div className="mt-6 flex items-center gap-3">
            <a
              href="#"
              aria-label="X"
              className="glass size-9 rounded-full flex items-center justify-center hover:shadow-glow"
            >
              𝕏
            </a>
            <a
              href="#"
              aria-label="LinkedIn"
              className="glass size-9 rounded-full flex items-center justify-center hover:shadow-glow"
            >
              in
            </a>
            <a
              href="#"
              aria-label="YouTube"
              className="glass size-9 rounded-full flex items-center justify-center hover:shadow-glow"
            >
              ▶
            </a>
          </div>
        </div>

        {columns.map((col) => (
          <div key={col.title}>
            <h4 className="font-medium mb-3 text-foreground/90">{col.title}</h4>
            <ul className="space-y-2 text-sm text-foreground/70">
              {col.links.map((l) => {
                const map: Record<string, string> = {
                  "Case Studies": "/case-studies",
                  Validation: "/validation",
                  Templates: "/templates",
                };
                const path =
                  map[l] ??
                  "/" +
                    l
                      .toLowerCase()
                      .replace(/[^a-z0-9]+/g, "-")
                      .replace(/(^-|-$)/g, "");
                return (
                  <li key={l}>
                    <a
                      href={path}
                      className="hover:text-foreground transition-colors"
                    >
                      {l}
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>
        ))}

        <div className="md:col-span-2">
          <h4 className="font-medium mb-3 text-foreground/90">
            Stay in the loop
          </h4>
          <form className="flex gap-2">
            <input
              required
              type="email"
              placeholder="Work email"
              className="w-full glass rounded-md px-4 py-2 outline-none focus:ring-2 focus:ring-sky-400/50"
            />
            <button className="btn-gradient rounded-md px-4 text-white text-sm font-semibold">
              Subscribe
            </button>
          </form>
          <p className="mt-2 text-xs text-foreground/60">
            We care about your data. Read our privacy policy.
          </p>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="container py-6 text-xs text-foreground/60 flex items-center justify-between">
          <span>
            © {new Date().getFullYear()} Chatriox Inc. All rights reserved.
          </span>
          <div className="flex gap-4">
            <a href="#">GDPR</a>
            <a href="#">ISO</a>
            <a href="#">SOC2</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
