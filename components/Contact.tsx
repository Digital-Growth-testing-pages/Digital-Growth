export default function Contact() {
  return (
    <section id="contact" className="mx-auto max-w-[1000px] px-6 py-20">
      <h2 className="mb-12 inline-block border-b-2 border-neonMagenta pb-2 text-3xl font-bold uppercase text-neonCyan">
        ⧉ Request a Quote
      </h2>

      <div className="rounded-2xl border border-white/10 bg-white/5 p-8 backdrop-blur-md md:p-12">
        <form className="grid grid-cols-1 gap-6 md:grid-cols-2">
          <input
            type="text"
            name="name"
            placeholder="Name"
            className="w-full bg-[#11151c] border border-white/10 rounded-md p-4 text-white focus:outline-none focus:border-neonCyan focus:shadow-[0_0_10px_rgba(0,240,255,0.2)] transition-all text-base"
          />

          <input
            type="email"
            name="email"
            placeholder="Email"
            className="w-full bg-[#11151c] border border-white/10 rounded-md p-4 text-white focus:outline-none focus:border-neonCyan focus:shadow-[0_0_10px_rgba(0,240,255,0.2)] transition-all text-base"
          />

          <input
            type="text"
            name="businessName"
            placeholder="Business Name"
            className="w-full bg-[#11151c] border border-white/10 rounded-md p-4 text-white focus:outline-none focus:border-neonCyan focus:shadow-[0_0_10px_rgba(0,240,255,0.2)] transition-all text-base"
          />

          <select
            name="service"
            className="w-full bg-[#11151c] border border-white/10 rounded-md p-4 text-white focus:outline-none focus:border-neonCyan focus:shadow-[0_0_10px_rgba(0,240,255,0.2)] transition-all text-base"
            defaultValue=""
          >
            <option value="" disabled>
              Select Service
            </option>
            <option value="seo">SEO & Visibility</option>
            <option value="branding">Brand Strategy</option>
            <option value="web">Website Optimization</option>
            <option value="growth">Growth Advisory</option>
          </select>

          <textarea
            name="goals"
            rows={4}
            placeholder="Tell us your goals..."
            className="w-full bg-[#11151c] border border-white/10 rounded-md p-4 text-white focus:outline-none focus:border-neonCyan focus:shadow-[0_0_10px_rgba(0,240,255,0.2)] transition-all text-base md:col-span-2"
          />

          <button
            type="submit"
            className="mt-4 justify-self-center rounded-md bg-neonCyan px-10 py-4 font-bold uppercase tracking-wide text-black transition-all hover:scale-105 hover:bg-[#33f3ff] hover:shadow-[0_0_20px_rgba(0,240,255,0.8)] md:col-span-2"
          >
            Submit Quote Request
          </button>
        </form>
      </div>
    </section>
  );
}
