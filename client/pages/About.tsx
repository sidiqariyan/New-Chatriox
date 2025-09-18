import CEOImage from "../assets/WhatsApp Image 2025-09-15 at 11.20.25 PM.jpeg"
import Amaan from "../assets/WhatsApp Image 2025-09-16 at 3.18.28 PM.jpeg"
import AbdulBasirImage from "../assets/unnamed.png"
import MunirImage from "../assets/Gemini_Generated_Image_yzsibwyzsibwyzsi.png"
import Section from "@/components/sections/common/Section";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Heart,
  Zap,
  Shield,
  Users,
  Award,
  Star,
  TrendingUp,
  Mail,
  Phone,
  MapPin,
} from "lucide-react";

export default function About() {
  const stats = [
    { value: "100K+", label: "Active Customers" },
    { value: "150+", label: "Countries Served" },
    { value: "50M+", label: "Messages Sent Monthly" },
    { value: "99.2%", label: "Customer Satisfaction" },
  ];

  const values = [
    {
      icon: Heart,
      title: "Customer First",
      description:
        "Every decision we make starts with how it helps our customers succeed.",
    },
    {
      icon: Zap,
      title: "Innovation",
      description:
        "We push the boundaries of what's possible in automation and AI.",
    },
    {
      icon: Shield,
      title: "Trust & Security",
      description:
        "We protect customer data with a defense‑in‑depth security program.",
    },
    {
      icon: Users,
      title: "Collaboration",
      description: "Great things happen when diverse minds work together.",
    },
  ];

  const teamMembers = [
    {
      name: "Ariyan Sidiq",
      role: "CEO & Founder",
      bio: "Visionary leader driving innovation and growth. Passionate about building cutting‑edge solutions.",
      img: CEOImage,
    },
    {
      name: "Basir Sidiq",
      role: "VP of Marketing",
      bio: "Marketing strategist with expertise in brand development and customer acquisition.",
      img: AbdulBasirImage,
    },
    {
      name: "Munir Sidiq",
      role: "VP of Management",
      bio: "Operations expert focused on streamlining processes and team optimization.",
      img: MunirImage,
    },
    {
      name: "Amaan Khan",
      role: "VP of SEO & Digital Strategy",
      bio: "SEO specialist and digital marketing expert driving organic growth and online visibility.",
      img: Amaan,
    },
  ];

  return (
    <div className="relative">
      <section className="py-16 md:py-20 bg-gradient-to-br from-slate-50 to-white dark:from-slate-900/40 dark:to-transparent">
        <div className="container text-center">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl lg:text-6xl tracking-tight">
              About{" "}
              <span className="bg-gradient-to-r from-sky-500 to-emerald-400 bg-clip-text text-transparent">
                Chatriox
              </span>
            </h1>
            <p className="text-lg md:text-xl text-foreground/70 mt-6">
              We're on a mission to make advanced marketing automation
              accessible to every business. With enterprise‑grade tools, we help
              companies reach more customers, strengthen engagement, and
              accelerate growth.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 mt-10">
              {stats.map((s) => (
                <div key={s.label} className="text-center">
                  <div className="text-2xl md:text-3xl font-bold text-sky-600 dark:text-sky-400">
                    {s.value}
                  </div>
                  <div className="text-sm text-foreground/60 mt-1">
                    {s.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20">
        <div className="container grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          <div className="space-y-6">
            <h2 className="text-3xl md:text-4xl font-semibold tracking-tight">
              Our Story
            </h2>
            <div className="space-y-4 text-foreground/70 text-lg leading-relaxed">
              <p>
                Chatriox was founded with a simple vision: to make email
                marketing and customer outreach more accessible, affordable, and
                effective for every business.
              </p>
              <p>
                Our founders recognized a major challenge—teams struggled with
                expensive tools, poor deliverability, and low engagement. We
                built an AI‑powered platform offering bulk email, WhatsApp
                messaging, lead scraping, and email validation that's simple for
                small businesses and scalable for enterprises.
              </p>
              <p>
                Today, Chatriox powers outreach for over 100,000 businesses
                worldwide, from solo entrepreneurs to Fortune 500 companies.
              </p>
            </div>
          </div>

          <div className="relative">
            <div className="rounded-3xl p-8 bg-gradient-to-br from-sky-400/10 to-emerald-400/10">
              <div className="bg-white dark:bg-black rounded-2xl p-8 shadow-lg border border-white/10">
                <h3 className="text-xl font-semibold mb-4">Our Mission</h3>
                <p className="text-foreground/70 mb-6">
                  Founders and business owners are always busy. We built
                  Chatriox to make marketing effortless with AI automation so
                  teams can focus on growth.
                </p>
                <h3 className="text-xl font-semibold mb-4">Our Vision</h3>
                <p className="text-foreground/70">
                  Marketing should be simple and effective for every business,
                  where smart automation connects companies and customers
                  instantly and effortlessly.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20 bg-slate-50 dark:bg-white/5">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-semibold tracking-tight mb-4">
              Our Values
            </h2>
            <p className="text-lg text-foreground/70">
              The principles that guide everything we do and every decision we
              make.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {values.map((v) => {
              const Icon = v.icon;
              return (
                <div
                  key={v.title}
                  className="bg-white/70 dark:bg-white/10 rounded-2xl p-8 text-center border border-white/20 hover:shadow-lg transition"
                >
                  <div className="w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6 bg-sky-500/10">
                    <Icon className="w-8 h-8 text-sky-600 dark:text-sky-400" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{v.title}</h3>
                  <p className="text-foreground/70 leading-relaxed">
                    {v.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <Section
        title="Meet Our Team"
        subtitle="The passionate people behind Chatriox who are dedicated to your success."
      >
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((p) => (
            <div key={p.name} className="text-center group">
              <div className="relative mb-6 flex justify-center">
                {/* Fixed Avatar with proper image handling */}
                <div className="relative h-32 w-32 rounded-full overflow-hidden ring-4 ring-sky-100 dark:ring-sky-900 shadow-lg">
                  <img 
                    src={p.img} 
                    alt={p.name}
                    className="h-full w-full object-cover object-center"
                  />
                  <div className="absolute inset-0 bg-gradient-to-br from-sky-400/20 to-emerald-400/20 opacity-0 group-hover:opacity-100 transition" />
                </div>
              </div>
              <h3 className="text-xl font-semibold mb-1">{p.name}</h3>
              <p className="text-sky-600 dark:text-sky-400 font-medium mb-2">
                {p.role}
              </p>
              <p className="text-foreground/70 text-sm leading-relaxed max-w-xs mx-auto">
                {p.bio}
              </p>
            </div>
          ))}
        </div>
        <div className="text-center mt-12">
          <div className="rounded-2xl p-8 max-w-2xl mx-auto bg-gradient-to-r from-sky-500/5 to-emerald-400/5">
            <h3 className="text-2xl font-semibold mb-3">Join Our Team</h3>
            <p className="text-foreground/70 mb-6">
              We're always looking for talented people who share our mission.
            </p>
            <a
              href="/careers"
              className="btn-gradient inline-flex items-center justify-center px-5 py-2.5 rounded-md text-white font-medium"
            >
              View Open Positions
            </a>
          </div>
        </div>
      </Section>

      <section className="py-16 md:py-20">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-semibold tracking-tight mb-4">
              Recognition & Awards
            </h2>
            <p className="text-lg text-foreground/70">
              We're honored to be recognized by industry leaders and customers
              alike.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6 md:gap-8">
            <div className="bg-white dark:bg-white/10 rounded-2xl p-8 text-center border border-white/20">
              <div className="w-16 h-16 bg-yellow-100 dark:bg-yellow-900/30 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Award className="w-8 h-8 text-yellow-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">SaaS Awards 2024</h3>
              <p className="text-foreground/70">
                Best Email Marketing Platform
              </p>
            </div>
            <div className="bg-white dark:bg-white/10 rounded-2xl p-8 text-center border border-white/20">
              <div className="w-16 h-16 bg-green-100 dark:bg-green-900/30 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Star className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">G2 Leader</h3>
              <p className="text-foreground/70">
                Top Performer in Email Marketing
              </p>
            </div>
            <div className="bg-white dark:bg-white/10 rounded-2xl p-8 text-center border border-white/20">
              <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900/30 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <TrendingUp className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Inc. 5000</h3>
              <p className="text-foreground/70">Fastest Growing Companies</p>
            </div>
          </div>
        </div>
      </section>

      <Section
        title="Certifications"
        className="scroll-mt-24"
        subtitle="Independent audits and standards we maintain."
      >
        <div
          id="certifications"
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4"
        >
          {[
            {
              name: "SOC 2 Type II",
              img: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/01/SOC_2_Logo.svg/512px-SOC_2_Logo.svg.png",
            },
            {
              name: "ISO 27001",
              img: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/50/ISO_IEC_27001_2013_Logo.svg/512px-ISO_IEC_27001_2013_Logo.svg.png",
            },
            {
              name: "GDPR",
              img: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/76/European_Union_logo.svg/512px-European_Union_logo.svg.png",
            },
            {
              name: "HIPAA",
              img: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/59/HIPAA_logo.svg/512px-HIPAA_logo.svg.png",
            },
          ].map((c) => (
            <div
              key={c.name}
              className="glass rounded-xl p-5 flex items-center gap-3"
            >
              <img
                src={c.img}
                alt={c.name}
                className="h-10 w-10 object-contain rounded"
                loading="lazy"
              />
              <div>
                <div className="font-medium">{c.name}</div>
                <div className="text-xs text-foreground/60">
                  Audited annually; reports available under NDA.
                </div>
              </div>
            </div>
          ))}
        </div>
      </Section>

      <section className="py-16 md:py-20 bg-slate-900 text-white">
        <div className="container grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-semibold mb-6">
              Get in Touch
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Have questions about Chatriox or want to learn more? We'd love to
              hear from you.
            </p>
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <div className="font-semibold">Email</div>
                  <div className="opacity-80">hello@chatriox.com</div>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <div className="font-semibold">Phone</div>
                  <div className="opacity-80">+1 (555) 123‑4567</div>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <div className="font-semibold">Headquarters</div>
                  <div className="opacity-80">San Francisco, CA</div>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-white/10 backdrop-blur rounded-3xl p-8">
            <h3 className="text-2xl font-semibold mb-6">Quick Facts</h3>
            <div className="space-y-4">
              <div className="flex justify-between items-center py-3 border-b border-white/20">
                <span className="opacity-80">Founded</span>
                <span className="font-semibold">2020</span>
              </div>
              <div className="flex justify-between items-center py-3 border-b border-white/20">
                <span className="opacity-80">Headquarters</span>
                <span className="font-semibold">San Francisco, CA</span>
              </div>
              <div className="flex justify-between items-center py-3 border-b border-white/20">
                <span className="opacity-80">Team Size</span>
                <span className="font-semibold">50+ Employees</span>
              </div>
              <div className="flex justify-between items-center py-3 border-b border-white/20">
                <span className="opacity-80">Funding</span>
                <span className="font-semibold">$25M Series A</span>
              </div>
              <div className="flex justify-between items-center py-3">
                <span className="opacity-80">Customers</span>
                <span className="font-semibold">100,000+</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}