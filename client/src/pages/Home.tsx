/**
 * DESIGN SYSTEM — Merchant Console Noir
 * Editorial techno-minimalism: dark strata, soft bone type, #95BF47 only as a growth signal.
 * Keep layouts asymmetric, actions crisp, and technical motifs purposeful rather than decorative.
 */
import { FormEvent, useState } from "react";
import {
  ArrowDownRight,
  ArrowUpRight,
  Code2,
  Github,
  Instagram,
  Layers3,
  Linkedin,
  Menu,
  MoveRight,
  Send,
  ShoppingBag,
  Sparkles,
  X,
} from "lucide-react";

const projects = [
  {
    index: "01",
    title: "Atelier No. 18",
    type: "Fashion Commerce / 2024",
    image: "/manus-storage/project-atelier_9f6479ef.jpg",
    className: "project-tall",
  },
  {
    index: "02",
    title: "Kinetic Supply",
    type: "DTC Performance / 2024",
    image: "/manus-storage/project-kinetic_05bea1e0.jpg",
    className: "project-wide",
  },
  {
    index: "03",
    title: "Common Ground",
    type: "Home & Living / 2023",
    image: "/manus-storage/project-common_e245fa3b.jpg",
    className: "project-standard",
  },
  { index: "04", title: "Luma Objects", type: "Design Systems / 2023", visual: "luma", className: "project-standard" },
  { index: "05", title: "Fable & Form", type: "Subscription Commerce / 2022", visual: "fable", className: "project-wide" },
  { index: "06", title: "Mercantile Studio", type: "B2B Shopify / 2022", visual: "mercantile", className: "project-tall" },
];

const skills = [
  ["Shopify Plus", "Store architecture & platform strategy", "92"],
  ["Custom Themes", "Liquid, sections & bespoke storefront UI", "96"],
  ["Conversion UX", "Customer journeys that reduce friction", "88"],
  ["Headless Commerce", "Hydrogen, Storefront API & integrations", "80"],
];

function SectionHeading({ eyebrow, title, number }: { eyebrow: string; title: string; number: string }) {
  return (
    <div className="section-heading">
      <div className="eyebrow-wrap"><span className="status-dot" />{eyebrow}</div>
      <div className="section-title-row">
        <span className="section-number">{number}</span>
        <h2>{title}</h2>
      </div>
    </div>
  );
}

