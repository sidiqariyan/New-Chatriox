export interface StatItem {
  label: string;
  value: string;
}

export default function Stats({ items }: { items: StatItem[] }) {
  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
      {items.map((s) => (
        <div key={s.label} className="rounded-xl glass p-5 text-center">
          <div className="text-2xl font-semibold">{s.value}</div>
          <div className="text-xs text-foreground/60 mt-1">{s.label}</div>
        </div>
      ))}
    </div>
  );
}
