'use client';

import { useMemo, useState } from 'react';

type PackageTier = {
  title: string;
  price: string;
  badge: string;
  features: string[];
  roi: string;
  featured?: boolean;
};

const packageTiers: PackageTier[] = [
  {
    title: 'Launch Kit',
    price: '$1,500',
    badge: 'Starter',
    roi: '+150% Local AI Visibility',
    features: ['Brand strategy blueprint', 'Landing page design', 'Conversion copy framework', '2-week implementation sprint'],
  },
  {
    title: 'Growth Pro',
    price: '$3,500',
    badge: 'Popular',
    roi: '+210% AI Citation Growth',
    features: ['Full-funnel growth architecture', 'Offer optimization + positioning', 'Performance content system', 'Monthly analytics + iteration'],
    featured: true,
  },
  {
    title: 'Scale Engine',
    price: '$7,500',
    badge: 'Enterprise',
    roi: '+300% AI-driven Inquiries',
    features: ['Multi-channel acquisition model', 'Sales enablement assets', 'Advanced automation workflows', 'Dedicated strategic advisory'],
  },
];

export default function Packages() {
  const [selectedPackage, setSelectedPackage] = useState<PackageTier>(packageTiers[0]);

  const ctaHref = useMemo(() => {
    const message = `Hi, I'm interested in the ${selectedPackage.title} package`;
    return `https://t.me/That_Latin_Guy?text=${encodeURIComponent(message)}`;
  }, [selectedPackage.title]);

  return (
    <section className="mx-auto max-w-[1400px] px-6 py-20">
      <h2 className="mb-12 inline-block border-b-2 border-neonMagenta pb-2 text-3xl font-bold uppercase text-neonCyan">
        Growth Packages
      </h2>

      <div className="mb-12 rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-md">
        <h3 className="text-xl font-semibold text-neonCyan">Select Your Package</h3>
        <p className="mt-2 text-sm text-slate-300">Choose the plan that fits your growth goals.</p>

        <div className="mt-6 flex flex-col gap-3">
          {packageTiers.map((tier) => (
            <button
              key={`${tier.title}-select`}
              type="button"
              onClick={() => setSelectedPackage(tier)}
              className={`w-full rounded-lg border px-4 py-3 text-left transition-all duration-300 ${
                selectedPackage.title === tier.title
                  ? 'border-neonCyan bg-cyan-500/10 text-neonCyan'
                  : 'border-white/10 bg-white/5 text-slate-200 hover:border-neonCyan/60'
              }`}
            >
              <span className="font-semibold">{tier.title}</span>
            </button>
          ))}
        </div>

        <div className="mt-6 rounded-lg border border-neonCyan/30 bg-black/20 p-5">
          <p className="text-sm uppercase tracking-wide text-slate-300">Estimated Investment</p>
          <p className="mt-2 text-4xl font-bold text-neonMagenta">{selectedPackage.price}</p>
          <p className="mt-1 text-sm text-slate-400">one-time package</p>

          <p className="mt-4 rounded-md border border-lime-400/40 bg-lime-400/10 p-3 text-sm font-semibold text-lime-300">
            ROI Signal: {selectedPackage.roi}
          </p>

          <a
            href={ctaHref}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-5 inline-flex rounded-md bg-neonCyan px-5 py-3 text-sm font-bold uppercase text-black transition-all duration-300 hover:scale-[1.02]"
          >
            Get Started
          </a>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
        {packageTiers.map((tier) => (
          <article
            key={tier.title}
            className={`rounded-2xl border border-white/10 bg-white/5 p-8 backdrop-blur-md flex flex-col transition-all duration-300 hover:-translate-y-2 hover:border-neonCyan hover:shadow-[0_15px_35px_rgba(0,240,255,0.15)] ${
              tier.featured ? 'shadow-[0_0_20px_rgba(255,42,109,0.1)]' : ''
            }`}
          >
            <div className="mb-4 flex items-center justify-between">
              <h3 className="text-2xl text-neonCyan">{tier.title}</h3>
              <span className="rounded-full border border-white/20 px-3 py-1 text-xs uppercase tracking-wide text-gray-200">
                {tier.badge}
              </span>
            </div>

            <p className="my-4 text-4xl font-mono font-bold text-neonMagenta">{tier.price}</p>

            <ul className="mt-4 space-y-3">
              {tier.features.map((feature) => (
                <li key={feature} className="flex items-start gap-2 text-gray-300">
                  <span aria-hidden="true">✅</span>
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  );
}
