import PageHeader from "@/components/layout/PageHeader";
import Section from "@/components/sections/common/Section";
import DefaultDetails from "@/components/sections/DefaultDetails";
import { useEffect, useState } from "react";
import { apiService } from "@/services/api";

export default function HelpCenter() {
  const categories = [
    {
      title: "Getting Started",
      links: [
        "Create an account",
        "Connect a provider",
        "Send your first email",
      ],
    },
    {
      title: "Account & Billing",
      links: ["Manage seats", "Invoices", "Usage limits"],
    },
    { title: "Integrations", links: ["Webhooks", "Providers", "Data sources"] },
    {
      title: "Troubleshooting",
      links: ["Bounces", "Spam complaints", "Rate limits"],
    },
  ];
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [priority, setPriority] = useState<"low" | "medium" | "high">("medium");
  const [tickets, setTickets] = useState<any[]>([]);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const isAuthed = !!localStorage.getItem("token");

  useEffect(() => {
    const load = async () => {
      if (!isAuthed) return;
      try {
        const res = await apiService.listTickets();
        setTickets(res.data || res || []);
      } catch (_) {}
    };
    load();
  }, [isAuthed]);

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    setError(null);
    try {
      await apiService.createTicket(subject, message, priority);
      setSubject("");
      setMessage("");
      setPriority("medium");
      const res = await apiService.listTickets();
      setTickets(res.data || res || []);
      alert("Ticket submitted successfully. We'll get back to you by email.");
    } catch (err: any) {
      setError(err?.message || "Failed to submit ticket");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="relative">
      <PageHeader
        title="Help Center"
        subtitle="Guides, answers, and troubleshooting for Chatriox."
      />
      <Section>
        <div className="glass rounded-xl p-4">
          <input
            placeholder="Search articles..."
            className="w-full bg-transparent outline-none"
          />
        </div>
      </Section>
      <Section>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((c) => (
            <div key={c.title} className="glass rounded-xl p-5">
              <div className="font-medium mb-2">{c.title}</div>
              <ul className="list-disc pl-5 text-sm text-foreground/70 space-y-1">
                {c.links.map((l) => (
                  <li key={l}>
                    <a href="#" className="hover:text-foreground">
                      {l}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </Section>

      {/* Ticket submission (authenticated users) */}
      <Section>
        <div className="grid md:grid-cols-2 gap-6 items-start">
          <div className="glass rounded-xl p-5">
            <div className="font-medium mb-3">Raise a support ticket</div>
            {isAuthed ? (
              <form onSubmit={onSubmit} className="space-y-3">
                {error ? (
                  <div className="text-sm text-red-600">{error}</div>
                ) : null}
                <div>
                  <label className="text-sm">Subject</label>
                  <input
                    value={subject}
                    onChange={(e) => setSubject(e.target.value)}
                    required
                    className="w-full glass rounded-md px-3 py-2 mt-1 outline-none"
                  />
                </div>
                <div>
                  <label className="text-sm">Priority</label>
                  <select
                    value={priority}
                    onChange={(e) => setPriority(e.target.value as any)}
                    className="w-full glass rounded-md px-3 py-2 mt-1 outline-none"
                  >
                    <option value="low">Low</option>
                    <option value="medium">Medium</option>
                    <option value="high">High</option>
                  </select>
                </div>
                <div>
                  <label className="text-sm">Message</label>
                  <textarea
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    required
                    className="w-full glass rounded-md px-3 py-2 mt-1 h-28 outline-none"
                  />
                </div>
                <button
                  disabled={submitting}
                  className="rounded-md px-4 py-2 text-white bg-sky-500 hover:bg-sky-700 disabled:opacity-60"
                >
                  {submitting ? "Submitting..." : "Submit Ticket"}
                </button>
              </form>
            ) : (
              <div className="text-sm text-foreground/70">
                Please{" "}
                <a href="/login" className="text-sky-600 hover:underline">
                  log in
                </a>{" "}
                to create a support ticket.
              </div>
            )}
          </div>
          <div className="glass rounded-xl p-5">
            <div className="font-medium mb-3">Recent tickets</div>
            {isAuthed ? (
              <ul className="space-y-3 text-sm">
                {tickets.length === 0 ? (
                  <li className="text-foreground/60">No tickets yet.</li>
                ) : (
                  tickets.map((t: any) => (
                    <li
                      key={t._id}
                      className="p-3 rounded-md border border-white/10"
                    >
                      <div className="font-medium">{t.subject}</div>
                      <div className="text-foreground/60">
                        {t.status} • {t.priority}
                      </div>
                    </li>
                  ))
                )}
              </ul>
            ) : (
              <div className="text-sm text-foreground/70">
                Sign in to view your tickets.
              </div>
            )}
          </div>
        </div>
      </Section>

      <Section>
        <div className="glass rounded-xl p-5 flex items-center justify-between">
          <div>
            <div className="font-medium">Still need help?</div>
            <div className="text-sm text-foreground/70">
              Our team replies quickly—usually within 2 hours.
            </div>
          </div>
          <a
            href="/contact"
            className="rounded-md px-4 py-2 text-white bg-sky-500 hover:bg-sky-700"
          >
            Contact Support
          </a>
        </div>
      </Section>
      <DefaultDetails />
    </div>
  );
}
