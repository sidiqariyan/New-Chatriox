import { Check } from "lucide-react";

export default function CheckList({ items }: { items: string[] }) {
  return (
    <ul className="grid gap-2 sm:grid-cols-2">
      {items.map((it) => (
        <li key={it} className="flex items-start gap-2">
          <Check className="h-5 w-5 text-emerald-500 mt-0.5" />
          <span className="text-foreground/80">{it}</span>
        </li>
      ))}
    </ul>
  );
}
