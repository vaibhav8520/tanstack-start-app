import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { Phone, MessageCircle, MapPin, Star, ShieldCheck, Zap, Wrench, BadgeCheck, Sparkles, ArrowRight } from "lucide-react";
import heroImg from "@/assets/hero-workspace.jpg";
import { Reveal, StaggerChildren, StaggerItem } from "@/components/Reveal";
import { services } from "@/lib/site-data";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Smart Solution — Mumbai's Trusted Mobile & Tablet Repair Experts" },
      { name: "description", content: "Premium mobile, tablet & motherboard repair in Fort Mumbai. 4.9★ rated. Honest diagnostics, transparent pricing, fast turnaround." },
      { property: "og:title", content: "Smart Solution — Mobile & Tablet Repair Mumbai" },
      { property: "og:description", content: "Professional repair services with honest diagnostics & fast turnaround." },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Home,
});

const whyChoose = [
  { icon: Wrench, title: "Expert Motherboard Repairs", desc: "Component-level work others avoid." },
  { icon: Zap, title: "Fast Turnaround", desc: "Same-day on most repairs." },
  { icon: ShieldCheck, title: "Honest Diagnostics", desc: "We'll tell you if it isn't worth it." },
  { icon: BadgeCheck, title: "Genuine Parts", desc: "OEM-grade & certified components." },
  { icon: Sparkles, title: "Affordable Pricing", desc: "Transparent, upfront quotes." },
  { icon: Wrench, title: "Tablet Specialists", desc: "Digitizers, displays & boards." },
  { icon: ShieldCheck, title: "Enterprise Support", desc: "Fleet maintenance for businesses." },
  { icon: BadgeCheck, title: "Pro Technicians", desc: "Years of board-level experience." },
  { icon: Sparkles, title: "Clear Communication", desc: "No jargon, no surprises." },
  { icon: Star, title: "Customer Satisfaction", desc: "4.9★ across 34+ reviews." },
];

const stats = [
  { value: "4.9★", label: "Google Rating" },
  { value: "34+", label: "Google Reviews" },
  { value: "1000+", label: "Devices Repaired" },
  { value: "100%", label: "Customer Focused" },
];

