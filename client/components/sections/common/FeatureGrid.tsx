import { ReactNode } from "react";

export interface FeatureItem {
  title: string;
  desc: string;
  icon: ReactNode;
}

export default function FeatureGrid({ items }: { items: FeatureItem[] }) {
  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {items.map((it) => (
        <div
          key={it.title}
          className="glass rounded-xl p-5 hover:shadow-glow transition"
        >
          <div className="flex items-start gap-3">
            <div className="mt-0.5 text-primary/90">{it.icon}</div>
            <div>
              <div className="font-medium">{it.title}</div>
              <p className="text-sm text-foreground/70 mt-1">{it.desc}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
