import { Phone, MessageCircle } from "lucide-react";

export function FloatingButtons() {
  return (
    <div className="fixed bottom-5 right-5 z-50 flex flex-col gap-4">
      <a
        href="https://wa.me/919702515365"
        target="_blank"
        rel="noreferrer"
        aria-label="WhatsApp"
        className="relative group"
      >
        <span className="absolute inset-0 rounded-full bg-whatsapp animate-ripple" />
        <span className="absolute inset-0 rounded-full bg-whatsapp animate-ripple [animation-delay:1.2s]" />
        <span className="relative flex items-center justify-center size-14 rounded-full bg-whatsapp text-white shadow-glow-green group-hover:scale-110 transition-transform duration-300">
          <MessageCircle className="size-6" />
        </span>
      </a>
      <a
        href="tel:+919702515365"
        aria-label="Call"
        className="relative group"
      >
        <span className="absolute inset-0 rounded-full bg-gold animate-ripple" />
        <span className="relative flex items-center justify-center size-14 rounded-full bg-gold text-black shadow-[0_0_40px_-5px_oklch(0.82_0.14_85)] group-hover:scale-110 transition-transform duration-300">
          <Phone className="size-6" />
        </span>
      </a>
    </div>
  );
}
