import { createFileRoute } from "@tanstack/react-router";
import { Phone, MessageCircle, MapPin, Clock, Mail } from "lucide-react";
import { Reveal } from "@/components/Reveal";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact Smart Solution — Mobile & Tablet Repair Fort Mumbai" },
      { name: "description", content: "Visit Smart Solution at Shop No. 120, Sahara Market, Fort Mumbai. Call +91 97025 15365. Open daily till 9 PM." },
      { property: "og:title", content: "Contact Smart Solution" },
      { property: "og:description", content: "Address, phone, hours and map for Smart Solution in Fort Mumbai." },
      { property: "og:url", content: "/contact" },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
  component: Contact,
});

function Contact() {
  return (
    <section className="px-4 sm:px-6 pt-8 pb-24">
      <div className="mx-auto max-w-7xl">
        <Reveal className="text-center max-w-3xl mx-auto mb-14">
          <span className="text-xs uppercase tracking-[0.3em] text-brand-orange font-semibold">Contact</span>
          <h1 className="mt-3 text-5xl sm:text-6xl font-bold leading-[1.05]">Come visit. <span className="text-gradient">We're easy to find.</span></h1>
          <p className="mt-6 text-lg text-muted-foreground">Walk-in or call ahead — we're happy to help any way that works for you.</p>
        </Reveal>

        <div className="grid lg:grid-cols-5 gap-6">
          <Reveal className="lg:col-span-2 space-y-4">
            <div className="glass-strong rounded-2xl p-7 shadow-luxury">
              <div className="flex items-center gap-3">
                <div className="size-11 rounded-xl bg-gradient-brand flex items-center justify-center shadow-glow-blue">
                  <MapPin className="size-5 text-primary-foreground" />
                </div>
                <h3 className="font-display font-bold text-lg">Smart Solution</h3>
              </div>
              <address className="not-italic mt-4 text-muted-foreground leading-relaxed text-sm">
                Shop No. 120,<br />
                Sahara Market,<br />
                Musafir Khana Road,<br />
                Near Sara Masjid,<br />
                Fort, Mumbai,<br />
                Maharashtra 400001
              </address>
            </div>

            <a href="tel:+919702515365" className="block glass-strong rounded-2xl p-7 hover-lift">
              <div className="flex items-center gap-3">
                <div className="size-11 rounded-xl bg-gradient-brand flex items-center justify-center shadow-glow-blue">
                  <Phone className="size-5 text-primary-foreground" />
                </div>
                <div>
                  <div className="text-xs uppercase tracking-wider text-muted-foreground">Call</div>
                  <div className="font-display font-bold text-lg">+91 97025 15365</div>
                </div>
              </div>
            </a>

            <a href="https://wa.me/919702515365" target="_blank" rel="noreferrer" className="block glass-strong rounded-2xl p-7 hover-lift">
              <div className="flex items-center gap-3">
                <div className="size-11 rounded-xl bg-whatsapp flex items-center justify-center shadow-glow-green">
                  <MessageCircle className="size-5 text-white" />
                </div>
                <div>
                  <div className="text-xs uppercase tracking-wider text-muted-foreground">WhatsApp</div>
                  <div className="font-display font-bold text-lg">Chat with us</div>
                </div>
              </div>
            </a>

            <div className="glass-strong rounded-2xl p-7">
              <div className="flex items-center gap-3">
                <div className="size-11 rounded-xl bg-gold flex items-center justify-center">
                  <Clock className="size-5 text-black" />
                </div>
                <div>
                  <div className="text-xs uppercase tracking-wider text-muted-foreground">Hours</div>
                  <div className="font-display font-bold text-lg">Open Daily · Till 9 PM</div>
                </div>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.15} className="lg:col-span-3">
            <div className="relative rounded-3xl overflow-hidden glass-strong shadow-luxury h-full min-h-[500px]">
              <iframe
                title="Smart Solution location"
                src="https://www.google.com/maps?q=Sahara+Market+Musafir+Khana+Road+Fort+Mumbai&output=embed"
                className="absolute inset-0 w-full h-full border-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
              />
            </div>
          </Reveal>
        </div>

        <Reveal className="mt-12">
          <a
            href="https://maps.app.goo.gl/kN1jwAVvvFUkxzzM9"
            target="_blank"
            rel="noreferrer"
            className="flex flex-wrap items-center justify-between gap-4 glass-strong rounded-2xl p-6 hover-lift"
          >
            <div className="flex items-center gap-3">
              <Mail className="size-5 text-brand-blue" />
              <span className="font-semibold">Open in Google Maps for turn-by-turn directions</span>
            </div>
            <span className="text-sm text-brand-orange font-semibold">Get directions →</span>
          </a>
        </Reveal>
      </div>
    </section>
  );
}
