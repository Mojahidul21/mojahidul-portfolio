import { useEffect, useState } from "react";
import {
  ArrowDown,
  ArrowUpRight,
  BrainCircuit,
  Check,
  ChevronDown,
  Code2,
  Copy,
  Database,
  ExternalLink,
  Gamepad2,
  Github,
  GitBranch,
  Globe2,
  GraduationCap,
  Layers3,
  Mail,
  Menu,
  Radar,
  Send,
  Terminal,
  Trophy,
  X,
} from "lucide-react";

type IconComponent = typeof Code2;

type Project = {
  number: string;
  title: string;
  category: string;
  icon: IconComponent;
  description: string;
  details: string[];
  accent: "gold" | "orange" | "silver";
  links?: { label: string; href: string }[];
};

type SkillGroup = {
  label: string;
  icon: IconComponent;
  items: string[];
};

type TimelineItem = {
  org: string;
  role: string;
  dates?: string;
  details: string;
  current?: boolean;
  education?: boolean;
};

const navItems = [
  { id: "about", label: "About Me" },
  { id: "skills", label: "Skills & Technologies" },
  { id: "projects", label: "Projects" },
  { id: "journey", label: "Education" },
  { id: "contact", label: "Contact" },
];

const skillGroups: SkillGroup[] = [
  {
    label: "Programming",
    icon: Code2,
    items: [
      "C",
      "C++",
      "C#",
      "Java",
      "Python",
      "Kotlin",
      "Prolog",
      "Visual Basic",
    ],
  },
  {
    label: "Game Development",
    icon: Gamepad2,
    items: ["Unity", "C#", "Gameplay Systems Design"],
  },
  {
    label: "Web & Backend",
    icon: Globe2,
    items: ["HTML", "CSS", "JavaScript", "ASP.NET", "SQL", "RESTful APIs"],
  },
  {
    label: "Tools & Platforms",
    icon: GitBranch,
    items: [
      "Git/GitHub",
      "Visual Studio",
      "Android Studio",
      "Draw.io",
      "EdrawMax",
    ],
  },
  {
    label: "Machine Learning",
    icon: BrainCircuit,
    items: [
      "LightGBM",
      "XGBoost",
      "CatBoost",
      "Ensemble Modeling",
      "Python data stack",
    ],
  },
  {
    label: "Competitive Programming",
    icon: Trophy,
    items: ["Data Structures & Algorithms", "Graphs", "DP", "Greedy"],
  },
];

const projects: Project[] = [
  {
    number: "01",
    title: "Mojo & Zantro",
    category: "SOLO GAME / GAMEDEV.JS JAM 2026",
    icon: Gamepad2,
    description: "A solo game built in vanilla HTML/CSS/JS with no engine.",
    details: [
      "8 interlocking stat systems with cascading consequences",
      "Ranked #174 of 486 entries",
    ],
    accent: "gold",
    links: [
      {
        label: "Play URL",
        href: "https://ace-azimuth-aviator.itch.io/mojo-and-zantro",
      },
    ],
  },
  {
    number: "02",
    title: "MojoCar",
    category: "BROWSER ARCADE RACER",
    icon: Terminal,
    description: "A neon browser arcade racer shaped around responsive play.",
    details: [
      "Boost mechanics, synthesized audio, and responsive mobile controls",
      "5-lap time-attack mode, screen shake, persistent local leaderboard",
    ],
    accent: "orange",
    links: [
      {
        label: "Play URL",
        href: "https://ace-azimuth-aviator.itch.io/mojocar",
      },
    ],
  },
  {
    number: "03",
    title: "Unity Games (Team Ereal)",
    category: "TEAM EREAL / UNITY + C#",
    icon: Layers3,
    description: "Gameplay work on Red Rain and Midnight Lark: Starflight.",
    details: [
      "Gameplay features and mechanics",
      "Bug fixes, performance optimization, and distributed team collaboration",
    ],
    accent: "silver",
  },
  {
    number: "04",
    title: "Cypher Nexus",
    category: "MACHINE LEARNING / ENSEMBLE MODEL",
    icon: BrainCircuit,
    description: "A soft-vote ensemble ML model for customer churn prediction.",
    details: [
      "LightGBM, XGBoost, and CatBoost",
      "Strong ROC-AUC on a large validation set with a full visualization report",
    ],
    accent: "gold",
  },
  {
    number: "05",
    title: "Codeforces Sentinel",
    category: "AUTOMATION / TELEGRAM BOT",
    icon: Radar,
    description: "An automated Telegram bot built using OpenClaw + Groq/Llama.",
    details: [
      "Tracks Codeforces contests, rating changes, and blog activity",
      "Daily tips and weekly summaries",
    ],
    accent: "orange",
  },
  {
    number: "06",
    title: "Academic Routine Automation System",
    category: "WEB SYSTEM / ROLE-BASED ACCESS",
    icon: Database,
    description: "A web-based class routine automation system.",
    details: [
      "Conflict detection and teacher preferences",
      "Real-time notifications and role-based access",
    ],
    accent: "silver",
  },
  {
    number: "07",
    title: "Competitive Programming profile card",
    category: "PROFILE LINKS",
    icon: Trophy,
    description: "Profiles across the competitive programming platforms.",
    details: [],
    accent: "gold",
    links: [
      {
        label: "Codeforces · Ace_Azimuth_Aviator",
        href: "https://codeforces.com/profile/Ace_Azimuth_Aviator",
      },
      {
        label: "CodeChef · mojahidul21",
        href: "https://www.codechef.com/users/mojahidul21",
      },
      {
        label: "AtCoder · MojahidulAlam",
        href: "https://atcoder.jp/users/MojahidulAlam",
      },
    ],
  },
];

