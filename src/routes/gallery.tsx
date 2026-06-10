import { createFileRoute } from "@tanstack/react-router";
import { Reveal, StaggerChildren, StaggerItem } from "@/components/Reveal";
import devices from "@/assets/gallery-devices.jpg";
import shop from "@/assets/gallery-shop.jpg";
import workspace from "@/assets/gallery-workspace.jpg";
import tablet from "@/assets/gallery-tablet-repair.jpg";
import parts from "@/assets/gallery-parts.jpg";
import customer from "@/assets/gallery-customer.jpg";
import microscope from "@/assets/gallery-microscope.jpg";
import motherboard from "@/assets/service-motherboard.jpg";
import display from "@/assets/service-display.jpg";
import battery from "@/assets/service-battery.jpg";
import water from "@/assets/service-water.jpg";
import mobile from "@/assets/service-mobile.jpg";

export const Route = createFileRoute("/gallery")({
  head: () => ({
    meta: [
      { title: "Gallery — Smart Solution Mumbai" },
      { name: "description", content: "A look inside Smart Solution: our shop, workspace, repair process and finished work." },
      { property: "og:title", content: "Gallery — Smart Solution" },
      { property: "og:description", content: "Photos of our shop, repair workspace and finished work." },
      { property: "og:url", content: "/gallery" },
    ],
    links: [{ rel: "canonical", href: "/gallery" }],
  }),
  component: Gallery,
});

const images = [
  { src: shop, label: "Store Photos", h: "row-span-2" },
  { src: motherboard, label: "Motherboard Repairs", h: "" },
  { src: tablet, label: "Tablet Repairs", h: "row-span-2" },
  { src: workspace, label: "Workspace", h: "" },
  { src: devices, label: "Customer Devices", h: "row-span-2" },
  { src: microscope, label: "Component Level", h: "" },
  { src: display, label: "Display Replacement", h: "" },
  { src: parts, label: "Spare Parts", h: "" },
  { src: customer, label: "Repaired & Delivered", h: "row-span-2" },
  { src: battery, label: "Battery Service", h: "" },
  { src: water, label: "Water Damage", h: "" },
  { src: mobile, label: "Repair Work", h: "" },
];

function Gallery() {
  return (
    <section className="px-4 sm:px-6 pt-8 pb-24">
      <div className="mx-auto max-w-7xl">
        <Reveal className="text-center max-w-3xl mx-auto mb-14">
          <span className="text-xs uppercase tracking-[0.3em] text-brand-blue font-semibold">Gallery</span>
          <h1 className="mt-3 text-5xl sm:text-6xl font-bold">A look inside our <span className="text-gradient">craft</span>.</h1>
          <p className="mt-6 text-lg text-muted-foreground">Our shop, our bench, our process — and the devices we've brought back to life.</p>
        </Reveal>

        <StaggerChildren className="grid grid-cols-2 lg:grid-cols-4 auto-rows-[160px] sm:auto-rows-[200px] gap-3">
          {images.map((img, i) => (
            <StaggerItem key={i} className={img.h}>
              <div className="group relative h-full w-full rounded-2xl overflow-hidden glass hover-lift">
                <img src={img.src} alt={img.label} loading="lazy" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent opacity-80 group-hover:opacity-100 transition-opacity" />
                <div className="absolute bottom-3 left-3 right-3">
                  <span className="text-xs font-semibold uppercase tracking-wider glass-strong px-2.5 py-1 rounded-full">{img.label}</span>
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerChildren>
      </div>
    </section>
  );
}
