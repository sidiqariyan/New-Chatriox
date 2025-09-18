import * as NavigationMenu from "@radix-ui/react-navigation-menu";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { useState } from "react";
import Logo from "../../../public/Logo.png"

const menu = [
  {
    label: "Products",
    items: [
      { title: "Bulk Email", desc: "Send at global scale with AI warmup" },
      { title: "WhatsApp", desc: "Verified API with smart routing" },
      { title: "Email Validation", desc: "Real-time verification at edge" },
      { title: "AI Analyzer", desc: "Predict performance and optimize" },
      { title: "Template Builder", desc: "Enterprise design system ready" },
    ],
  },
  {
    label: "Solutions",
    items: [
      { title: "Enterprise", desc: "Compliance-first global platform" },
      { title: "SaaS", desc: "Usage-based billing and webhooks" },
      { title: "Ecommerce", desc: "Transactional + marketing suite" },
    ],
  },
  {
    label: "Resources",
    items: [
      { title: "Docs", desc: "Developer-first, SOC2 compliant" },
      { title: "API", desc: "Stable, versioned endpoints" },
      { title: "Status", desc: "Live uptime and incidents" },
      { title: "Case Studies", desc: "100x ROI stories" },
      { title: "Security", desc: "GDPR, ISO, SOC2" },
      { title: "Help Center", desc: "Guides and troubleshooting" },
      { title: "Services", desc: "All tools overview" },
      { title: "How To Use", desc: "Step-by-step and video" },
    ],
  },
  {
    label: "Certifications",
    items: [
      { title: "SOC 2 Type II", desc: "Independent audit and controls" },
      { title: "ISO 27001", desc: "Information security management" },
      { title: "GDPR", desc: "European data protection" },
      { title: "HIPAA", desc: "Healthcare data privacy" },
    ],
  },
  {
    label: "Company",
    items: [
      { title: "About", desc: "Built for the Fortune 500" },
      { title: "Careers", desc: "Join our AI team" },
      { title: "Contact", desc: "Global 24/7 support" },
    ],
  },
];

export function Header() {
  const [open, setOpen] = useState<string | null>(null);
  return (
    <header className="sticky top-0 z-50 bg-white text-slate-900 border-b border-black/10">
      <div className="container flex h-16 items-center justify-between">
        <a href="/" className="flex items-center gap-2">
          <img src={Logo} className="w-10"/>
          <span className="font-display text-lg tracking-tight">Chatriox</span>
        </a>

        <NavigationMenu.Root className="hidden md:block">
          <NavigationMenu.List className="flex items-center gap-6">
            {menu.map((m) => (
              <NavigationMenu.Item
                key={m.label}
                onMouseLeave={() => setOpen(null)}
              >
                <NavigationMenu.Trigger
                  onMouseEnter={() => setOpen(m.label)}
                  className={cn(
                    "text-sm text-slate-700 hover:text-slate-900 transition-colors outline-none",
                  )}
                >
                  {m.label}
                </NavigationMenu.Trigger>
                <NavigationMenu.Content forceMount>
                  <div
                    className={cn(
                      "absolute left-1/2 -translate-x-1/2 mt-3 w-[960px] rounded-2xl p-6 shadow-xl bg-white border border-black/10",
                      open === m.label
                        ? "animate-in fade-in-0 zoom-in-95"
                        : "hidden",
                    )}
                  >
                    <div className="grid grid-cols-4 gap-4">
                      <div className="col-span-3 grid grid-cols-3 gap-4">
                        {m.items.map((it) => {
                          const pathForTitle = (t: string) => {
                            const map: Record<string, string> = {
                              "Email Validation": "/validation",
                              "Template Builder": "/templates",
                              "Case Studies": "/case-studies",
                              Docs: "/docs",
                              API: "/api",
                              Status: "/status",
                              "Help Center": "/help-center",
                              Services: "/services",
                              "How To Use": "/how-to-use",
                              "SOC 2 Type II": "/about#certifications",
                              "ISO 27001": "/about#certifications",
                              GDPR: "/about#certifications",
                              HIPAA: "/about#certifications",
                              About: "/about#certifications",
                            };
                            if (map[t]) return map[t];
                            return (
                              "/" +
                              t
                                .toLowerCase()
                                .replace(/[^a-z0-9]+/g, "-")
                                .replace(/(^-|-$)/g, "")
                            );
                          };
                          return (
                            <a
                              key={it.title}
                              href={pathForTitle(it.title)}
                              className="group rounded-xl p-4 hover:bg-white/5 transition"
                            >
                              <div className="flex items-center gap-3">
                                <div className="h-9 w-9 rounded-lg bg-gradient-to-br from-sky-400 to-sky-600 opacity-80 group-hover:opacity-100 transition" />
                                <div>
                                  <div className="font-medium">{it.title}</div>
                                  <div className="text-xs text-foreground/60 mt-0.5">
                                    {it.desc}
                                  </div>
                                </div>
                              </div>
                            </a>
                          );
                        })}
                      </div>
                      <a
                        href={
                          m.label === "Products"
                            ? "/services"
                            : m.label === "Resources"
                              ? "/help-center"
                              : "/about"
                        }
                        className="rounded-2xl p-5 bg-brand-gradient text-white flex flex-col justify-between hover:shadow-glow"
                      >
                        <div className="text-sm leading-5 opacity-90">
                          {m.label === "Products"
                            ? "Explore capabilities"
                            : m.label === "Resources"
                              ? "Need help?"
                              : "Why Chatriox?"}
                        </div>
                        <div className="mt-2 font-medium">
                          {m.label === "Products"
                            ? "See all tools →"
                            : m.label === "Resources"
                              ? "Visit Help Center →"
                              : "About us →"}
                        </div>
                      </a>
                    </div>
                  </div>
                </NavigationMenu.Content>
              </NavigationMenu.Item>
            ))}
          </NavigationMenu.List>
        </NavigationMenu.Root>

        <div className="hidden md:flex items-center gap-3">
          <Button className="btn-glass" variant="secondary">
            Book a Demo
          </Button>
          <a
            href="#pricing"
            className="btn-gradient px-5 py-2 rounded-md text-white text-sm font-semibold shadow-glow"
          >
            Start Free Trial
          </a>
        </div>
      </div>
    </header>
  );
}

export default Header;
