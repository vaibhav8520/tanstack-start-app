export function AmbientBackground() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
      <div className="absolute -top-40 -left-40 size-[600px] rounded-full bg-brand-blue/20 blur-[120px] animate-float" />
      <div className="absolute top-1/2 -right-40 size-[500px] rounded-full bg-brand-orange/15 blur-[120px] animate-float-slow" />
      <div className="absolute bottom-0 left-1/3 size-[400px] rounded-full bg-primary/15 blur-[120px] animate-float" />
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            "linear-gradient(oklch(1 0 0 / 0.6) 1px, transparent 1px), linear-gradient(90deg, oklch(1 0 0 / 0.6) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
          maskImage: "radial-gradient(ellipse at center, black 30%, transparent 80%)",
        }}
      />
    </div>
  );
}
