export default function Home() {
  const plugins = [
    {
      name: "Chordia",
      price: "€29",
      tagline: "Chord-melody generator for instant inspiration",
      icon: (
        <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-8 h-8">
          <circle cx="24" cy="24" r="20" fill="url(#g1)" opacity="0.9" />
          <path d="M16 24 Q20 16 24 24 Q28 32 32 24" stroke="#e8e8e8" strokeWidth="2" strokeLinecap="round" fill="none" />
          <defs>
            <radialGradient id="g1" cx="35%" cy="30%" r="70%">
              <stop offset="0%" stopColor="#a855f7" />
              <stop offset="100%" stopColor="#7500f2" stopOpacity="0.4" />
            </radialGradient>
          </defs>
        </svg>
      ),
    },
    {
      name: "KeyFinder",
      price: "€9",
      tagline: "Real-time musical key detection from audio",
      icon: (
        <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-8 h-8">
          <circle cx="24" cy="24" r="20" fill="url(#g2)" opacity="0.9" />
          <circle cx="20" cy="22" r="5" stroke="#e8e8e8" strokeWidth="2" fill="none" />
          <path d="M24 26 L24 34 L27 31 M24 34 L21 31" stroke="#e8e8e8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          <defs>
            <radialGradient id="g2" cx="35%" cy="30%" r="70%">
              <stop offset="0%" stopColor="#a855f7" />
              <stop offset="100%" stopColor="#7500f2" stopOpacity="0.4" />
            </radialGradient>
          </defs>
        </svg>
      ),
    },
    {
      name: "Tempo",
      price: "€9",
      tagline: "BPM detector with MIDI clock sync output",
      icon: (
        <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-8 h-8">
          <circle cx="24" cy="24" r="20" fill="url(#g3)" opacity="0.9" />
          <path d="M16 32 L18 24 L22 28 L26 18 L30 26 L32 22" stroke="#e8e8e8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none" />
          <defs>
            <radialGradient id="g3" cx="35%" cy="30%" r="70%">
              <stop offset="0%" stopColor="#a855f7" />
              <stop offset="100%" stopColor="#7500f2" stopOpacity="0.4" />
            </radialGradient>
          </defs>
        </svg>
      ),
    },
    {
      name: "Reveal",
      price: "€15",
      tagline: "Chord progression analyser with harmonic insight",
      icon: (
        <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-8 h-8">
          <circle cx="24" cy="24" r="20" fill="url(#g4)" opacity="0.9" />
          <rect x="14" y="28" width="4" height="6" rx="1" fill="#e8e8e8" opacity="0.9" />
          <rect x="20" y="22" width="4" height="12" rx="1" fill="#e8e8e8" opacity="0.9" />
          <rect x="26" y="18" width="4" height="16" rx="1" fill="#e8e8e8" opacity="0.9" />
          <defs>
            <radialGradient id="g4" cx="35%" cy="30%" r="70%">
              <stop offset="0%" stopColor="#a855f7" />
              <stop offset="100%" stopColor="#7500f2" stopOpacity="0.4" />
            </radialGradient>
          </defs>
        </svg>
      ),
    },
  ];

  return (
    <div className="min-h-screen" style={{ background: "#05000f", color: "#e8e0f5" }}>

      {/* Nav */}
      <nav
        className="sticky top-0 z-50 flex items-center justify-between px-6 py-4 md:px-12"
        style={{
          background: "rgba(5,0,15,0.85)",
          backdropFilter: "blur(16px)",
          WebkitBackdropFilter: "blur(16px)",
          borderBottom: "1px solid rgba(117,0,242,0.12)",
        }}
      >
        <div className="flex items-center gap-2">
          <div
            className="h-6 w-6 rounded-md"
            style={{ background: "linear-gradient(135deg, #a855f7, #7500f2)" }}
          />
          <span className="text-lg font-semibold" style={{ color: "#f0ecff", letterSpacing: "-0.025em" }}>
            SonaVerse
          </span>
        </div>
        <div className="flex items-center gap-4">
          <a href="#plugins" className="hidden text-sm sm:block" style={{ color: "#9490a8" }}>Plugins</a>
          <a href="#how-it-works" className="hidden text-sm sm:block" style={{ color: "#9490a8" }}>How it works</a>
          <a
            href="/download"
            className="rounded-lg px-5 py-2 text-sm font-medium"
            style={{ background: "#7500f2", color: "#fff", boxShadow: "0 0 16px rgba(117,0,242,0.35)" }}
          >
            Download
          </a>
        </div>
      </nav>

      {/* Hero */}
      <section className="relative flex flex-col items-center justify-center overflow-hidden px-6 pt-28 pb-24 text-center md:pt-36 md:pb-32">
        {/* Ambient glow */}
        <div
          className="pointer-events-none absolute left-1/2 top-0 -translate-x-1/2 h-[500px] w-[900px] rounded-full opacity-20 blur-3xl"
          style={{ background: "radial-gradient(ellipse, #7500f2 0%, transparent 70%)" }}
        />
        <div
          className="relative mb-5 inline-block rounded-full px-4 py-1 text-xs font-semibold uppercase tracking-widest"
          style={{ background: "rgba(117,0,242,0.12)", color: "#a855f7", border: "1px solid rgba(168,85,247,0.22)" }}
        >
          VST3 · macOS
        </div>
        <h1
          className="relative mb-6 max-w-3xl text-5xl font-bold leading-tight md:text-6xl lg:text-7xl"
          style={{ color: "#f0ecff", letterSpacing: "-0.04em" }}
        >
          Your Creative
          <br />
          <span style={{ background: "linear-gradient(135deg, #c084fc 0%, #7500f2 70%)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
            Toolkit
          </span>
        </h1>
        <p className="relative mb-10 max-w-lg text-base leading-relaxed md:text-lg" style={{ color: "#9490a8" }}>
          Professional audio plugins for music producers.
          Detect keys, generate chords, analyse tempo — right inside your DAW.
        </p>
        <div className="relative flex flex-col items-center gap-4 sm:flex-row">
          <a
            href="/download"
            className="flex items-center gap-2 rounded-lg px-8 py-3 text-sm font-semibold"
            style={{ background: "#7500f2", color: "#fff", boxShadow: "0 0 28px rgba(117,0,242,0.45)" }}
          >
            <svg viewBox="0 0 20 20" fill="currentColor" className="h-4 w-4">
              <path fillRule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
            Download Free
          </a>
          <a
            href="#plugins"
            className="rounded-lg px-8 py-3 text-sm font-medium"
            style={{ color: "#c4b8e8", border: "1px solid rgba(168,85,247,0.22)", background: "transparent" }}
          >
            Browse Plugins
          </a>
        </div>
      </section>

      {/* Plugins grid */}
      <section id="plugins" className="px-6 pb-24 md:px-12 lg:px-24">
        <div className="mx-auto max-w-5xl">
          <h2
            className="mb-3 text-center text-xs font-semibold uppercase tracking-widest"
            style={{ color: "#7500f2" }}
          >
            Plugins
          </h2>
          <p className="mb-12 text-center text-2xl font-semibold" style={{ color: "#f0ecff", letterSpacing: "-0.02em" }}>
            Every tool you need in the studio
          </p>
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
            {plugins.map((plugin) => (
              <div
                key={plugin.name}
                className="group relative rounded-xl p-6 transition-all duration-200"
                style={{
                  background: "rgba(255,255,255,0.03)",
                  border: "1px solid rgba(117,0,242,0.18)",
                }}
              >
                {/* subtle top glow */}
                <div
                  className="pointer-events-none absolute inset-x-0 top-0 h-px"
                  style={{ background: "linear-gradient(90deg, transparent, rgba(168,85,247,0.4), transparent)" }}
                />
                <div className="mb-4 flex items-center gap-3">
                  {plugin.icon}
                  <div>
                    <div className="text-base font-semibold" style={{ color: "#f0ecff" }}>
                      {plugin.name}
                    </div>
                    <div className="text-xs" style={{ color: "#a855f7" }}>
                      {plugin.price}
                    </div>
                  </div>
                </div>
                <p className="text-sm leading-relaxed" style={{ color: "#9490a8" }}>
                  {plugin.tagline}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features row */}
      <section className="px-6 pb-24 md:px-12 lg:px-24">
        <div
          className="mx-auto max-w-5xl rounded-2xl px-8 py-12"
          style={{ background: "rgba(117,0,242,0.06)", border: "1px solid rgba(117,0,242,0.15)" }}
        >
          <div className="grid grid-cols-1 gap-10 text-center sm:grid-cols-3">
            {[
              {
                icon: (
                  <svg viewBox="0 0 24 24" fill="none" className="mx-auto mb-3 h-6 w-6" style={{ color: "#a855f7" }}>
                    <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                ),
                label: "VST3 Native",
                desc: "Built on JUCE. Works with FL Studio, Ableton, Logic & more.",
              },
              {
                icon: (
                  <svg viewBox="0 0 24 24" fill="none" className="mx-auto mb-3 h-6 w-6" style={{ color: "#a855f7" }}>
                    <rect x="3" y="4" width="18" height="14" rx="2" stroke="currentColor" strokeWidth="1.5" />
                    <path d="M8 20h8M12 18v2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                  </svg>
                ),
                label: "macOS 12+",
                desc: "Apple Silicon & Intel. Signed, notarized, ready to run.",
              },
              {
                icon: (
                  <svg viewBox="0 0 24 24" fill="none" className="mx-auto mb-3 h-6 w-6" style={{ color: "#a855f7" }}>
                    <path d="M12 2v10l4 2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="1.5" />
                  </svg>
                ),
                label: "Instant Download",
                desc: "No account required. Download, install, make music.",
              },
            ].map((f) => (
              <div key={f.label}>
                {f.icon}
                <div className="mb-1 text-sm font-semibold" style={{ color: "#f0ecff" }}>
                  {f.label}
                </div>
                <div className="text-xs leading-relaxed" style={{ color: "#9490a8" }}>
                  {f.desc}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section id="how-it-works" className="px-6 pb-24 md:px-12 lg:px-24">
        <div className="mx-auto max-w-5xl">
          <p className="mb-2 text-center text-xs font-semibold uppercase tracking-widest" style={{ color: "#7500f2" }}>
            Getting Started
          </p>
          <h2
            className="mb-14 text-center text-2xl font-semibold md:text-3xl"
            style={{ color: "#f0ecff", letterSpacing: "-0.025em" }}
          >
            How it works
          </h2>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {[
              {
                num: "01",
                title: "Download the app",
                desc: "Install SonaVerse on your Mac. Free, signed and notarized — no account required.",
              },
              {
                num: "02",
                title: "Buy a plugin",
                desc: "Pick any plugin from the store. One-time purchase, lifetime license.",
              },
              {
                num: "03",
                title: "Activate your key",
                desc: "Paste your license key inside the app. Plugin activates instantly.",
              },
            ].map((step) => (
              <div key={step.num} className="flex flex-col items-center text-center md:items-start md:text-left">
                <div
                  className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl text-sm font-bold"
                  style={{
                    background: "rgba(117,0,242,0.12)",
                    border: "1px solid rgba(117,0,242,0.28)",
                    color: "#a855f7",
                  }}
                >
                  {step.num}
                </div>
                <div className="mb-2 text-base font-semibold" style={{ color: "#f0ecff" }}>
                  {step.title}
                </div>
                <p className="text-sm leading-relaxed" style={{ color: "#9490a8" }}>
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Download CTA */}
      <section className="px-6 pb-28 md:px-12 lg:px-24">
        <div
          className="mx-auto max-w-2xl rounded-2xl px-8 py-14 text-center"
          style={{ background: "rgba(117,0,242,0.07)", border: "1px solid rgba(117,0,242,0.18)" }}
        >
          <h2
            className="mb-4 text-2xl font-semibold md:text-3xl"
            style={{ color: "#f0ecff", letterSpacing: "-0.025em" }}
          >
            Start making music today
          </h2>
          <p className="mb-8 text-sm leading-relaxed" style={{ color: "#9490a8" }}>
            Download SonaVerse free. Browse all plugins, preview them, and activate any you purchase with a single key.
          </p>
          <a
            href="/download"
            className="inline-flex items-center gap-2 rounded-lg px-8 py-3 text-sm font-semibold"
            style={{ background: "#7500f2", color: "#fff", boxShadow: "0 0 28px rgba(117,0,242,0.4)" }}
          >
            <svg viewBox="0 0 20 20" fill="currentColor" className="h-4 w-4">
              <path fillRule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
            Download for macOS
          </a>
          <div className="mt-4 text-xs" style={{ color: "#5a5470" }}>
            macOS 12 Monterey or later · Apple Silicon &amp; Intel · Free download
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer
        className="px-6 py-8 text-center text-xs"
        style={{ color: "#5a5470", borderTop: "1px solid rgba(117,0,242,0.1)" }}
      >
        © 2026 SonaVerse · sonaverse.com
      </footer>
    </div>
  );
}
