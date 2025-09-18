import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";

function Metric({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-xl bg-white border border-black/10 p-5">
      <div className="text-xs text-foreground/60">{label}</div>
      <div className="mt-1 text-3xl font-semibold tracking-tight">{value}</div>
    </div>
  );
}

function LineChart() {
  const points = "0,150 40,140 80,120 120,100 160,85 200,70 240,55 280,40 320,25 360,15 400,10";

return (
  <svg viewBox="0 0 400 160" className="w-full h-40">
    <defs>
      <linearGradient id="lc" x1="0" x2="0" y1="0" y2="1">
        <stop offset="0%" stopColor="#38bdf8" stopOpacity="0.45" />
        <stop offset="100%" stopColor="#7c3aed" stopOpacity="0.08" />
      </linearGradient>
    </defs>

    {/* Line */}
    <polyline
      points={points}
      fill="none"
      stroke="#38bdf8"
      strokeWidth="3"
      strokeLinejoin="round"
      strokeLinecap="round"
    />

    {/* Gradient under the line */}
    <polygon
      points={`${points} 400,160 0,160`}
      fill="url(#lc)"
    />
  </svg>
);

}

function DonutChart() {
  const total = 100;
  const segs = [45, 35, 20];
  const colors = ["#38bdf8", "#22d3ee", "#7c3aed"];
  let acc = 0;
  const R = 70;
  const C = 2 * Math.PI * R;
  return (
    <svg viewBox="0 0 180 180" className="w-44 h-44">
      {segs.map((s, i) => {
        const dash = (s / total) * C;
        const gap = C - dash;
        const circle = (
          <circle
            key={i}
            cx="90"
            cy="90"
            r={R}
            stroke={colors[i]}
            strokeWidth="16"
            fill="none"
            strokeDasharray={`${dash} ${gap}`}
            strokeDashoffset={C * (1 - acc / total)}
            strokeLinecap="round"
            transform="rotate(-90 90 90)"
          />
        );
        acc += s;
        return circle;
      })}
      <circle cx="90" cy="90" r="48" fill="#ffffff" />
    </svg>
  );
}

function Bars() {
  const heights = [44, 56, 62, 70, 78, 86, 96];
  return (
    <div className="flex items-end gap-2 h-40">
      {heights.map((h, i) => (
        <div key={i} className="w-7 rounded bg-gradient-to-t from-[#7c3aed33] to-[#38bdf8]" style={{ height: `${h}%` }} />
      ))}
    </div>
  );
}

function DashboardMock() {
  return (
    <div className="rounded-2xl overflow-hidden bg-white border border-black/10 shadow-sm">
      <div className="p-5 grid grid-cols-4 gap-4">
        <Metric label="Total Emails Sent Monthly" value="100M+" />
        <Metric label="Open Rate Every Month" value="90%" />
        <Metric label="Click Rate Every Month" value="80%+" />
        <Metric label="Active Campaigns" value="100K+" />
      </div>
      <div className="grid grid-cols-2 gap-4 p-5 pt-0">
        <div className="rounded-xl border border-black/10 bg-white p-5">
          <div className="text-foreground/70 text-sm mb-2">Email Performance</div>
          <LineChart />
        </div>
        <div className="rounded-xl border border-black/10 bg-white p-5 flex items-center gap-6">
          <div>
            <div className="text-foreground/70 text-sm mb-2">Device Breakdown</div>
            <DonutChart />
          </div>
          <ul className="text-foreground/70 text-xs space-y-2">
            <li><span className="inline-block size-2 rounded-sm bg-[#38bdf8] mr-2"/>Desktop 45%</li>
            <li><span className="inline-block size-2 rounded-sm bg-[#22d3ee] mr-2"/>Mobile 35%</li>
            <li><span className="inline-block size-2 rounded-sm bg-[#7c3aed] mr-2"/>Tablet 20%</li>
          </ul>
        </div>
      </div>
      <div className="grid grid-cols-2 gap-4 p-5 pt-0">
        <div className="rounded-xl border border-black/10 bg-white p-5">
          <div className="text-foreground/70 text-sm mb-2">Top Performing Campaigns</div>
          <ul className="text-foreground/80 text-xs space-y-2">
            {["Promotion", "Welcome Flow", "Reactivation", "Abandoned Cart" ,"Post-Purchase / Upsell"].map((n, i) => (
              <li key={i} className="flex items-center justify-between">
                <span>{n}</span><span className="text-foreground/60">{["78%","64%","57%","46%", "32%" ][i]}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="rounded-xl border border-black/10 bg-white p-5">
          <div className="text-foreground/70 text-sm mb-2">Email Volume (6 Months)</div>
          <Bars />
        </div>
      </div>
    </div>
  );
}

export default function Hero() {
  const [offset, setOffset] = useState(0);
  useEffect(() => {
    const onScroll = () => setOffset(window.scrollY * 0.1);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <section className="relative bg-white border-y border-black/10 pt-20 md:pt-28 pb-16 md:pb-24">
      <div className="container grid md:grid-cols-2 gap-10 items-center">
        <div>
          <h1 className="font-display text-4xl md:text-6xl leading-[1.05]">AI Supercharges Your Marketing. Scale Like Never Before.</h1>
          <p className="mt-4 text-lg text-foreground/70">Bulk Email Sending, WhatsApp Marketing, AI Insights & Validation — trusted by the world’s leading enterprises. A premium platform engineered for result, compliance, reliability, and speed.</p>
          <div className="mt-6 flex flex-wrap items-center gap-3">
            <a href="#pricing" className="btn-gradient px-6 py-3 rounded-md text-white font-semibold shadow-glow">Start Free Trial</a>
          </div>
        </div>
        <div className="relative">
          <div className="absolute -top-10 -right-10 h-56 w-56 rounded-full bg-brand-gradient blur-3xl opacity-20" style={{ transform: `translateY(${offset}px)` }} />
          <DashboardMock />
        </div>
      </div>
    </section>
  );
}
