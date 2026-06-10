import { Link } from "@tanstack/react-router";
import { Phone, MapPin, Clock, Star } from "lucide-react";
import logoAsset from "@/assets/smart-solution-logo.png.asset.json";

export function Footer() {
  return (
    <footer className="relative mt-32 border-t border-white/5">
      <div className="absolute inset-0 bg-gradient-hero opacity-30 pointer-events-none" />
      <div className="relative mx-auto max-w-7xl px-6 py-16">
        <div className="grid gap-12 lg:grid-cols-4">
          <div className="lg:col-span-2">
            <img src={logoAsset.url} alt="Smart Solution" className="h-16 w-auto mb-4" />
            <p className="text-muted-foreground max-w-md">
              Mumbai's trusted mobile & tablet repair experts. Honest diagnostics, transparent pricing, fast turnaround — every device, every time.
            </p>
            <div className="mt-6 flex items-center gap-2 text-sm">
              <Star className="size-4 fill-gold text-gold" />
              <span className="font-semibold">4.9</span>
              <span className="text-muted-foreground">· 34+ Google Reviews</span>
            </div>
          </div>

          <div>
            <h4 className="font-display font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><Link to="/" className="hover:text-foreground transition-colors">Home</Link></li>
              <li><Link to="/about" className="hover:text-foreground transition-colors">About</Link></li>
              <li><Link to="/services" className="hover:text-foreground transition-colors">Services</Link></li>
              <li><Link to="/reviews" className="hover:text-foreground transition-colors">Reviews</Link></li>
              <li><Link to="/gallery" className="hover:text-foreground transition-colors">Gallery</Link></li>
              <li><Link to="/contact" className="hover:text-foreground transition-colors">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-display font-semibold mb-4">Get in Touch</h4>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li className="flex gap-2"><Phone className="size-4 mt-0.5 shrink-0 text-brand-blue" /><a href="tel:+919702515365" className="hover:text-foreground">+91 97025 15365</a></li>
              <li className="flex gap-2"><MapPin className="size-4 mt-0.5 shrink-0 text-brand-orange" />Shop No. 120, Sahara Market, Musafir Khana Road, Fort, Mumbai 400001</li>
              <li className="flex gap-2"><Clock className="size-4 mt-0.5 shrink-0 text-gold" />Open Daily · Closes 9 PM</li>
            </ul>
            <a
              href="https://maps.app.goo.gl/kN1jwAVvvFUkxzzM9"
              target="_blank"
              rel="noreferrer"
              className="mt-5 inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-brand text-sm font-semibold text-primary-foreground shadow-glow-blue"
            >
              <Star className="size-4 fill-current" />
              Review Us On Google
            </a>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-muted-foreground">
          <span>Copyright © Smart Solution. All Rights Reserved.</span>
          <span>Crafted with precision in Fort, Mumbai</span>
        </div>
      </div>
    </footer>
  );
}
