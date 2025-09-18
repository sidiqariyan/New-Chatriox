interface Props {
  items: string[];
}

export default function IntegrationLogos({ items }: Props) {
  return (
    <div className="flex flex-wrap gap-3">
      {items.map((name) => (
        <div
          key={name}
          className="px-3 py-1.5 rounded-md glass text-sm text-foreground/80"
        >
          {name}
        </div>
      ))}
    </div>
  );
}
