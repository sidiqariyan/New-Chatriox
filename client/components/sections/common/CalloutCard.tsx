export default function CalloutCard({
  title,
  body,
}: {
  title: string;
  body: string;
}) {
  return (
    <div className="rounded-xl p-5 bg-gradient-to-br from-sky-400/10 to-violet-500/10 border border-white/10">
      <div className="font-medium">{title}</div>
      <p className="text-sm text-foreground/70 mt-1">{body}</p>
    </div>
  );
}
