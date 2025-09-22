import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface PageHeaderProps {
  title: string;
  subtitle?: string;
  actions?: ReactNode;
  className?: string;
}

export default function PageHeader({
  title,
  subtitle,
  actions,
  className,
}: PageHeaderProps) {
  return (
    <section
      className={cn(
        "relative border-b border-white/10 bg-[radial-gradient(1000px_400px_at_20%_0%,_rgba(0,188,255,0.15),_transparent_60%),_radial-gradient(800px_400px_at_80%_20%,_rgba(124,77,255,0.2),_transparent_60%)]",
        className,
      )}
    >
      <div className="container py-16 md:py-20">
        <div className="flex items-start md:items-center justify-between gap-6">
          <div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl tracking-tight">
              {title}
            </h1>
            {subtitle ? (
              <p className="mt-4 text-lg md:text-xl text-foreground/70 max-w-3xl">{subtitle}</p>
            ) : null}
          </div>
          {actions ? <div className="shrink-0">{actions}</div> : null}
        </div>
      </div>
    </section>
  );
}
