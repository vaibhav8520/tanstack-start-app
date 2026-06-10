import { createFileRoute, Link } from "@tanstack/react-router";
import { ShieldCheck, Wrench, Eye, HeartHandshake, ArrowRight } from "lucide-react";
import aboutImg from "@/assets/about-hero.jpg";
import { Reveal, StaggerChildren, StaggerItem } from "@/components/Reveal";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Smart Solution — Mobile & Tablet Repair Shop in Fort Mumbai" },
      { name: "description", content: "Trusted mobile and tablet repair center in Fort Mumbai specializing in motherboard-level diagnostics, displays, charging, software and data recovery." },
      { property: "og:title", content: "About Smart Solution" },
      { property: "og:description", content: "Our story, mission and craft." },
      { property: "og:url", content: "/about" },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
  component: About,
});

const values = [
  { icon: Eye, title: "Transparent Diagnostics", desc: "We walk you through what's wrong, what's needed, and why — before any work begins." },
  { icon: ShieldCheck, title: "Honest Pricing", desc: "Fair quotes with no hidden charges. If a repair isn't worth it, we'll say so." },
  { icon: Wrench, title: "Component-Level Expertise", desc: "Years of micro-soldering and board-level diagnostics most service centers refuse to attempt." },
  { icon: HeartHandshake, title: "Customer-First Service", desc: "Every device matters. Every customer leaves understanding their repair." },
];

function About() {
  return (
    <>
      <section className="px-4 sm:px-6 pt-8 pb-24">
        <div className="mx-auto max-w-7xl grid lg:grid-cols-2 gap-12 items-center">
          <Reveal>
            <span className="text-xs uppercase tracking-[0.3em] text-brand-orange font-semibold">About Us</span>
            <h1 className="mt-3 text-5xl sm:text-6xl font-bold leading-[1.05]">
              The repair shop Mumbai <span className="text-gradient">trusts with the impossible</span>.
            </h1>
            <p className="mt-6 text-lg text-muted-foreground">
              Smart Solution is a trusted mobile and tablet repair center located in Fort Mumbai. We specialize in motherboard-level diagnostics, display replacements, charging issues, software solutions, data recovery and complex repairs that many service centers refuse to handle.
            </p>
            <p className="mt-4 text-muted-foreground">
              Our mission is to provide transparent, affordable and reliable repair solutions while ensuring every customer understands the repair process.
            </p>
            <Link to="/services" className="mt-8 inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-gradient-brand font-semibold text-primary-foreground shadow-glow-blue">
              Explore our services <ArrowRight className="size-4" />
            </Link>
          </Reveal>
          <Reveal delay={0.2}>
            <div className="relative">
              <div className="absolute -inset-6 bg-gradient-brand opacity-20 blur-3xl rounded-full" />
              <img src={aboutImg} alt="Technician at work" width={1600} height={1024} loading="lazy" className="relative rounded-3xl shadow-luxury w-full" />
            </div>
          </Reveal>
        </div>
      </section>

      <section className="px-4 sm:px-6 mt-16">
        <div className="mx-auto max-w-7xl">
          <Reveal className="max-w-2xl">
            <span className="text-xs uppercase tracking-[0.3em] text-brand-blue font-semibold">What We Stand For</span>
            <h2 className="mt-3 text-4xl sm:text-5xl font-bold">Built on trust. Earned every repair.</h2>
          </Reveal>
          <StaggerChildren className="mt-12 grid md:grid-cols-2 gap-5">
            {values.map(({ icon: Icon, title, desc }) => (
              <StaggerItem key={title}>
                <div className="glass-strong rounded-2xl p-8 hover-lift h-full">
                  <div className="size-12 rounded-xl bg-gradient-brand flex items-center justify-center shadow-glow-blue">
                    <Icon className="size-6 text-primary-foreground" />
                  </div>
                  <h3 className="mt-5 text-xl font-bold">{title}</h3>
                  <p className="mt-2 text-muted-foreground">{desc}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerChildren>
        </div>
      </section>

      <section className="px-4 sm:px-6 mt-32">
        <div className="mx-auto max-w-5xl">
          <Reveal>
            <div className="glass-strong rounded-3xl p-10 sm:p-16 text-center shadow-luxury relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-hero opacity-50" />
              <div className="relative">
                <h2 className="text-3xl sm:text-4xl font-bold">"We don't just repair devices — we restore peace of mind."</h2>
                <p className="mt-4 text-muted-foreground">— The Smart Solution team</p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
