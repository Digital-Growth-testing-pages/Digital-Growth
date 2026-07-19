import Link from 'next/link';

export default function Hero() {
  return (
    <section className="relative flex min-h-[80vh] flex-col justify-center bg-panelBg px-6 py-20 text-center items-center md:px-12 md:text-left md:items-start">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.06)_0%,transparent_60%)]" />

      <h1 className="relative max-w-4xl text-4xl font-extrabold uppercase tracking-tight md:text-6xl">
        Engineer Your Brand For{' '}
        <span className="text-neonCyan drop-shadow-[0_0_12px_rgba(0,240,255,0.5)]">High-Ticket Scale.</span>
      </h1>

      <p className="relative mt-6 mb-10 max-w-2xl text-lg font-mono text-gray-400 md:text-xl">
        Build authority-driven systems that attract premium clients and compound revenue growth.
      </p>

      <Link
        href="/contact"
        className="relative rounded-md bg-neonCyan px-8 py-4 font-bold uppercase tracking-wide text-black transition-all duration-300 hover:scale-105 hover:bg-[#33f3ff] hover:shadow-[0_0_30px_rgba(0,240,255,0.8)]"
      >
        Scale Your Revenue Today
      </Link>
    </section>
  );
}
