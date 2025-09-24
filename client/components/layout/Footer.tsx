import { cn } from "@/lib/utils";
import BrandLogo from "../BrandLogo";
import {
  Twitter,
  Linkedin,
  Youtube,
  Github,
  Instagram,
  Facebook,
  Dribbble,
  MessageCircle,
  Music,
} from "lucide-react";
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
    links: [
      "Docs",
      "API",
      "Status",
      "Case Studies",
      "Security",
      "Help Center",
      "Services",
      "How To Use",
    ],
  },
  {
    title: "Company",
    links: ["About", "Careers", "Press", "Contact", "Legal"],
  },
];

export default function Footer() {
  return (
    <footer className="relative mt-24 bg-background">
      <div className="container grid grid-cols-1 md:grid-cols-5 gap-8 py-16">
        <div>
          <div className="flex items-center gap-2">
            <a href="/" className="flex items-center gap-2">
              <BrandLogo />
            </a>
          </div>
          <p className="mt-4 text-sm text-foreground/70 max-w-sm">
            AI-powered enterprise marketing platform. Built for scale,
            compliance and performance.
          </p>
          <div className="mt-6 flex items-center gap-3 text-foreground/80">
            <a
              href="https://x.com/"
              aria-label="X"
              className="glass size-9 rounded-full grid place-items-center hover:shadow-glow"
            >
              <Twitter className="h-4 w-4" />
            </a>
            <a
              href="https://linkedin.com/"
              aria-label="LinkedIn"
              className="glass size-9 rounded-full grid place-items-center hover:shadow-glow"
            >
              <Linkedin className="h-4 w-4" />
            </a>
            <a
              href="https://youtube.com/"
              aria-label="YouTube"
              className="glass size-9 rounded-full grid place-items-center hover:shadow-glow"
            >
              <Youtube className="h-4 w-4" />
            </a>
            <a
              href="https://github.com/"
              aria-label="GitHub"
              className="glass size-9 rounded-full grid place-items-center hover:shadow-glow"
            >
              <Github className="h-4 w-4" />
            </a>
            <a
              href="https://instagram.com/"
              aria-label="Instagram"
              className="glass size-9 rounded-full grid place-items-center hover:shadow-glow"
            >
              <Instagram className="h-4 w-4" />
            </a>
            <a
              href="https://facebook.com/"
              aria-label="Facebook"
              className="glass size-9 rounded-full grid place-items-center hover:shadow-glow"
            >
              <Facebook className="h-4 w-4" />
            </a>
            <a
              href="https://tiktok.com/"
              aria-label="TikTok"
              className="glass size-9 rounded-full grid place-items-center hover:shadow-glow"
            >
              <Music className="h-4 w-4" />
            </a>
            <a
              href="https://dribbble.com/"
              aria-label="Dribbble"
              className="glass size-9 rounded-full grid place-items-center hover:shadow-glow"
            >
              <Dribbble className="h-4 w-4" />
            </a>
            <a
              href="https://discord.com/"
              aria-label="Discord"
              className="glass size-9 rounded-full grid place-items-center hover:shadow-glow"
            >
              <MessageCircle className="h-4 w-4" />
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
              placeholder="Email"
              className="w-full glass rounded-md px-4 py-2 outline-none focus:ring-2 focus:ring-sky-400/50"
            />
            <button className="rounded-md px-4 text-white text-sm font-semibold bg-sky-500 hover:bg-sky-700">
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
