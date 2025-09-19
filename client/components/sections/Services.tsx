import { Button } from "@/components/ui/button";
import { Mail, MessageSquare, ShieldCheck, Brain, LayoutTemplate, CheckCircle2, Search} from "lucide-react";
import BulkEmailImage from "../../assets/AdobeStock_261207157_Preview.jpeg"
import EmailValidationImage from "../../assets/Gemini_Generated_Image_awz60uawz60uawz6.png"
import WhatsAppImage from "../../assets/Gemini_Generated_Image_jnzbwyjnzbwyjnzb.png"
import AiCampaignImage from "../../assets/Gemini_Generated_Image_ge3ccuge3ccuge3c.png"
import AiTemplateImage from "../../assets/Gemini_Generated_Image_4xjq4f4xjq4f4xjq.png"
// Import your other service images here
// import WhatsAppImage from "../../assets/whatsapp-service.jpeg"
// import ValidationImage from "../../assets/validation-service.jpeg"
// import AIImage from "../../assets/ai-service.jpeg"
// import TemplateImage from "../../assets/template-service.jpeg"

const services = [
  {
    key: "email",
    title: "Bulk Email",
    Icon: Mail,
    image: BulkEmailImage, // Add your bulk email image here
    desc: "Enterprise-grade email sending with automatic IP warmup, adaptive throttling, and smart routing across global regions for always-on deliverability.",
    features: [
      "Auto IP/domain warmup and reputation management",
      "Smart regional routing with failover",
      "Template versioning and on-brand controls",
      "Event webhooks for every step (delivered, open, click)",
      "Role-based permissions and audit logs",
    ],
  },
  {
    key: "whatsapp",
    title: "WhatsApp Marketing",
    Icon: MessageSquare,
    image: WhatsAppImage, // Replace with: WhatsAppImage,
    desc: "Verified Business APIs with two-way messaging, automation, and policy-safe templates. Reach customers where they are with reliability and speed.",
    features: [
      "Official WhatsApp Business API integration",
      "Template approvals and dynamic variables",
      "Inbox + automations with tagging and SLAs",
      "Rich media and CTA buttons support",
      "Consent management and regional compliance",
    ],
  },
  {
    key: "validation",
    title: "Email Validation",
    Icon: ShieldCheck,
    image: EmailValidationImage, // Replace with: ValidationImage,
    desc: "Edge-accelerated validation prevents bounces before they happen. Validate at signup, import, and send-time with millisecond checks.",
    features: [
      "SMTP, DNS, MX and role-address checks",
      "Disposable and trap detection with scoring",
      "Realtime API at the edge with global PoPs",
      "Bulk lists import with async processing",
      "Detailed status codes and remediation guidance",
    ],
  },
  {
    key: "Lead",
    title: "Lead Scraper",
    image: EmailValidationImage, // Replace with: ValidationImage,
     Icon: Search,
    desc: "Find verified B2B contacts in seconds with precise filters for role, industry, tech stack, and region. Export to CSV or sync directly to your CRM.",
    features: [
      "Company, domain, and role-based lookups",
      "Tech stack and industry filters",
      "Verified emails with validation score",
      "Enrichment: LinkedIn and firmographics",
      "One-click export to CSV/CRM",
    ],
  },
  {
    key: "ai",
    title: "AI Campaign Analyzer",
    Icon: Brain,
    image:AiCampaignImage, // Replace with: AIImage,
    desc: "Predict performance before you hit send. Our models score content, subject lines, and audiences to maximize engagement & ROI.",
    features: [
      "Subject line scoring with uplift predictions",
      "Creative insights and tone analysis",
      "Audience cohort discovery and lookalikes",
      "Send-time optimization per timezone",
      "Anomaly detection with automatic alerts",
    ],
  },
  {
    key: "templates",
    title: "Ai Template Builder",
    Icon: LayoutTemplate,
    image: AiTemplateImage, // Replace with: TemplateImage,
    desc: "Design system-powered builder for pixel-perfect, on-brand templates. Ship faster with blocks, tokens, and multi-brand theming.",
    features: [
      "Reusable blocks and brand tokens",
      "Version history and approvals",
      "Localization and RTL support",
      "Code export (MJML/HTML) and API render",
      "Accessibility checks and dark mode",
    ],
  },
];

export default function Services() {
  return (
    <section className="container py-24" id="services">
      <h2 className="font-display text-3xl md:text-4xl">Our Services</h2>
      <p className="mt-2 text-foreground/70 max-w-2xl">A unified platform covering messaging, validation, AI intelligence and creation tooling. Each capability is enterprise-hardened and API-first.</p>
      <div className="mt-10 space-y-10">
        {services.map((s, i) => (
          <div key={s.key} className={`grid md:grid-cols-2 gap-6 items-stretch ${i % 2 ? 'md:[&>div:first-child]:order-2' : ''}`}>
            <div className="rounded-2xl glass p-6">
              <div className="flex items-center gap-3">
                <div className="size-10 rounded-xl bg-gradient-to-br from-cyan-400 to-violet-500 flex items-center justify-center">
                  <s.Icon className="size-5 text-white" />
                </div>
                <h3 className="text-xl font-semibold">{s.title}</h3>
              </div>
              <p className="mt-2 text-foreground/70">{s.desc}</p>
              <ul className="mt-4 grid sm:grid-cols-2 gap-2 text-sm">
                {s.features.map((f) => (
                  <li key={f} className="flex items-start gap-2">
                    <CheckCircle2 className="mt-0.5 size-4 text-cyan-400" />
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-5">
                <a href="#pricing" className="btn-gradient px-4 py-2 rounded-md text-white font-semibold">Start {s.title}</a>
              </div>
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/5 p-6 flex items-center justify-center overflow-hidden">
              {s.image ? (
                <img 
                  src={s.image} 
                  alt={`${s.title} service illustration`}
                  className="w-full h-48 md:h-64 object-cover rounded-xl"
                />
              ) : (
                <div className="w-full h-48 md:h-64 rounded-xl bg-[linear-gradient(135deg,rgba(0,188,255,.25),rgba(124,77,255,.25))] flex items-center justify-center">
                  <span className="text-white/50 text-sm">Image placeholder</span>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}