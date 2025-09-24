import * as NavigationMenu from "@radix-ui/react-navigation-menu";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { useState } from "react";
import BrandLogo from "../BrandLogo";
import {
  Mail,
  MessageSquare,
  ShieldCheck,
  Brain,
  LayoutTemplate,
  Building2,
  Cloud,
  ShoppingCart,
  FileText,
  Code2,
  Activity,
  Briefcase,
  Shield,
  LifeBuoy,
  Cog,
  GraduationCap,
  Info,
  Phone,
  Users,
  CreditCard,
  Menu as MenuIcon,
  X as XIcon,
} from "lucide-react";

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
  const [mobileOpen, setMobileOpen] = useState(false);
  return (
    <header className="sticky top-0 z-50 bg-white text-slate-900 border-b border-black/10">
      <div className="container flex h-16 items-center justify-between">
        <a href="/" className="flex items-center gap-2">
          <BrandLogo />
        </a>

        {/* Desktop navigation */}
        <NavigationMenu.Root
          className="hidden md:block"
          onMouseLeave={() => setOpen(null)}
        >
          <NavigationMenu.List className="flex items-center gap-6">
            {menu.map((m) => (
              <NavigationMenu.Item key={m.label}>
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
                      "absolute z-50 left-1/2 -translate-x-1/2 mt-3 w-[960px] rounded-2xl p-6 shadow-xl bg-white border border-black/10",
                      open === m.label
                        ? "animate-in fade-in-0 zoom-in-95"
                        : "hidden",
                    )}
                    onMouseEnter={() => setOpen(m.label)}
                    onMouseLeave={() => setOpen(null)}
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
                              Blog: "/blog",
                              Pricing: "/plans",
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
                          const Icon =
                            ({
                              "Bulk Email": Mail,
                              WhatsApp: MessageSquare,
                              "Email Validation": ShieldCheck,
                              "AI Analyzer": Brain,
                              "Template Builder": LayoutTemplate,
                              Enterprise: Building2,
                              SaaS: Cloud,
                              Ecommerce: ShoppingCart,
                              Docs: FileText,
                              API: Code2,
                              Status: Activity,
                              "Case Studies": Briefcase,
                              Security: Shield,
                              "Help Center": LifeBuoy,
                              Pricing: CreditCard,
                              Services: Cog,
                              "How To Use": GraduationCap,
                              About: Info,
                              Careers: Users,
                              Contact: Phone,
                            }[it.title] as any) || FileText;
                          return (
                            <a
                              key={it.title}
                              href={pathForTitle(it.title)}
                              className="group rounded-xl p-4 hover:bg-white/5 transition"
                            >
                              <div className="flex items-center gap-3">
                                <div className="h-9 w-9 rounded-lg bg-sky-500/10 text-sky-600 grid place-items-center group-hover:bg-sky-500/20 transition">
                                  {Icon ? <Icon className="h-5 w-5" /> : null}
                                </div>
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
                        className="rounded-2xl p-5 bg-sky-500 hover:bg-sky-700 text-white flex flex-col justify-between hover:shadow-glow"
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
                            ? "See all tools ���"
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
          <a
            href="/login"
            className="px-5 py-2 rounded-md text-sm font-semibold border border-slate-200 hover:bg-slate-50"
          >
            Log in
          </a>
          <a
            href="/signup"
            className="px-5 py-2 rounded-md text-white text-sm font-semibold shadow-glow bg-sky-500 hover:bg-sky-700"
          >
            Sign up
          </a>
        </div>

        {/* Mobile hamburger */}
        <button
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
          aria-expanded={mobileOpen}
          className="md:hidden inline-flex items-center justify-center rounded-md p-2 text-slate-700 hover:bg-slate-100 focus:outline-none focus:ring-2 focus:ring-sky-500"
          onClick={() => setMobileOpen((v) => !v)}
        >
          {mobileOpen ? (
            <XIcon className="h-6 w-6" />
          ) : (
            <MenuIcon className="h-6 w-6" />
          )}
        </button>
      </div>

      {/* Mobile menu panel */}
      {mobileOpen && (
        <div className="md:hidden border-t border-black/10 bg-white">
          <nav className="container py-4">
            <div className="grid grid-cols-1 gap-4">
              {menu.map((m) => (
                <div key={m.label}>
                  <div className="text-xs uppercase tracking-wide text-slate-500 mb-2">
                    {m.label}
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
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
                          Blog: "/blog",
                          Pricing: "/plans",
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
                          className="flex items-center gap-3 rounded-lg px-3 py-2 hover:bg-slate-50"
                          onClick={() => setMobileOpen(false)}
                        >
                          <span className="text-sm font-medium text-slate-900">
                            {it.title}
                          </span>
                        </a>
                      );
                    })}
                  </div>
                </div>
              ))}

              <div className="pt-2 flex items-center gap-3">
                <a
                  href="/login"
                  className="flex-1 text-center px-4 py-2 rounded-md border text-sm font-semibold text-slate-900 hover:bg-slate-50"
                >
                  Log in
                </a>
                <a
                  href="/signup"
                  className="flex-1 text-center px-4 py-2 rounded-md text-white text-sm font-semibold bg-sky-500 hover:bg-sky-700"
                >
                  Sign up
                </a>
              </div>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}

export default Header;
