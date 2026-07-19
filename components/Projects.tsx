type Project = {
  emoji: string;
  name: string;
  techTag: string;
  metricTag: string;
  description: string;
};

const projects: Project[] = [
  {
    emoji: '🍗',
    name: 'Chrouk-Chrouk',
    techTag: 'AEO & Schema',
    metricTag: '+150% Visibility',
    description: 'Local restaurant growth campaign focused on discoverability, branded search, and conversion-ready content.',
  },
  {
    emoji: '🏨',
    name: 'The Oasis',
    techTag: 'Technical SEO',
    metricTag: '+92% Bookings',
    description: 'Hospitality funnel revamp with structured content, speed optimization, and booking path simplification.',
  },
  {
    emoji: '☕',
    name: 'Coffee & Talk',
    techTag: 'Content Engine',
    metricTag: '+3.4x Traffic',
    description: 'Editorial and social amplification system designed to turn community engagement into repeat revenue.',
  },
  {
    emoji: '🌿',
    name: 'The Garden Guy',
    techTag: 'Local Growth Stack',
    metricTag: '+120% Leads',
    description: 'Service business positioning upgrade with offer clarity, local authority signals, and lead capture improvements.',
  },
];

export default function Projects() {
  return (
    <section id="projects" className="mx-auto max-w-[1400px] px-6 py-20">
      <h2 className="mb-12 inline-block border-b-2 border-neonMagenta pb-2 text-3xl font-bold uppercase text-neonCyan">
        ⎔ Previous Projects
      </h2>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
        {projects.map((project) => (
          <article
            key={project.name}
            className="flex flex-col rounded-xl border border-white/10 bg-white/5 p-6 backdrop-blur-md transition-all duration-300 hover:-translate-y-2 hover:border-neonCyan hover:shadow-[0_8px_32px_rgba(0,240,255,0.15)]"
          >
            <div className="mb-4 flex h-48 w-full items-center justify-center rounded-lg bg-panelBorder text-5xl">
              {project.emoji}
            </div>

            <h3 className="mb-2 text-xl font-bold text-neonCyan">{project.name}</h3>

            <div className="mb-4 flex flex-wrap items-center gap-2">
              <span className="rounded border border-white/20 px-2 py-1 font-mono text-[0.75rem] uppercase text-gray-400">
                {project.techTag}
              </span>
              <span className="rounded bg-neonLime px-2 py-1 text-xs font-bold text-black shadow-[0_0_10px_rgba(57,255,20,0.3)]">
                {project.metricTag}
              </span>
            </div>

            <p className="mt-auto text-sm text-gray-400">{project.description}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