const timeline: TimelineItem[] = [
  {
    org: "Bangladesh Open University",
    role: "BSc in Computer Science and Engineering",
    dates: "Expected 2027",
    details:
      "Focus algorithms, data structures, backend programming, ML, data science, tech policy.",
    education: true,
  },
  {
    org: "Team τ",
    role: "Multi-role Member",
    dates: "Feb 2024–Present",
    details:
      "Client relations, requirement analysis, database design, project documentation, strategic planning.",
    current: true,
  },
  {
    org: "Team Ereal",
    role: "Game Developer",
    dates: "Jul 2025–Present",
    details:
      "Gameplay features/systems in Unity and C#, bug fixing, performance optimization, distributed team collaboration.",
    current: true,
  },
  {
    org: "BOU Computer Club",
    role: "Vice President",
    details:
      "Club initiatives, technical programs, workshops, community-building.",
    current: true,
  },
  {
    org: "Skyvector Lab",
    role: "Course Coordinator / Chief Instructor",
    details:
      "Teaches C (CodeForge) and C++ (CodeAlloy), curriculum planning, mentoring.",
    current: true,
  },
];

function ExternalLinkButton({ href, label }: { href: string; label: string }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      data-testid={`link-${label.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`}
      className="focus-ring link-underline inline-flex items-center gap-2 text-sm font-medium text-primary"
    >
      {label}
      <ArrowUpRight size={14} strokeWidth={1.8} aria-hidden="true" />
    </a>
  );
}

function SectionLabel({
  index,
  eyebrow,
  title,
}: {
  index: string;
  eyebrow: string;
  title: string;
}) {
  return (
    <div className="mb-10 grid gap-5 md:grid-cols-[80px_1fr] md:items-start">
      <span
        className="font-mono text-xs tracking-[0.22em] text-primary"
        data-testid={`text-section-index-${index}`}
      >
        {index}
      </span>
      <div>
        <p className="mb-3 font-mono text-xs uppercase tracking-[0.22em] text-muted-foreground">
          {eyebrow}
        </p>
        <h2 className="max-w-2xl text-3xl font-semibold tracking-[-0.04em] text-foreground sm:text-4xl">
          {title}
        </h2>
      </div>
    </div>
  );
}

