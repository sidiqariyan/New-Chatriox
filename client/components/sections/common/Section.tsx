import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface SectionProps {
  title?: string;
  subtitle?: string;
  className?: string;
  children?: ReactNode;
}

export default function Section({
  title,
  subtitle,
  className,
  children,
}: SectionProps) {
  return (
    <section className={cn("py-12 md:py-16", className)}>
      <div className="container">
        {(title || subtitle) && (
          <div className="mb-8 max-w-3xl">
            {title ? (
              <h2 className="text-2xl md:text-3xl font-semibold tracking-tight">
                {title}
              </h2>
            ) : null}
            {subtitle ? (
              <p className="mt-2 text-foreground/70">{subtitle}</p>
            ) : null}
          </div>
        )}
        {children}
      </div>
    </section>
  );
}
