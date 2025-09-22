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
    <section className="py-14 md:py-20 bg-sky-500 text-white">
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
              className="rounded-md px-4 py-2 text-white bg-sky-600 hover:bg-sky-700"
            >
              {primary.label}
            </a>
          ) : null}
          {secondary ? (
            <Button className="bg-white/20 hover:bg-white/30 text-white" asChild>
              <a href={secondary.href}>{secondary.label}</a>
            </Button>
          ) : null}
        </div>
      </div>
    </section>
  );
}
