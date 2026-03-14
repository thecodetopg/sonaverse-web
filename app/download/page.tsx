import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Download SonaVerse — Free for macOS",
  description:
    "Download SonaVerse for macOS. Apple Silicon and Intel supported. Browse, preview and activate professional audio plugins.",
};

export default function DownloadPage() {
  return (
    <div
      className="min-h-screen"
      style={{ background: "#05000f", color: "#e8e0f5" }}
    >
      {/* Back to home */}
      <div className="px-6 pt-6 md:px-12">
        <a
          href="/"
          className="inline-flex items-center gap-1.5 text-sm transition-colors"
          style={{ color: "#9490a8" }}
        >
          <svg
            viewBox="0 0 20 20"
            fill="currentColor"
            className="h-4 w-4"
          >
            <path
              fillRule="evenodd"
              d="M17 10a.75.75 0 01-.75.75H5.612l4.158 3.96a.75.75 0 11-1.04 1.08l-5.5-5.25a.75.75 0 010-1.08l5.5-5.25a.75.75 0 111.04 1.08L5.612 9.25H16.25A.75.75 0 0117 10z"
              clipRule="evenodd"
            />
          </svg>
          Back to home
        </a>
      </div>

      {/* Hero */}
      <section className="relative flex flex-col items-center justify-center overflow-hidden px-6 pt-20 pb-20 text-center md:pt-28 md:pb-24">
        {/* Ambient glow */}
        <div
          className="pointer-events-none absolute left-1/2 top-0 -translate-x-1/2 h-[420px] w-[800px] rounded-full opacity-20 blur-3xl"
          style={{
            background: "radial-gradient(ellipse, #7500f2 0%, transparent 70%)",
          }}
        />
        <div
          className="relative mb-5 inline-block rounded-full px-4 py-1 text-xs font-semibold uppercase tracking-widest"
          style={{
            background: "rgba(117,0,242,0.12)",
            color: "#a855f7",
            border: "1px solid rgba(168,85,247,0.22)",
          }}
        >
          Free Download
        </div>
        <h1
          className="relative mb-4 text-4xl font-bold md:text-5xl lg:text-6xl"
          style={{ color: "#f0ecff", letterSpacing: "-0.04em" }}
        >
          Download{" "}
          <span
            style={{
              background: "linear-gradient(135deg, #c084fc 0%, #7500f2 70%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            SonaVerse
          </span>
        </h1>
        <p
          className="relative mb-2 max-w-lg text-base leading-relaxed md:text-lg"
          style={{ color: "#9490a8" }}
        >
          Choose the right version for your Mac.
        </p>
      </section>

      {/* Download cards */}
      <section className="px-6 pb-20 md:px-12 lg:px-24">
        <div className="mx-auto grid max-w-3xl grid-cols-1 gap-6 sm:grid-cols-2">
          {/* Apple Silicon */}
          <div
            className="group relative flex flex-col items-center rounded-2xl p-8 text-center transition-all duration-200"
            style={{
              background: "rgba(255,255,255,0.03)",
              border: "1px solid rgba(117,0,242,0.22)",
            }}
          >
            <div
              className="pointer-events-none absolute inset-x-0 top-0 h-px"
              style={{
                background:
                  "linear-gradient(90deg, transparent, rgba(168,85,247,0.5), transparent)",
              }}
            />
            {/* Apple logo */}
            <svg
              viewBox="0 0 24 24"
              fill="currentColor"
              className="mb-5 h-10 w-10"
              style={{ color: "#a855f7" }}
            >
              <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
            </svg>
            <h3
              className="mb-1 text-lg font-semibold"
              style={{ color: "#f0ecff" }}
            >
              macOS (Apple Silicon)
            </h3>
            <p className="mb-1 text-xs" style={{ color: "#9490a8" }}>
              For M1, M2, M3 &amp; M4 Macs
            </p>
            <p className="mb-6 text-xs" style={{ color: "#5a5470" }}>
              arm64 DMG &middot; ~101 MB
            </p>
            <a
              href="https://github.com/thecodetopg/the-sonaverse/releases/download/v1.1.0/SonaVerse-1.1.0-arm64.dmg"
              className="inline-flex items-center gap-2 rounded-lg px-7 py-3 text-sm font-semibold transition-shadow"
              style={{
                background: "#7500f2",
                color: "#fff",
                boxShadow: "0 0 24px rgba(117,0,242,0.4)",
              }}
            >
              <svg viewBox="0 0 20 20" fill="currentColor" className="h-4 w-4">
                <path
                  fillRule="evenodd"
                  d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
              Download DMG
            </a>
          </div>

          {/* Intel */}
          <div
            className="group relative flex flex-col items-center rounded-2xl p-8 text-center transition-all duration-200"
            style={{
              background: "rgba(255,255,255,0.03)",
              border: "1px solid rgba(117,0,242,0.22)",
            }}
          >
            <div
              className="pointer-events-none absolute inset-x-0 top-0 h-px"
              style={{
                background:
                  "linear-gradient(90deg, transparent, rgba(168,85,247,0.5), transparent)",
              }}
            />
            <svg
              viewBox="0 0 24 24"
              fill="currentColor"
              className="mb-5 h-10 w-10"
              style={{ color: "#a855f7" }}
            >
              <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
            </svg>
            <h3
              className="mb-1 text-lg font-semibold"
              style={{ color: "#f0ecff" }}
            >
              macOS (Intel)
            </h3>
            <p className="mb-1 text-xs" style={{ color: "#9490a8" }}>
              For Intel-based Macs
            </p>
            <p className="mb-6 text-xs" style={{ color: "#5a5470" }}>
              x64 DMG &middot; ~106 MB
            </p>
            <a
              href="https://github.com/thecodetopg/the-sonaverse/releases/download/v1.1.0/SonaVerse-1.1.0.dmg"
              className="inline-flex items-center gap-2 rounded-lg px-7 py-3 text-sm font-semibold transition-shadow"
              style={{
                background: "#7500f2",
                color: "#fff",
                boxShadow: "0 0 24px rgba(117,0,242,0.4)",
              }}
            >
              <svg viewBox="0 0 20 20" fill="currentColor" className="h-4 w-4">
                <path
                  fillRule="evenodd"
                  d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
              Download DMG
            </a>
          </div>
        </div>
      </section>

      {/* Installation steps */}
      <section className="px-6 pb-24 md:px-12 lg:px-24">
        <div className="mx-auto max-w-3xl">
          <p
            className="mb-2 text-center text-xs font-semibold uppercase tracking-widest"
            style={{ color: "#7500f2" }}
          >
            Installation
          </p>
          <h2
            className="mb-14 text-center text-2xl font-semibold md:text-3xl"
            style={{ color: "#f0ecff", letterSpacing: "-0.025em" }}
          >
            Up and running in 3 steps
          </h2>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {[
              {
                num: "01",
                title: "Download the DMG",
                desc: "Pick the right version for your Mac — Apple Silicon or Intel.",
              },
              {
                num: "02",
                title: "Drag to Applications",
                desc: "Open the DMG and drag SonaVerse into your Applications folder.",
              },
              {
                num: "03",
                title: "Launch & explore",
                desc: "Open SonaVerse, browse the plugin store, and activate your purchases.",
              },
            ].map((step) => (
              <div
                key={step.num}
                className="flex flex-col items-center text-center md:items-start md:text-left"
              >
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
                <div
                  className="mb-2 text-base font-semibold"
                  style={{ color: "#f0ecff" }}
                >
                  {step.title}
                </div>
                <p
                  className="text-sm leading-relaxed"
                  style={{ color: "#9490a8" }}
                >
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* System requirements */}
      <section className="px-6 pb-24 md:px-12 lg:px-24">
        <div
          className="mx-auto max-w-3xl rounded-2xl px-8 py-12"
          style={{
            background: "rgba(117,0,242,0.06)",
            border: "1px solid rgba(117,0,242,0.15)",
          }}
        >
          <h3
            className="mb-8 text-center text-lg font-semibold"
            style={{ color: "#f0ecff" }}
          >
            System Requirements
          </h3>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
            {[
              {
                icon: (
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    className="h-5 w-5"
                    style={{ color: "#a855f7" }}
                  >
                    <rect
                      x="3"
                      y="4"
                      width="18"
                      height="14"
                      rx="2"
                      stroke="currentColor"
                      strokeWidth="1.5"
                    />
                    <path
                      d="M8 20h8M12 18v2"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                    />
                  </svg>
                ),
                label: "macOS 12 Monterey or later",
              },
              {
                icon: (
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    className="h-5 w-5"
                    style={{ color: "#a855f7" }}
                  >
                    <path
                      d="M9 3H5a2 2 0 00-2 2v4m6-6h10a2 2 0 012 2v4M9 3v18m0 0H5a2 2 0 01-2-2v-4m6 6h10a2 2 0 002-2v-4m0-8v8"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                    />
                  </svg>
                ),
                label: "Apple Silicon (M1/M2/M3/M4) or Intel",
              },
              {
                icon: (
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    className="h-5 w-5"
                    style={{ color: "#a855f7" }}
                  >
                    <path
                      d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4M7 10l5 5 5-5M12 15V3"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                ),
                label: "~200 MB disk space",
              },
              {
                icon: (
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    className="h-5 w-5"
                    style={{ color: "#a855f7" }}
                  >
                    <path
                      d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                ),
                label: "VST3 compatible DAW (FL Studio, Ableton, Logic, etc.)",
              },
            ].map((req) => (
              <div key={req.label} className="flex items-center gap-3">
                {req.icon}
                <span className="text-sm" style={{ color: "#c4b8e8" }}>
                  {req.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What's included */}
      <section className="px-6 pb-24 md:px-12 lg:px-24">
        <div className="mx-auto max-w-3xl">
          <p
            className="mb-2 text-center text-xs font-semibold uppercase tracking-widest"
            style={{ color: "#7500f2" }}
          >
            What&apos;s Included
          </p>
          <h2
            className="mb-4 text-center text-2xl font-semibold md:text-3xl"
            style={{ color: "#f0ecff", letterSpacing: "-0.025em" }}
          >
            Free app, premium plugins
          </h2>
          <p
            className="mx-auto mb-12 max-w-lg text-center text-sm leading-relaxed"
            style={{ color: "#9490a8" }}
          >
            SonaVerse is free to download. Browse, preview and manage all
            plugins from one app. Purchase only what you need.
          </p>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            {[
              {
                name: "Chordia",
                price: "€29",
                desc: "Chord-melody generator for instant inspiration",
              },
              {
                name: "KeyFinder",
                price: "€9",
                desc: "Real-time musical key detection from audio",
              },
              {
                name: "Tempo",
                price: "€9",
                desc: "BPM detector with MIDI clock sync output",
              },
              {
                name: "Reveal",
                price: "€15",
                desc: "Chord progression analyser with harmonic insight",
              },
            ].map((plugin) => (
              <div
                key={plugin.name}
                className="relative rounded-xl p-5"
                style={{
                  background: "rgba(255,255,255,0.03)",
                  border: "1px solid rgba(117,0,242,0.18)",
                }}
              >
                <div
                  className="pointer-events-none absolute inset-x-0 top-0 h-px"
                  style={{
                    background:
                      "linear-gradient(90deg, transparent, rgba(168,85,247,0.4), transparent)",
                  }}
                />
                <div className="flex items-center justify-between mb-1">
                  <span
                    className="text-base font-semibold"
                    style={{ color: "#f0ecff" }}
                  >
                    {plugin.name}
                  </span>
                  <span
                    className="text-sm font-semibold"
                    style={{ color: "#a855f7" }}
                  >
                    {plugin.price}
                  </span>
                </div>
                <p className="text-xs leading-relaxed" style={{ color: "#9490a8" }}>
                  {plugin.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer
        className="px-6 py-8 text-center text-xs"
        style={{
          color: "#5a5470",
          borderTop: "1px solid rgba(117,0,242,0.1)",
        }}
      >
        &copy; 2026 SonaVerse &middot; sonaverse.com
      </footer>
    </div>
  );
}