function ProjectCard({ project }: { project: Project }) {
  const Icon = project.icon;
  const accentClass = {
    gold: "text-primary border-primary/25",
    orange: "text-secondary border-secondary/25",
    silver: "text-accent border-accent/25",
  }[project.accent];

  return (
    <article
      className="card-lift group relative overflow-hidden rounded-lg border border-card-border bg-card p-6 sm:p-7"
      data-testid={`card-project-${project.number}`}
    >
      <div className="mb-10 flex items-start justify-between gap-4">
        <span
          className={`flex size-10 items-center justify-center rounded-md border bg-background/40 ${accentClass}`}
        >
          <Icon size={19} strokeWidth={1.7} aria-hidden="true" />
        </span>
        <span className="font-mono text-xs tracking-[0.18em] text-muted-foreground">
          {project.number}
        </span>
      </div>
      <p className="mb-3 font-mono text-[10px] uppercase tracking-[0.17em] text-muted-foreground">
        {project.category}
      </p>
      <h3 className="mb-3 text-xl font-semibold tracking-[-0.025em] text-foreground">
        {project.title}
      </h3>
      <p className="mb-5 max-w-md text-base leading-7 text-muted-foreground">
        {project.description}
      </p>
      {project.details.length > 0 && (
        <ul className="mb-6 space-y-2.5 text-base leading-6 text-foreground/75">
          {project.details.map((detail) => (
            <li key={detail} className="flex gap-2.5">
              <span
                className={`mt-2 size-1 shrink-0 rounded-full bg-current ${
                  accentClass.split(" ")[0]
                }`}
              />
              <span>{detail}</span>
            </li>
          ))}
        </ul>
      )}
      {project.links && (
        <div className="flex flex-wrap gap-x-5 gap-y-3 border-t border-border pt-4">
          {project.links.map((link) => (
            <ExternalLinkButton
              key={link.href}
              href={link.href}
              label={link.label}
            />
          ))}
        </div>
      )}
      <div
        className={`pointer-events-none absolute -right-12 -top-12 size-36 rounded-full border opacity-0 transition-opacity duration-300 group-hover:opacity-100 ${accentClass}`}
      />
    </article>
  );
}

