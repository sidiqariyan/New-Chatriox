export default function SmallTestimonial({
  quote,
  author,
  role,
}: {
  quote: string;
  author: string;
  role: string;
}) {
  return (
    <div className="glass rounded-xl p-5">
      <blockquote className="text-foreground/90">“{quote}”</blockquote>
      <div className="text-xs text-foreground/60 mt-2">
        — {author}, {role}
      </div>
    </div>
  );
}
