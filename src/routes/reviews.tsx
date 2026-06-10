import { createFileRoute } from "@tanstack/react-router";
import { Star, BadgeCheck } from "lucide-react";
import { Reveal, StaggerChildren, StaggerItem } from "@/components/Reveal";
import { writtenReviews, happyCustomers } from "@/lib/site-data";

export const Route = createFileRoute("/reviews")({
  head: () => ({
    meta: [
      { title: "Customer Reviews — Smart Solution Mumbai" },
      { name: "description", content: "Real 5-star Google reviews from Smart Solution customers in Fort Mumbai." },
      { property: "og:title", content: "Customer Reviews — Smart Solution" },
      { property: "og:description", content: "What our customers say about our mobile and tablet repair work." },
      { property: "og:url", content: "/reviews" },
    ],
    links: [{ rel: "canonical", href: "/reviews" }],
  }),
  component: Reviews,
});

function Stars() {
  return (
    <div className="flex gap-0.5 text-gold">
      {[...Array(5)].map((_, i) => <Star key={i} className="size-4 fill-current" />)}
    </div>
  );
}

function initials(name: string) {
  return name.split(" ").slice(0, 2).map(s => s[0]?.toUpperCase()).join("");
}

function gradientFor(name: string) {
  const hues = [220, 250, 30, 50, 280, 200, 340, 150];
  const h = hues[name.charCodeAt(0) % hues.length];
  return `linear-gradient(135deg, oklch(0.6 0.18 ${h}), oklch(0.7 0.18 ${(h + 60) % 360}))`;
}

function Reviews() {
  return (
    <>
      <section className="px-4 sm:px-6 pt-8 pb-16">
        <div className="mx-auto max-w-7xl">
          <Reveal className="text-center max-w-3xl mx-auto">
            <span className="text-xs uppercase tracking-[0.3em] text-brand-orange font-semibold">Reviews</span>
            <h1 className="mt-3 text-5xl sm:text-6xl font-bold leading-[1.05]">
              4.9★ across <span className="text-gradient">34+ Google Reviews</span>
            </h1>
            <p className="mt-6 text-lg text-muted-foreground">Every review is unedited, sourced from real Google customers.</p>
            <a
              href="https://maps.app.goo.gl/kN1jwAVvvFUkxzzM9"
              target="_blank"
              rel="noreferrer"
              className="mt-8 inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-gradient-brand font-semibold text-primary-foreground shadow-glow-blue"
            >
              <Star className="size-4 fill-current" /> Review Us On Google
            </a>
          </Reveal>
        </div>
      </section>

      <section className="px-4 sm:px-6">
        <div className="mx-auto max-w-7xl">
          <StaggerChildren className="columns-1 md:columns-2 lg:columns-3 gap-5">
            {writtenReviews.map((r) => (
              <StaggerItem key={r.name} className="break-inside-avoid mb-5">
                <div className="glass-strong rounded-2xl p-6 hover-lift">
                  <div className="flex items-start gap-3">
                    <div
                      className="size-12 rounded-full flex items-center justify-center font-bold text-white shrink-0 shadow-glow-blue"
                      style={{ background: gradientFor(r.name) }}
                    >
                      {initials(r.name)}
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2">
                        <h3 className="font-semibold truncate">{r.name}</h3>
                        <BadgeCheck className="size-4 text-brand-blue shrink-0" />
                      </div>
                      <div className="flex items-center gap-2 mt-0.5">
                        <Stars />
                        <span className="text-xs text-muted-foreground">{r.when}</span>
                      </div>
                    </div>
                  </div>
                  <p className="mt-4 text-sm leading-relaxed text-foreground/90">{r.text}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerChildren>
        </div>
      </section>

      <section className="px-4 sm:px-6 mt-24">
        <div className="mx-auto max-w-7xl">
          <Reveal className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs uppercase tracking-[0.3em] text-brand-blue font-semibold">More Happy Customers</span>
            <h2 className="mt-3 text-4xl sm:text-5xl font-bold">A growing family of <span className="text-gradient">satisfied customers</span></h2>
          </Reveal>

          <StaggerChildren className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3" stagger={0.03}>
            {happyCustomers.map((name) => (
              <StaggerItem key={name}>
                <div className="glass rounded-2xl p-4 hover-lift">
                  <div className="flex items-center gap-3">
                    <div
                      className="size-10 rounded-full flex items-center justify-center text-xs font-bold text-white shrink-0"
                      style={{ background: gradientFor(name) }}
                    >
                      {initials(name)}
                    </div>
                    <div className="min-w-0">
                      <div className="text-sm font-medium truncate">{name}</div>
                      <div className="flex items-center gap-1 mt-0.5 text-[10px] text-muted-foreground uppercase tracking-wider">
                        <Star className="size-3 fill-gold text-gold" /> Verified Customer
                      </div>
                    </div>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerChildren>

          <div className="mt-16 text-center">
            <a
              href="https://maps.app.goo.gl/kN1jwAVvvFUkxzzM9"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-gradient-brand font-semibold text-primary-foreground shadow-glow-blue"
            >
              <Star className="size-4 fill-current" /> Review Us On Google
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