function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("about");
  const [emailCopied, setEmailCopied] = useState(false);
  const [profileImageFailed, setProfileImageFailed] = useState(false);

  useEffect(() => {
    document.title = "Mojahidul Alam — Aspiring Game Developer & CS Student";
    const description =
      "Mojahidul Alam is an aspiring game developer and CS student building games, software, and learning communities.";
    let meta = document.querySelector('meta[name="description"]');
    if (!meta) {
      meta = document.createElement("meta");
      meta.setAttribute("name", "description");
      document.head.appendChild(meta);
    }
    meta.setAttribute("content", description);
    const sections = navItems
      .map((item) => document.getElementById(item.id))
      .filter(Boolean) as HTMLElement[];
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible) setActiveSection(visible.target.id);
      },
      { rootMargin: "-20% 0px -65% 0px", threshold: [0, 0.15, 0.5] }
    );
    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  const goTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setMobileMenuOpen(false);
  };

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText("mojahidul.alam.21@gmail.com");
      setEmailCopied(true);
      window.setTimeout(() => setEmailCopied(false), 1800);
    } catch {
      window.location.href = "mailto:mojahidul.alam.21@gmail.com";
    }
  };

  return (
    <div className="portfolio-shell">
      <div
        className="site-grid pointer-events-none fixed inset-0 z-0"
        aria-hidden="true"
      />
      <header className="fixed inset-x-0 top-0 z-40 border-b border-border/70 bg-background/85 backdrop-blur-xl">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-5 sm:px-8 lg:px-12">
          <div className="flex items-center gap-3" aria-label="Mojahidul Alam">
            <span className="flex size-8 items-center justify-center rounded border border-primary/60 bg-primary/10 font-mono text-xs font-bold text-primary">
              MA
            </span>
            <span className="hidden font-mono text-xs tracking-[0.16em] text-foreground sm:inline">
              MOJAHIDUL ALAM
            </span>
          </div>
          <nav
            className="hidden items-center gap-7 md:flex"
            aria-label="Main navigation"
          >
            {navItems.map((item) => (
              <button
                key={item.id}
                type="button"
                onClick={() => goTo(item.id)}
                className={`focus-ring font-mono text-[11px] tracking-[0.08em] transition-colors ${
                  activeSection === item.id
                    ? "text-primary"
                    : "text-muted-foreground hover:text-foreground"
                }`}
                data-testid={`button-nav-${item.id}`}
              >
                {item.label}
              </button>
            ))}
          </nav>
          <button
            type="button"
            onClick={() => setMobileMenuOpen((open) => !open)}
            className="focus-ring rounded-md border border-border p-2 text-muted-foreground hover:text-primary md:hidden"
            aria-label={mobileMenuOpen ? "Close navigation" : "Open navigation"}
            aria-expanded={mobileMenuOpen}
            data-testid="button-mobile-menu"
          >
            {mobileMenuOpen ? <X size={19} /> : <Menu size={19} />}
          </button>
        </div>
        {mobileMenuOpen && (
          <nav
            className="border-t border-border bg-background px-5 py-4 md:hidden"
            aria-label="Mobile navigation"
          >
            <div className="grid gap-1">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => goTo(item.id)}
                  className={`focus-ring flex items-center justify-between rounded px-3 py-3 text-left font-mono text-xs tracking-[0.08em] ${
                    activeSection === item.id
                      ? "bg-primary/10 text-primary"
                      : "text-muted-foreground"
                  }`}
                  data-testid={`button-mobile-nav-${item.id}`}
                >
                  <span>{item.label}</span>
                  <ArrowUpRight size={14} />
                </button>
              ))}
            </div>
          </nav>
        )}
      </header>

      <main id="top" className="relative z-10">
        <section
          id="about"
          className="mx-auto max-w-7xl px-5 pb-24 pt-36 sm:px-8 sm:pt-44 lg:px-12 lg:pb-32"
        >
          <div className="grid items-center gap-14 lg:grid-cols-[minmax(0,1.15fr)_minmax(290px,.85fr)] lg:gap-20">
            <div>
              <div className="reveal mb-8 flex items-center gap-3 font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">
                <span className="pulse-dot size-2 rounded-full bg-secondary" />
                Available for meaningful work
              </div>
              <h1 className="reveal reveal-delay-1 whitespace-nowrap text-[clamp(2.7rem,8.6vw,8.75rem)] font-semibold leading-[.92] tracking-[-0.075em] text-foreground">
                Mojahidul <span className="text-primary">Alam</span>
              </h1>
              <p className="reveal reveal-delay-2 mt-4 font-mono text-xs uppercase tracking-[0.2em] text-primary sm:text-sm">
                Aspiring Game Developer &amp; CS Student
              </p>
              <p className="reveal reveal-delay-3 mt-8 max-w-xl text-lg leading-8 text-muted-foreground sm:text-xl">
                Builds games, software, and learning communities across game
                development, web technologies, competitive programming,
                teaching, and research.
              </p>
              <div className="reveal reveal-delay-4 mt-9 flex flex-wrap items-center gap-4">
                <button
                  type="button"
                  onClick={() => goTo("projects")}
                  className="focus-ring inline-flex items-center gap-3 rounded bg-primary px-5 py-3 font-mono text-xs font-semibold uppercase tracking-[0.12em] text-primary-foreground transition-transform hover:-translate-y-0.5"
                  data-testid="button-view-projects"
                >
                  View projects <ArrowDown size={15} />
                </button>
                <button
                  type="button"
                  onClick={copyEmail}
                  className="focus-ring link-underline inline-flex items-center gap-2 py-3 font-mono text-xs uppercase tracking-[0.12em] text-muted-foreground hover:text-primary"
                  data-testid="link-hero-email"
                >
                  {emailCopied ? "Email copied!" : "Start a conversation"}{" "}
                  <ArrowUpRight size={14} />
                </button>
              </div>
            </div>
            <div className="reveal reveal-delay-3 relative flex flex-col items-center justify-center lg:pb-3">
              <div className="relative flex size-44 items-center justify-center rounded-full border border-primary/60 bg-card p-2 shadow-[0_0_0_10px_hsl(var(--primary)/.06)]">
                {profileImageFailed ? (
                  <span
                    className="flex size-full items-center justify-center rounded-full bg-muted font-mono text-3xl font-semibold tracking-[0.12em] text-primary"
                    data-testid="profile-fallback"
                  >
                    MA
                  </span>
                ) : (
                  <img
                    src="/profile.png"
                    alt="Mojahidul Alam"
                    className="size-full rounded-full object-cover grayscale"
                    onError={() => setProfileImageFailed(true)}
                    data-testid="img-profile"
                  />
                )}
                <span className="absolute -bottom-3 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full border border-secondary/50 bg-background px-3 py-1.5 font-mono text-[10px] tracking-[0.08em] text-foreground">
                  🌐 Open to Remote Work
                </span>
              </div>
              <div className="mt-10 flex items-center gap-3 font-mono text-[10px] uppercase tracking-[0.17em] text-muted-foreground">
                <span className="h-px w-10 bg-primary/50" /> Systems, play, and
                practical learning
              </div>
            </div>
          </div>
          <div className="mt-20 flex items-center gap-4 font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground sm:mt-28">
            <span className="h-px w-12 bg-border" /> Scroll to explore{" "}
            <ChevronDown size={14} className="text-primary" />
          </div>
        </section>

        <section id="skills" className="border-y border-border/70 bg-card/25">
          <div className="mx-auto max-w-7xl px-5 py-24 sm:px-8 lg:px-12 lg:py-32">
            <SectionLabel
              index="01"
              eyebrow="The toolkit"
              title="Fluent across the stack, curious beyond it."
            />
            <div className="grid gap-px overflow-hidden rounded-lg border border-border bg-border sm:grid-cols-2 lg:grid-cols-3">
              {skillGroups.map((group) => {
                const Icon = group.icon;
                return (
                  <article
                    key={group.label}
                    className="bg-card p-6 sm:p-7"
                    data-testid={`card-skill-${group.label
                      .toLowerCase()
                      .replace(/[^a-z0-9]+/g, "-")}`}
                  >
                    <div className="mb-7 flex items-center justify-between">
                      <Icon
                        size={19}
                        className="text-primary"
                        strokeWidth={1.6}
                      />
                      <span className="font-mono text-[10px] text-muted-foreground">
                        0{skillGroups.indexOf(group) + 1}
                      </span>
                    </div>
                    <h3 className="mb-4 font-mono text-xs uppercase tracking-[0.13em] text-foreground">
                      {group.label}
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {group.items.map((item) => (
                        <span
                          key={item}
                          className="rounded border border-border bg-background/50 px-2.5 py-1.5 font-mono text-[11px] text-muted-foreground"
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  </article>
                );
              })}
            </div>
            <div className="mt-12 grid gap-6 border-l-2 border-primary/50 pl-5 sm:grid-cols-[1.2fr_.8fr] sm:pl-7">
              <p className="max-w-xl text-xl leading-8 tracking-[-0.02em] text-foreground/85">
                Research interests: machine learning, data science, technology
                policy.
              </p>
              <p className="font-mono text-xs leading-6 text-muted-foreground">
                The common thread is systems thinking — understanding how parts
                interact, then making the whole thing useful.
              </p>
            </div>
          </div>
        </section>

        <section
          id="projects"
          className="mx-auto max-w-7xl px-5 py-24 sm:px-8 lg:px-12 lg:py-32"
        >
          <SectionLabel
            index="02"
            eyebrow="Selected work"
            title="Things built to be used, played, and understood."
          />
          <div className="grid gap-4 md:grid-cols-2">
            {projects.map((project) => (
              <ProjectCard key={project.number} project={project} />
            ))}
          </div>
        </section>

        <section id="journey" className="border-y border-border/70 bg-card/25">
          <div className="mx-auto max-w-7xl px-5 py-24 sm:px-8 lg:px-12 lg:py-32">
            <SectionLabel
              index="03"
              eyebrow="Experience & education"
              title="Learning in public, contributing in teams."
            />
            <div className="grid gap-12 lg:grid-cols-[.75fr_1.25fr] lg:gap-24">
              <div>
                <div className="mb-5 flex items-center gap-3 font-mono text-xs uppercase tracking-[0.16em] text-primary">
                  <GraduationCap size={17} /> Education
                </div>
                <p className="max-w-sm text-base leading-7 text-muted-foreground">
                  A degree grounded in computer science, with room for
                  algorithms, machine learning, data science, and technology
                  policy.
                </p>
              </div>
              <div className="relative space-y-0 border-l border-border">
                {timeline.map((item, index) => (
                  <article
                    key={item.org}
                    className="relative pb-10 pl-7 last:pb-0 sm:pl-10"
                    data-testid={`timeline-item-${index}`}
                  >
                    <span
                      className={`absolute -left-[5px] top-1.5 size-2 rounded-full border-2 border-background ${
                        item.education
                          ? "bg-primary"
                          : item.current
                          ? "bg-accent"
                          : "bg-muted-foreground"
                      }`}
                    />
                    <div className="mb-2 flex flex-wrap items-center gap-x-3 gap-y-1">
                      <h3 className="text-lg font-semibold tracking-[-0.02em] text-foreground">
                        {item.org}
                      </h3>
                      {item.current && (
                        <span className="font-mono text-[10px] uppercase tracking-[0.12em] text-accent">
                          Active
                        </span>
                      )}
                    </div>
                    <div className="mb-3 flex flex-wrap gap-x-3 gap-y-1 font-mono text-xs">
                      <span className="text-primary">{item.role}</span>
                      {item.dates && (
                        <span className="text-muted-foreground">
                          {item.dates}
                        </span>
                      )}
                    </div>
                    <p className="max-w-xl text-base leading-7 text-muted-foreground">
                      {item.details}
                    </p>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section
          id="contact"
          className="mx-auto max-w-7xl px-5 py-24 sm:px-8 lg:px-12 lg:py-36"
        >
          <div className="relative overflow-hidden rounded-lg border border-primary/30 bg-card p-7 sm:p-12 lg:p-16">
            <div className="pointer-events-none absolute -right-28 -top-28 size-72 rounded-full border border-primary/15" />
            <div className="pointer-events-none absolute -right-16 -top-16 size-48 rounded-full border border-secondary/15" />
            <div className="relative grid gap-12 lg:grid-cols-[1fr_.8fr] lg:items-end">
              <div>
                <p className="mb-5 font-mono text-xs uppercase tracking-[0.2em] text-primary">
                  04 / Contact
                </p>
                <h2 className="max-w-2xl text-4xl font-semibold leading-[.98] tracking-[-0.055em] text-foreground sm:text-6xl">
                  Have a problem worth building?
                </h2>
                <p className="mt-6 max-w-lg text-base leading-7 text-muted-foreground">
                  Email and GitHub are the best places to reach me. WhatsApp is
                  also available when a quick conversation makes sense.
                </p>
                <button
                  type="button"
                  onClick={copyEmail}
                  className="focus-ring mt-8 inline-flex items-center gap-3 rounded border border-primary/40 bg-primary/10 px-4 py-3 font-mono text-xs text-primary transition-colors hover:bg-primary/15"
                  data-testid="button-copy-email"
                >
                  {emailCopied ? <Check size={15} /> : <Copy size={15} />}
                  {emailCopied ? "Email copied" : "Copy email address"}
                </button>
              </div>
              <div className="grid gap-5 font-mono text-sm">
                <a
                  href="mailto:mojahidul.alam.21@gmail.com"
                  className="focus-ring group flex items-center justify-between border-b border-border pb-4 text-foreground"
                  data-testid="link-contact-email"
                >
                  <span className="flex items-center gap-3">
                    <Mail size={17} className="text-primary" />{" "}
                    mojahidul.alam.21@gmail.com
                  </span>
                  <ArrowUpRight
                    size={16}
                    className="text-muted-foreground transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                  />
                </a>
                <a
                  href="https://github.com/Mojahidul21"
                  target="_blank"
                  rel="noreferrer"
                  className="focus-ring group flex items-center justify-between border-b border-border pb-4 text-foreground"
                  data-testid="link-contact-github"
                >
                  <span className="flex items-center gap-3">
                    <Github size={17} className="text-primary" />{" "}
                    github.com/Mojahidul21
                  </span>
                  <ExternalLink size={15} className="text-muted-foreground" />
                </a>
                <a
                  href="https://wa.me/8801581390191"
                  target="_blank"
                  rel="noreferrer"
                  className="focus-ring group flex items-center justify-between border-b border-border pb-4 text-foreground"
                  data-testid="link-contact-whatsapp"
                >
                  <span className="flex items-center gap-3">
                    <Send size={17} className="text-accent" /> +880 1581-390191
                  </span>
                  <ExternalLink size={15} className="text-muted-foreground" />
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-border/70">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 px-5 py-7 sm:flex-row sm:items-center sm:justify-between sm:px-8 lg:px-12">
          <p className="font-mono text-[10px] uppercase tracking-[0.16em] text-muted-foreground">
            Mojahidul Alam · Aspiring Game Developer &amp; CS Student
          </p>
          <div className="flex items-center gap-5 font-mono text-[10px] uppercase tracking-[0.15em] text-muted-foreground">
            <a
              href="https://github.com/Mojahidul21"
              target="_blank"
              rel="noreferrer"
              className="focus-ring hover:text-primary"
              data-testid="link-footer-github"
            >
              GitHub
            </a>
            <a
              href="https://codeforces.com/profile/Ace_Azimuth_Aviator"
              target="_blank"
              rel="noreferrer"
              className="focus-ring hover:text-primary"
              data-testid="link-footer-codeforces"
            >
              Codeforces
            </a>
          </div>
        </div>
      </footer>

      <button
        type="button"
        onClick={() => goTo("top")}
        className="focus-ring fixed bottom-6 right-6 z-40 flex size-11 items-center justify-center rounded-full border border-border bg-card text-foreground shadow-lg hover:text-primary"
        aria-label="Back to top"
      >
        <ArrowUpRight size={16} className="-rotate-45" />
      </button>
    </div>
  );
}

export default App;