function ProjectVisual({ type }: { type: string }) {
  if (type === "luma") {
    return <div className="generated-visual luma-visual"><span className="luma-disc luma-a" /><span className="luma-disc luma-b" /><span className="luma-card"><i /><i /><i /></span></div>;
  }
  if (type === "fable") {
    return <div className="generated-visual fable-visual"><span className="fable-arch" /><span className="fable-package" /><span className="fable-line" /></div>;
  }
  return <div className="generated-visual mercantile-visual"><span className="merch-shelf" /><span className="merch-vessel" /><span className="merch-bag" /></div>;
}

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [formSent, setFormSent] = useState(false);

  const closeMenu = () => setMenuOpen(false);
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setFormSent(true);
  };

  return (
    <div className="site-shell">
      <header className="topbar">
        <a href="#top" className="brand" aria-label="Geovanny Escaf home">
          <img src="/manus-storage/geovanny-mark_89da9ed4.png" alt="" className="brand-mark" />
          <span>GEOVANNY<br />ESCAF</span>
        </a>
        <nav className={`nav-links ${menuOpen ? "is-open" : ""}`} aria-label="Main navigation">
          <a onClick={closeMenu} href="#about">About</a>
          <a onClick={closeMenu} href="#work">Work</a>
          <a onClick={closeMenu} href="#skills">Expertise</a>
          <a onClick={closeMenu} href="#contact" className="nav-cta">Start a project <ArrowUpRight size={14} /></a>
        </nav>
        <button type="button" className="menu-button" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle navigation" aria-expanded={menuOpen}>
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </header>

      <main id="top">
        <section className="hero section-pad">
          <div className="hero-grid" aria-hidden="true" />
          <div className="hero-copy">
            <div className="eyebrow-wrap hero-label"><span className="status-dot" />Independent Shopify Developer <span className="hero-location">Available Worldwide</span></div>
            <div className="hero-systemline"><ShoppingBag size={13} /> Shopify storefront systems <span /> checkout clarity <span /> commercial build</div>
            <h1>Design that <em>speaks</em><br />louder than words<span className="accent-period">.</span></h1>
            <p className="hero-intro">I build thoughtful Shopify storefronts for brands ready to feel sharper, move faster, and sell with intent.</p>
            <div className="hero-actions">
              <a className="button button-primary" href="#work">Explore selected work <ArrowDownRight size={17} /></a>
              <a className="text-link" href="#contact">Discuss a project <MoveRight size={17} /></a>
            </div>
          </div>
          <div className="hero-art">
            <div className="art-frame">
              <img src="/manus-storage/geovanny-hero_2113e090.jpg" alt="Abstract dark ecommerce workspace with green system accents" />
              <div className="art-overlay" />
            </div>
            <div className="hero-card card-build"><Code2 size={17} /><span>Build system</span><b>Liquid / Shopify Plus</b></div>
            <div className="hero-card card-growth"><span className="card-stat">+34%</span><span>Potential uplift</span><i /></div>
          </div>
          <div className="hero-floor">
            <span>SCROLL TO EXPLORE</span><div className="scroll-line" /><span>EST. 2018</span>
          </div>
        </section>

        <section id="about" className="about section-pad">
          <SectionHeading eyebrow="A little context" title="Commerce built with care." number="01" />
          <div className="about-content">
            <div className="about-side-note">
              <span className="large-number">06</span>
              <span>Years working where<br />design meets transaction.</span>
            </div>
            <div className="about-story">
              <p className="about-lead">I’m Geovanny, a Shopify developer who treats the storefront as a brand’s most important conversation.</p>
              <div className="about-body"><p>For six years, I’ve partnered with founders, studios, and ecommerce teams to turn sharp creative direction into fast, flexible digital stores. The work spans strategy, responsive storefront engineering, and the awkward details between a great first impression and a finished purchase.</p><p>My approach is hands-on and deliberately clear: understand the commercial problem, build the right system, then keep refining the places customers hesitate.</p></div>
              <a className="text-link" href="#contact">More about my approach <ArrowUpRight size={17} /></a>
            </div>
            <aside className="about-meta"><div><span>Based in</span><b>Remote / UTC−5</b></div><div><span>Focus</span><b>Shopify ecosystems</b></div><div><span>Typical engagement</span><b>6–12 weeks</b></div></aside>
          </div>
        </section>

        <section id="work" className="work section-pad">
          <SectionHeading eyebrow="Selected work" title="Built for a better checkout." number="02" />
          <div className="work-intro"><p>Six examples of storefronts where a clearer experience made the brand feel more itself.</p><span>01—06</span></div>
          <div className="projects-grid">
            {projects.map((project) => <article key={project.index} className={`project-card ${project.className}`}>
              <div className="project-visual">{project.image ? <img src={project.image} alt="" /> : <ProjectVisual type={project.visual!} />}<div className="project-system"><i /><span>STORE // 0{project.index}</span><b>LIVE BUILD</b></div><div className="project-reveal"><span>View case study</span><ArrowUpRight size={22} /></div></div>
              <div className="project-caption"><span>{project.index}</span><div><h3>{project.title}</h3><p>{project.type}</p></div></div>
            </article>)}
          </div>
          <div className="work-footer"><p>Interested in the working details?</p><a href="#contact" className="text-link">Let’s map your build <MoveRight size={17} /></a></div>
        </section>

        <section id="skills" className="skills section-pad">
          <SectionHeading eyebrow="Capabilities" title="Technical range. Practical focus." number="03" />
          <div className="skills-layout">
            <div className="skills-intro"><p>I make technical decisions in service of a more confident customer journey—not novelty for novelty’s sake.</p><div className="skills-signal"><span><Sparkles size={16} />Built to scale</span><p>From first collection to complex catalog, the system should grow gracefully.</p></div></div>
            <div className="skill-list">{skills.map(([name, description, amount], index) => <div className="skill-row" key={name}><div className="skill-index">0{index + 1}</div><div className="skill-title"><h3>{name}</h3><p>{description}</p></div><div className="skill-meter"><span style={{ width: `${amount}%` }} /></div><span className="skill-amount">{amount}%</span></div>)}</div>
          </div>
        </section>

        <section className="process section-pad">
          <div className="process-header"><div className="eyebrow-wrap"><span className="status-dot" />How we’ll work</div><p>A short, focused build process that leaves less to chance.</p></div>
          <div className="process-steps"><div><span>01</span><h3>Set direction</h3><p>We align brand goals, customer intent, and the right technical scope.</p></div><div><span>02</span><h3>Build the system</h3><p>Fast, considered development with visibility at every useful milestone.</p></div><div><span>03</span><h3>Refine the signal</h3><p>QA, launch support, and the small fixes that make a build feel complete.</p></div></div>
        </section>

        <section className="testimonials section-pad" aria-labelledby="testimonials-heading">
          <div className="testimonial-aside"><span className="section-number">04</span><div className="eyebrow-wrap"><span className="status-dot" />Testimonials</div></div>
          <div className="testimonial-main"><h2 id="testimonials-heading">Client feedback,<br /><em>when it’s theirs to share.</em></h2><p>Authentic testimonial material has not yet been supplied for this portfolio. This space is intentionally reserved for approved client feedback, rather than placeholder endorsements.</p><div className="quote-placeholder"><span>“</span><p>Bring a clear ambition. Leave with a storefront that makes it easier to act on.</p></div></div>
        </section>

        <section id="contact" className="contact section-pad">
          <div className="contact-heading"><div className="eyebrow-wrap"><span className="status-dot" />Open for selected projects</div><h2>Bring the brief.<br /><em>I’ll map the build system.</em></h2></div>
          <form onSubmit={handleSubmit} className="contact-form">
            <label><span>Your name</span><input required name="name" placeholder="How should I address you?" /></label>
            <label><span>Work email</span><input required type="email" name="email" placeholder="you@company.com" /></label>
            <label><span>What are we making?</span><textarea required name="message" rows={4} placeholder="A few words about the store, scope, or problem to solve." /></label>
            <button className="button button-primary" type="submit">Send project brief <Send size={16} /></button>
            {formSent && <p className="form-note">Thanks—your project brief is ready for a contact-channel connection before launch.</p>}
          </form>
          <div className="contact-footer"><p>Prefer a different route?</p><a className="text-link" href="https://www.linkedin.com" target="_blank" rel="noreferrer">Connect on LinkedIn <ArrowUpRight size={16} /></a></div>
        </section>
      </main>

      <footer className="footer"><a href="#top" className="brand"><img src="/manus-storage/geovanny-mark_89da9ed4.png" alt="" className="brand-mark" /><span>GEOVANNY<br />ESCAF</span></a><div className="footer-social"><a href="https://www.linkedin.com" target="_blank" rel="noreferrer" aria-label="LinkedIn"><Linkedin size={17} /></a><a href="https://github.com" target="_blank" rel="noreferrer" aria-label="GitHub"><Github size={17} /></a><a href="https://instagram.com" target="_blank" rel="noreferrer" aria-label="Instagram"><Instagram size={17} /></a></div><span className="footer-copy">© {new Date().getFullYear()} Geovanny Escaf. Built with intent.</span></footer>
    </div>
  );
}
