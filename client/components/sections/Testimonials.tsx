import useEmblaCarousel from "embla-carousel-react";
import { useEffect, useState } from "react";
import { Quote, Star } from "lucide-react";

const testimonials = [
  { name: "Ava Martin", title: "CMO, Zenith Holdings", quote: "We consolidated three vendors into Chatriox and immediately saw a 42% uplift in qualified pipeline. Their AI Analyzer catches issues before our campaigns go out." },
  { name: "Diego Alvarez", title: "Head of Growth, Quanta Cloud", quote: "Deliverability went from good to world-class. The validation + warmup combo eliminated bounces and our CTR is up 28% quarter over quarter." },
  { name: "Mei Tan", title: "VP Engineering, Orbit Commerce", quote: "Implementation was painless. SSO, granular roles, and a real-time API that our data team loves. Support is fast and deeply technical." },
  { name: "Jon Becker", title: "Director CRM, Terra Retail", quote: "We send billions annually. Chatriox has been rock solid with transparent logs and alerts. Our team sleeps better." },
  { name: "Riya Kapoor", title: "Growth Lead, Nova Fintech", quote: "Template Builder made our brand refresh a non-event. Our designers ship updates daily without engineering in the loop." },
  { name: "Louis Schmidt", title: "Email Ops, Vector Games", quote: "The console is a joy to use, but the real win is the API. Typed events, idempotent retries, and great docs saved us weeks." },
];

function Avatar({ name }: { name: string }) {
  const initials = name.split(" ").map((n) => n[0]).slice(0, 2).join("");
  return (
    <div className="size-9 rounded-full bg-gradient-to-br from-cyan-400 to-violet-500 text-white flex items-center justify-center text-xs font-semibold" aria-hidden>
      {initials}
    </div>
  );
}

export default function Testimonials() {
  const [emblaRef, embla] = useEmblaCarousel({ loop: true, align: "start", skipSnaps: false });
  const [selected, setSelected] = useState(0);
  useEffect(() => {
    if (!embla) return;
    const onSelect = () => setSelected(embla.selectedScrollSnap());
    embla.on("select", onSelect);
    onSelect();
  }, [embla]);

  return (
    <section className="container py-24" id="testimonials">
      <h2 className="font-display text-3xl md:text-4xl text-center">What leaders say</h2>
      <div className="mt-10">
        <div className="overflow-hidden" ref={emblaRef}>
          <div className="flex gap-6">
            {testimonials.map((t, i) => (
              <div key={i} className="min-w-0 flex-[0_0_85%] md:flex-[0_0_48%] lg:flex-[0_0_32%]">
                <div className="h-full rounded-2xl glass p-6 relative">
                  <Quote className="absolute -top-3 -left-3 size-6 text-foreground/20" />
                  <div className="flex items-center gap-3">
                    <Avatar name={t.name} />
                    <div>
                      <div className="text-sm font-medium">{t.name}</div>
                      <div className="text-xs text-foreground/60">{t.title}</div>
                    </div>
                  </div>
                  <div className="mt-3 flex text-amber-400">
                    {Array.from({ length: 5 }).map((_, j) => (<Star key={j} className="size-4 fill-current" />))}
                  </div>
                  <p className="mt-3 text-foreground/80">“{t.quote}”</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="mt-6 flex items-center justify-center gap-2">
          {testimonials.map((_, i) => (
            <button key={i} onClick={() => embla?.scrollTo(i)} className={`h-2.5 w-2.5 rounded-full transition ${selected===i?"bg-foreground":"bg-foreground/30"}`} />
          ))}
        </div>
      </div>
    </section>
  );
}