function Home() {
  return (
    <>
      {/* HERO */}
      <section className="relative px-4 sm:px-6 pt-8 pb-32">
        <div className="mx-auto max-w-7xl">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7 }}
                className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass text-xs font-medium tracking-wider uppercase"
              >
                <Star className="size-3.5 fill-gold text-gold" />
                4.9 ★ Rated · Fort, Mumbai
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.9, delay: 0.1 }}
                className="mt-6 text-5xl sm:text-6xl lg:text-7xl font-bold leading-[1.05] tracking-tight"
              >
                Mumbai's Trusted{" "}
                <span className="text-gradient">Mobile & Tablet</span>{" "}
                Repair Experts
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.9, delay: 0.25 }}
                className="mt-6 text-lg text-muted-foreground max-w-xl"
              >
                Professional mobile phone, tablet, motherboard and component-level repair with honest diagnostics, transparent pricing and fast turnaround.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.9, delay: 0.4 }}
                className="mt-8 flex flex-wrap gap-3"
              >
                <a href="tel:+919702515365" className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-gradient-brand font-semibold text-primary-foreground shadow-glow-blue hover:shadow-glow-orange transition-all">
                  <Phone className="size-4" /> Call Now
                </a>
                <a href="https://wa.me/919702515365" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-whatsapp font-semibold text-white shadow-glow-green">
                  <MessageCircle className="size-4" /> WhatsApp Now
                </a>
                <a href="https://maps.app.goo.gl/kN1jwAVvvFUkxzzM9" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full glass font-semibold">
                  <MapPin className="size-4" /> Get Directions
                </a>
              </motion.div>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 0.6 }}
                className="mt-10 flex items-center gap-6 text-xs text-muted-foreground"
              >
                <div className="flex -space-x-2">
                  {[...Array(4)].map((_, i) => (
                    <div key={i} className="size-7 rounded-full bg-gradient-brand border-2 border-background" />
                  ))}
                </div>
                <span>1000+ devices repaired with care</span>
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.2 }}
              className="relative"
            >
              <div className="absolute -inset-8 bg-gradient-brand opacity-30 blur-3xl rounded-full" />
              <div className="relative rounded-3xl overflow-hidden glass-strong shadow-luxury">
                <img src={heroImg} alt="Smart Solution repair workspace" width={1920} height={1280} className="w-full aspect-[4/3] object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent" />
                <div className="absolute bottom-6 left-6 right-6 flex items-center justify-between">
                  <div className="glass-strong rounded-2xl px-4 py-3">
                    <div className="text-xs text-muted-foreground">Open today</div>
                    <div className="text-sm font-semibold">Till 9:00 PM</div>
                  </div>
                  <div className="glass-strong rounded-2xl px-4 py-3 flex items-center gap-2">
                    <Star className="size-4 fill-gold text-gold" />
                    <span className="font-semibold">4.9</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="px-4 sm:px-6">
        <div className="mx-auto max-w-7xl">
          <div className="glass-strong rounded-3xl p-8 sm:p-12 grid grid-cols-2 lg:grid-cols-4 gap-8 shadow-luxury">
            {stats.map((s, i) => (
              <Reveal key={s.label} delay={i * 0.1} className="text-center">
                <div className="text-4xl sm:text-5xl font-bold text-gradient">{s.value}</div>
                <div className="mt-2 text-xs uppercase tracking-wider text-muted-foreground">{s.label}</div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* WHY CHOOSE */}
      <section className="px-4 sm:px-6 mt-32">
        <div className="mx-auto max-w-7xl">
          <Reveal className="text-center max-w-2xl mx-auto">
            <span className="text-xs uppercase tracking-[0.3em] text-brand-orange font-semibold">Why Choose Us</span>
            <h2 className="mt-3 text-4xl sm:text-5xl font-bold">Repairs done <span className="text-gradient">the right way</span></h2>
            <p className="mt-4 text-muted-foreground">Ten reasons Mumbai keeps coming back to Smart Solution.</p>
          </Reveal>

          <StaggerChildren className="mt-14 grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4">
            {whyChoose.map(({ icon: Icon, title, desc }) => (
              <StaggerItem key={title}>
                <div className="group glass rounded-2xl p-6 h-full hover-lift relative overflow-hidden">
                  <div className="absolute -top-12 -right-12 size-32 rounded-full bg-gradient-brand opacity-0 group-hover:opacity-20 blur-2xl transition-opacity duration-500" />
                  <div className="size-11 rounded-xl bg-gradient-brand flex items-center justify-center mb-4 shadow-glow-blue">
                    <Icon className="size-5 text-primary-foreground" />
                  </div>
                  <h3 className="font-semibold">{title}</h3>
                  <p className="mt-1.5 text-sm text-muted-foreground">{desc}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerChildren>
        </div>
      </section>

      {/* SERVICES PREVIEW */}
      <section className="px-4 sm:px-6 mt-32">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-wrap items-end justify-between gap-6 mb-12">
            <Reveal>
              <span className="text-xs uppercase tracking-[0.3em] text-brand-blue font-semibold">What We Fix</span>
              <h2 className="mt-3 text-4xl sm:text-5xl font-bold max-w-xl">Premium repair services for <span className="text-gradient">every device</span></h2>
            </Reveal>
            <Reveal>
              <Link to="/services" className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full glass font-semibold text-sm hover-lift">
                View all services <ArrowRight className="size-4" />
              </Link>
            </Reveal>
          </div>

          <StaggerChildren className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {services.slice(0, 6).map((s) => (
              <StaggerItem key={s.title}>
                <ServiceCard {...s} />
              </StaggerItem>
            ))}
          </StaggerChildren>
        </div>
      </section>

      {/* CTA */}
      <section className="px-4 sm:px-6 mt-32">
        <div className="mx-auto max-w-7xl">
          <Reveal>
            <div className="relative overflow-hidden rounded-3xl glass-strong shadow-luxury p-10 sm:p-16">
              <div className="absolute -top-32 -left-32 size-96 rounded-full bg-brand-blue/30 blur-3xl animate-float" />
              <div className="absolute -bottom-32 -right-32 size-96 rounded-full bg-brand-orange/30 blur-3xl animate-float-slow" />
              <div className="relative max-w-2xl">
                <h2 className="text-4xl sm:text-5xl font-bold">Your device deserves a <span className="text-gradient">second life</span>.</h2>
                <p className="mt-4 text-muted-foreground text-lg">Walk in or get in touch — we'll diagnose honestly and quote transparently. No hidden charges, ever.</p>
                <div className="mt-8 flex flex-wrap gap-3">
                  <a href="tel:+919702515365" className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-gradient-brand font-semibold text-primary-foreground shadow-glow-blue"><Phone className="size-4" /> Call +91 97025 15365</a>
                  <Link to="/contact" className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full glass font-semibold">Visit our shop <ArrowRight className="size-4" /></Link>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}

export function ServiceCard({ title, desc, image }: { title: string; desc: string; image: string }) {
  return (
    <div className="group relative overflow-hidden rounded-2xl glass hover-lift">
      <div className="aspect-[4/3] overflow-hidden">
        <img src={image} alt={title} loading="lazy" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />
      </div>
      <div className="absolute bottom-0 inset-x-0 p-6">
        <h3 className="text-xl font-bold">{title}</h3>
        <p className="mt-1.5 text-sm text-muted-foreground line-clamp-2">{desc}</p>
        <div className="mt-3 inline-flex items-center gap-1.5 text-xs font-semibold text-brand-orange opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-500">
          Learn more <ArrowRight className="size-3.5" />
        </div>
      </div>
    </div>
  );
}
