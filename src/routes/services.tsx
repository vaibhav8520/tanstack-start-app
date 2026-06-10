import { createFileRoute } from "@tanstack/react-router";
import { Phone } from "lucide-react";
import { Reveal, StaggerChildren, StaggerItem } from "@/components/Reveal";
import { services } from "@/lib/site-data";
import { ServiceCard } from "./index";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Repair Services — Smart Solution Mumbai" },
      { name: "description", content: "Mobile, tablet, motherboard, display, battery, charging IC, data recovery, water damage and component-level repair in Fort Mumbai." },
      { property: "og:title", content: "Repair Services — Smart Solution" },
      { property: "og:description", content: "Eleven specialised repair services from a 4.9★ rated Mumbai workshop." },
      { property: "og:url", content: "/services" },
    ],
    links: [{ rel: "canonical", href: "/services" }],
  }),
  component: Services,
});

function Services() {
  return (
    <section className="px-4 sm:px-6 pt-8 pb-24">
      <div className="mx-auto max-w-7xl">
        <Reveal className="text-center max-w-3xl mx-auto">
          <span className="text-xs uppercase tracking-[0.3em] text-brand-orange font-semibold">Our Services</span>
          <h1 className="mt-3 text-5xl sm:text-6xl font-bold leading-[1.05]">
            Every repair. <span className="text-gradient">Done right.</span>
          </h1>
          <p className="mt-6 text-lg text-muted-foreground">
            From a cracked screen to a dead motherboard — our specialists handle the full spectrum of mobile and tablet repair with precision and transparency.
          </p>
        </Reveal>

        <StaggerChildren className="mt-16 grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map((s) => (
            <StaggerItem key={s.title}>
              <ServiceCard {...s} />
            </StaggerItem>
          ))}
        </StaggerChildren>

        <Reveal className="mt-20">
          <div className="glass-strong rounded-3xl p-10 sm:p-12 text-center shadow-luxury">
            <h2 className="text-3xl sm:text-4xl font-bold">Don't see your issue listed?</h2>
            <p className="mt-3 text-muted-foreground">If it has a screen and a battery, chances are we can fix it. Call us for a free no-obligation diagnosis.</p>
            <a href="tel:+919702515365" className="mt-6 inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-gradient-brand font-semibold text-primary-foreground shadow-glow-blue">
              <Phone className="size-4" /> Talk to a technician
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
