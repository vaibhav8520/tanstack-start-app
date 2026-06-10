import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import { useEffect, type ReactNode } from "react";

import appCss from "../styles.css?url";
import logoAsset from "@/assets/smart-solution-logo.png.asset.json";
import { reportLovableError } from "../lib/lovable-error-reporting";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { FloatingButtons } from "@/components/FloatingButtons";
import { AmbientBackground } from "@/components/AmbientBackground";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center px-4">
      <div className="max-w-md text-center glass-strong rounded-3xl p-10 shadow-luxury">
        <h1 className="text-7xl font-bold text-gradient">404</h1>
        <h2 className="mt-4 text-xl font-semibold">Page not found</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <Link
          to="/"
          className="mt-6 inline-flex px-5 py-2.5 rounded-full bg-gradient-brand text-sm font-semibold text-primary-foreground shadow-glow-blue"
        >
          Back home
        </Link>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();
  useEffect(() => {
    reportLovableError(error, { boundary: "tanstack_root_error_component" });
  }, [error]);

  return (
    <div className="flex min-h-screen items-center justify-center px-4">
      <div className="max-w-md text-center glass-strong rounded-3xl p-10 shadow-luxury">
        <h1 className="text-xl font-semibold">This page didn't load</h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Something went wrong. Try refreshing or head back home.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <button
            onClick={() => { router.invalidate(); reset(); }}
            className="px-5 py-2.5 rounded-full bg-gradient-brand text-sm font-semibold text-primary-foreground"
          >
            Try again
          </button>
          <a href="/" className="px-5 py-2.5 rounded-full glass text-sm font-semibold">Go home</a>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Smart Solution — Mumbai's Trusted Mobile & Tablet Repair Experts" },
      { name: "description", content: "Professional mobile, tablet & motherboard repair in Fort Mumbai. Honest diagnostics, transparent pricing, fast turnaround. 4.9★ rated." },
      { name: "author", content: "Smart Solution" },
      { name: "keywords", content: "Mobile Repair Mumbai, Tablet Repair Mumbai, Motherboard Repair Mumbai, Mobile Repair Fort Mumbai, Phone Repair Mumbai, Smart Solution Mumbai, Display Replacement Mumbai, Charging IC Repair Mumbai, Data Recovery Mumbai, Tablet Service Center Mumbai" },
      { property: "og:title", content: "Smart Solution — Mumbai's Trusted Mobile & Tablet Repair Experts" },
      { property: "og:description", content: "Professional mobile, tablet & motherboard repair in Fort Mumbai. Honest diagnostics, transparent pricing, fast turnaround. 4.9★ rated." },
      { property: "og:type", content: "website" },
      { property: "og:site_name", content: "Smart Solution" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "theme-color", content: "#0a0f1f" },
      { name: "twitter:title", content: "Smart Solution — Mumbai's Trusted Mobile & Tablet Repair Experts" },
      { name: "twitter:description", content: "Professional mobile, tablet & motherboard repair in Fort Mumbai. Honest diagnostics, transparent pricing, fast turnaround. 4.9★ rated." },
      { property: "og:image", content: "https://storage.googleapis.com/gpt-engineer-file-uploads/attachments/og-images/f6f8728d-a356-4b30-a23f-c1bd0b1178b1" },
      { name: "twitter:image", content: "https://storage.googleapis.com/gpt-engineer-file-uploads/attachments/og-images/f6f8728d-a356-4b30-a23f-c1bd0b1178b1" },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "icon", type: "image/png", href: logoAsset.url },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "" },
      { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Space+Grotesk:wght@500;600;700&display=swap" },
    ],
    scripts: [{
      type: "application/ld+json",
      children: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        name: "Smart Solution",
        description: "Mobile & Tablet Repair Shop in Fort, Mumbai",
        telephone: "+91 97025 15365",
        address: {
          "@type": "PostalAddress",
          streetAddress: "Shop No. 120, Sahara Market, Musafir Khana Road, Near Sara Masjid",
          addressLocality: "Fort, Mumbai",
          addressRegion: "Maharashtra",
          postalCode: "400001",
          addressCountry: "IN",
        },
        aggregateRating: { "@type": "AggregateRating", ratingValue: "4.9", reviewCount: "34" },
        openingHours: "Mo-Su 10:00-21:00",
      }),
    }],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className="dark">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();

  return (
    <QueryClientProvider client={queryClient}>
      <AmbientBackground />
      <Header />
      <main className="pt-24">
        <Outlet />
      </main>
      <Footer />
      <FloatingButtons />
    </QueryClientProvider>
  );
}
