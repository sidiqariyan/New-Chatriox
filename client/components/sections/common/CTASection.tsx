import { Button } from "@/components/ui/button";

interface CTAProps {
  title: string;
  subtitle?: string;
  primary?: { href: string; label: string };
  secondary?: { href: string; label: string };
}

export default function CTASection({
  title,
  subtitle,
  primary,
  secondary,
}: CTAProps) {
  return (
    <section className="py-14 md:py-20 bg-brand-gradient text-white">
      <div className="container flex flex-col md:flex-row items-center justify-between gap-6">
        <div>
          <h3 className="text-2xl md:text-3xl font-semibold tracking-tight">
            {title}
          </h3>
          {subtitle ? <p className="mt-2/ text-white/90">{subtitle}</p> : null}
        </div>
        <div className="flex items-center gap-3">
          {primary ? (
            <a
              href={primary.href}
              className="btn-glass rounded-md px-4 py-2 bg-white/10 text-white"
            >
              {primary.label}
            </a>
          ) : null}
          {secondary ? (
            <Button variant="secondary" className="btn-glass" asChild>
              <a href={secondary.href}>{secondary.label}</a>
            </Button>
          ) : null}
        </div>
      </div>
    </section>
  );
}
