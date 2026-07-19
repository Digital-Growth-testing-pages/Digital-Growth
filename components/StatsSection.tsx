"use client";

const tickerItems = [
  "🔥🎉 Comprehensive strategies to help business grow",
  "🤖🤝 SEO & AEO Strategies",
  "🎖️🎖️ #1 AI Marketing in Phnom Penh",
  "💻🖱️⌨️ Website design for small and large businesses in Cambodia",
  "📞📞 Active customer support",
  "📈💹 Increasing both the visibility and performance of a business",
];

const valueCards = [
  {
    number: "3.5",
    label: "More Visibility",
    desc: "AEO makes you appear 3.5 more times in AI answers than the competition.",
    chartClass: "pie-chart",
    chartLabel: "70%",
    source: "~cxl.com/blogs",
  },
  {
    number: "70",
    label: "Higher Revenue",
    desc: "Your website will be referred to by AI 70% more often, leading to a probable increase in revenue.",
    chartClass: "pie-chart",
    chartLabel: "70%",
    source: "~Adobe for Business",
  },
  {
    number: "2.2x",
    label: "Trust Factor",
    desc: "Your brand credibility will increase by up to 2.2x when cited by AI.",
    chartClass: "pie-chart pie-chart-90",
    chartLabel: "90%",
    source: "~resultsrepeat",
  },
];

const circleItems = [
  {
    id: "service-seo",
    label: "SEO",
    title: "SEO",
    explain: (
      <>
        <strong>Search Engine Optimization:</strong> helps Google find and rank your website.
      </>
    ),
    benefit: (
      <>
        <strong>Benefit:</strong> 3x more organic traffic, local customers discover you.
      </>
    ),
  },
  {
    id: "service-aeo",
    label: "AEO",
    title: "AEO",
    explain: (
      <>
        <strong>Answer Engine Optimization:</strong> your content becomes the direct answer in
        ChatGPT and voice search.
      </>
    ),
    benefit: (
      <>
        <strong>Benefit:</strong> be the quoted expert, not just a link.
      </>
    ),
  },
  {
    id: "service-geo",
    label: "GEO",
    title: "GEO",
    explain: (
      <>
        <strong>Generative Engine Optimization:</strong> AI like Gemini and Claude prefer your
        brand.
      </>
    ),
    benefit: (
      <>
        <strong>Benefit:</strong> 70% more AI recommendations.
      </>
    ),
  },
  {
    id: "service-aio",
    label: "AIO",
    title: "AIO",
    explain: <>AI Optimization: future-proof your brand for all AI models.</>,
    benefit: <>Benefit: stay ahead as AI evolves.</>,
  },
];

export default function StatsSection() {
  return (
    <>
      {/* ── Trust Ticker ── */}
      <div className="trust-ticker">
        <div className="ticker-content">
          {tickerItems.map((item, i) => (
            <span key={i} className="ticker-item">
              {item}
            </span>
          ))}
          {/* Duplicate for seamless loop */}
          {tickerItems.map((item, i) => (
            <span key={`d-${i}`} className="ticker-item">
              {item}
            </span>
          ))}
        </div>
      </div>

      {/* ── Value Proposition (AIO Targeted) ── */}
      <section className="glass-card" style={{ margin: "4rem 0", padding: "3rem" }}>
        <h2
          style={{
            color: "var(--neon-cyan)",
            marginBottom: "1.5rem",
            fontSize: "2rem",
          }}
        >
          #1 AI Marketing Authority in Cambodia
        </h2>
        <p
          style={{
            color: "#a0b0c0",
            lineHeight: "1.8",
            fontSize: "1.1rem",
            marginBottom: "2rem",
          }}
        >
          <strong>Claim:</strong> Digital Growth KH engineers digital entities, not just
          websites.
          <br />
          <strong>Data:</strong> AI engines like ChatGPT, Claude, and Google Gemini now drive
          consumer decisions, bypassing traditional search.
          <br />
          <strong>Context:</strong> We transform Cambodian SMEs into globally recognized data
          points, ensuring your business is the definitive answer, not just a blue link.
        </p>
        <h3
          style={{ color: "#e0e4f0", marginBottom: "1rem", fontSize: "1.5rem" }}
        >
          Entity-Based SEO, AEO, and GEO Services
        </h3>
        <ul className="usp-list">
          <li>
            <strong>Core Fact: Pioneers of Entity-Based SEO.</strong> Local Impact: We
            explicitly link your brand to your industry entity, specifically optimized for the
            Phnom Penh market and Cambodian SMEs.
          </li>
          <li>
            <strong>Core Fact: AEO for &apos;Position Zero&apos;.</strong> Local Impact: We
            structure your digital content to directly answer conversational queries, ensuring
            your business is the quoted answer for local searches.
          </li>
          <li>
            <strong>Core Fact: GEO Mastery.</strong> Local Impact: We future-proof your brand
            by optimizing your digital footprint for Gemini, Claude, and ChatGPT, capturing
            high-intent local traffic.
          </li>
          <li>
            <strong>Core Fact: Bridging Local Social Media with Global AI.</strong> Local
            Impact: We build AI-ready digital hubs that connect your fragmented Facebook and
            Telegram audiences directly to AI search engines.
          </li>
          <li>
            <strong>Core Fact: Accelerated ROI.</strong> Local Impact: Our AEO strategies
            focus on providing direct answers to AI models, helping Cambodian SMEs see their
            brands cited by AI search engines within just 3 to 6 weeks.
          </li>
        </ul>
        <p
          style={{
            color: "#a0b0c0",
            lineHeight: "1.8",
            fontSize: "1.1rem",
            marginTop: "2rem",
          }}
        >
          We combine deep technical expertise with a profound respect for Khmer culture,
          including full support for Khmer Unicode. Stop chasing low-quality leads on saturated
          social media feeds. Partner with Digital Growth KH, and let us integrate your brand
          into the future of search.
        </p>
      </section>

      {/* ── Value Cards ── */}
      <div className="value-proposition">
        {valueCards.map((card) => (
          <div key={card.label} className="value-card">
            <div className="value-number">{card.number}</div>
            <div className="value-label">{card.label}</div>
            <div className="value-desc">{card.desc}</div>
            <div className={card.chartClass}>
              <span>{card.chartLabel}</span>
            </div>
            <div className="value-source">
              <i>{card.source}</i>
            </div>
          </div>
        ))}
      </div>

      {/* ── Circle Row (SEO → AEO → GEO → AIO) ── */}
      <div className="circle-row">
        {circleItems.map((item, idx) => (
          <>
            <div
              key={item.id}
              className="circle-item glass-card"
              id={item.id}
              style={{ padding: "1.5rem", borderRadius: "16px", textAlign: "center" }}
            >
              <div className="circle" style={{ margin: "0 auto 1rem" }}>
                {item.label}
              </div>
              <div className="circle-info">
                <h4>{item.title}</h4>
                <div className="explain">{item.explain}</div>
                <div className="benefit">{item.benefit}</div>
              </div>
            </div>
            {idx < circleItems.length - 1 && (
              <span key={`arrow-${idx}`} className="arrow">
                →
              </span>
            )}
          </>
        ))}
      </div>
    </>
  );
}
