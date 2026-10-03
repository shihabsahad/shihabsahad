import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import {
  ArrowUpRight, Menu, X, Mail, MessageCircle, Linkedin, Instagram, Megaphone, Users,
  PenTool, Monitor, MapPin, Target, Check, Quote, Sparkles, TrendingUp, Briefcase, Lightbulb,
} from "lucide-react";
import portrait from "@/assets/portrait.jpg";
import w1 from "@/assets/work-1.jpg";
import w2 from "@/assets/work-2.jpg";
import w3 from "@/assets/work-3.jpg";
import w4 from "@/assets/work-4.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Shihab — Digital Marketing Specialist | Portfolio" },
      { name: "description", content: "I help businesses grow through digital marketing, social media management, content creation and conversion-focused websites." },
      { property: "og:title", content: "Shihab — Digital Marketing Specialist" },
      { property: "og:description", content: "Strategy, content, social media and websites that drive real business growth." },
    ],
  }),
  component: Index,
});

const EMAIL = "mailto:shihabtm06@gmail.com";
const WA = "https://wa.me/916235371289";
const LI = "https://www.linkedin.com/in/shihabsahad/";
const IG = "https://www.instagram.com/shihab.sahad?stkn=Mjkweml6azFjZzVs";

const nav = [
  ["Home", "home"], ["About", "about"], ["Services", "services"],
  ["Work", "work"], ["Skills", "skills"], ["Contact", "contact"],
];

const services = [
  { icon: Megaphone, t: "Digital Marketing", i: ["Digital strategy", "Campaign planning", "Online brand growth", "Lead generation"] },
  { icon: Users, t: "Social Media Management", i: ["Instagram management", "Facebook management", "Content planning", "Audience engagement"] },
  { icon: PenTool, t: "Content Creation", i: ["Social media posts", "Reels", "Captions", "Marketing content", "Brand storytelling"] },
  { icon: Monitor, t: "Website Design", i: ["Business websites", "Landing pages", "Website redesign", "Conversion-focused layouts"] },
  { icon: MapPin, t: "SEO & Local Marketing", i: ["On-page SEO", "Google Business Profile optimization", "Local SEO", "Business visibility"] },
  { icon: Target, t: "Meta Advertising", i: ["Facebook & Instagram Ads", "Audience targeting", "Lead generation campaigns", "Campaign optimization"] },
];

const work = [
  { img: w1, n: "Nujoud General Contracting", tags: ["Digital Marketing", "Social Media", "Content Creation", "Website", "Lead Generation"], d: "Built a complete online presence for a contracting firm — from social content to a lead-focused website.", u: "" },
  { img: w2, n: "Brand Yatra", tags: ["Digital Marketing", "Social Media", "Content Strategy", "Brand Marketing"], d: "Content strategy and brand marketing that grew an engaged, consistent social audience.", u: "https://www.instagram.com/reel/DO5ynnFj07z/?stkn=MTBiMWd4bmx4NGl4cw==" },
  { img: w3, n: "Gate Way Associates", tags: ["Digital Marketing", "Content Creation", "Social Media"], d: "Professional content and social media positioning for a growing business consultancy.", u: "" },
  { img: w4, n: "Prestige", tags: ["Digital Marketing", "Content & Social Media"], d: "Premium content and social media work crafted to reflect a refined brand identity.", u: "" },
];

const steps = [
  ["Understand", "Understand the business, target audience and goals."],
  ["Plan", "Create a customized digital marketing strategy."],
  ["Create", "Develop engaging content, campaigns and digital assets."],
  ["Launch", "Execute campaigns across relevant platforms."],
  ["Optimize", "Track performance and continuously improve results."],
];

const skills: [string, number][] = [
  ["Digital Marketing", 92], ["Social Media Marketing", 94], ["Content Creation", 95], ["Meta Ads", 85],
  ["SEO", 80], ["Google Business Profile", 88], ["Lead Generation", 86], ["Website Design", 87],
  ["Branding", 84], ["Copywriting", 88], ["Instagram Marketing", 93], ["Facebook Marketing", 90],
];

const why = [
  { icon: Briefcase, t: "Business-Focused Strategy", d: "I focus on marketing strategies that support real business goals." },
  { icon: Lightbulb, t: "Creative Content", d: "I create content designed to capture attention and communicate the brand clearly." },
  { icon: Sparkles, t: "Practical Experience", d: "I have hands-on experience working with real businesses and projects." },
  { icon: TrendingUp, t: "Result-Oriented Approach", d: "Every campaign and strategy is designed with measurable growth in mind." },
];

// Placeholder testimonials — replace with real client quotes
const testimonials = [
  { q: "Shihab transformed our social media presence. Our enquiries grew noticeably within the first few months.", n: "Ahmed Rahman", r: "Founder, Client Company" },
  { q: "Creative, reliable and strategic. The content he created truly captured our brand's personality.", n: "Priya Nair", r: "Marketing Head, Client Brand" },
  { q: "Our new website looks premium and actually converts. Working with Shihab was effortless.", n: "Rahul Menon", r: "Director, Client Business" },
];

function useReveal() {
  useEffect(() => {
    const io = new IntersectionObserver((es) => es.forEach((e) => {
      if (e.isIntersecting) { e.target.classList.add("in"); io.unobserve(e.target); }
    }), { threshold: 0.12 });
    document.querySelectorAll(".reveal").forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);
}

function Eyebrow({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center gap-2 rounded-full glass px-3 py-1 text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground">
      <span className="h-1.5 w-1.5 rounded-full bg-primary" />{children}
    </span>
  );
}

const btnPrimary = "group inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3.5 text-sm font-semibold text-primary-foreground glow-ring transition hover:-translate-y-0.5 hover:bg-glow";
const btnGhost = "inline-flex items-center gap-2 rounded-full glass px-6 py-3.5 text-sm font-semibold text-foreground transition hover:-translate-y-0.5 hover:border-primary/60";

function Index() {
  useReveal();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const f = () => setScrolled(window.scrollY > 20);
    f(); window.addEventListener("scroll", f); return () => window.removeEventListener("scroll", f);
  }, []);

  return (
    <div className="overflow-x-hidden">
      {/* NAV */}
      <header className={`fixed inset-x-0 top-0 z-50 transition ${scrolled ? "glass border-x-0 border-t-0" : ""}`}>
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 md:px-8" aria-label="Main">
          <a href="#home" className="font-display text-xl font-semibold">Shihab<span className="text-primary">.</span></a>
          <ul className="hidden gap-8 md:flex">
            {nav.map(([l, id]) => (
              <li key={id}><a href={`#${id}`} className="text-sm text-muted-foreground transition hover:text-foreground">{l}</a></li>
            ))}
          </ul>
          <a href="#contact" className="hidden rounded-full bg-foreground px-5 py-2.5 text-sm font-semibold text-background transition hover:bg-primary hover:text-primary-foreground md:inline-flex">Hire Me</a>
          <button className="md:hidden" aria-label={open ? "Close menu" : "Open menu"} onClick={() => setOpen(!open)}>
            {open ? <X /> : <Menu />}
          </button>
        </nav>
        {open && (
          <div className="glass mx-4 mb-4 rounded-2xl p-4 md:hidden">
            {nav.map(([l, id]) => (
              <a key={id} href={`#${id}`} onClick={() => setOpen(false)} className="block rounded-lg px-3 py-3 text-base hover:bg-accent">{l}</a>
            ))}
            <a href="#contact" onClick={() => setOpen(false)} className={`${btnPrimary} mt-2 w-full justify-center`}>Let's Work Together</a>
          </div>
        )}
      </header>

      <main>
        {/* HERO */}
        <section id="home" className="relative min-h-screen pt-28 md:pt-36">
          <div className="absolute inset-0 bg-grid" aria-hidden />
          <div className="absolute -top-40 right-0 h-[600px] w-[600px] bg-spot" aria-hidden />
          <div className="relative mx-auto grid max-w-7xl items-center gap-14 px-5 pb-20 md:grid-cols-[1.2fr_1fr] md:px-8">
            <div className="reveal">
              <Eyebrow>Available for new projects</Eyebrow>
              <h1 className="mt-6 text-5xl font-semibold leading-[1.02] md:text-7xl lg:text-[5.5rem]">
                I Help Businesses <span className="text-gradient">Grow</span> Through Digital Marketing
              </h1>
              <p className="mt-6 text-sm font-medium uppercase tracking-[0.18em] text-primary">
                Digital Marketer · Social Media Strategist · Content Creator · Website Specialist
              </p>
              <p className="mt-5 max-w-xl text-lg text-muted-foreground">
                I help businesses build a stronger online presence through strategic digital marketing, engaging content, social media management and conversion-focused websites.
              </p>
              <div className="mt-9 flex flex-wrap gap-3">
                <a href="#work" className={btnPrimary}>View My Work <ArrowUpRight className="h-4 w-4 transition group-hover:rotate-45" /></a>
                <a href="#contact" className={btnGhost}>Let's Work Together</a>
              </div>
            </div>
            <div className="reveal relative mx-auto w-full max-w-md">
              <div className="absolute -inset-6 rounded-[2.5rem] bg-spot blur-2xl" aria-hidden />
              <div className="relative overflow-hidden rounded-[2rem] border border-border glow-ring">
                <img src={portrait} alt="Shihab, Digital Marketing Specialist" width={896} height={1152} className="h-full w-full object-cover" />
                <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-background to-transparent" />
              </div>
              <div className="glass absolute -left-4 bottom-10 rounded-2xl px-4 py-3 md:-left-10">
                <p className="font-display text-2xl font-semibold">2+ yrs</p>
                <p className="text-xs text-muted-foreground">Digital Marketing</p>
              </div>
              <div className="glass absolute -right-3 top-8 flex items-center gap-2 rounded-2xl px-4 py-3 md:-right-8">
                <TrendingUp className="h-5 w-5 text-primary" />
                <p className="text-sm font-medium">Growth-focused</p>
              </div>
            </div>
          </div>
          <div className="relative border-y border-border py-5">
            <div className="flex w-max animate-marquee gap-12 whitespace-nowrap font-display text-2xl text-muted-foreground">
              {[...Array(2)].flatMap((_, k) => ["Digital Strategy", "Social Media", "Content Creation", "Meta Ads", "Websites", "Local SEO", "Lead Generation", "Branding"].map((s) => (
                <span key={s + k} className="flex items-center gap-12">{s}<span className="text-primary">✦</span></span>
              )))}
            </div>
          </div>
        </section>

        {/* ABOUT */}
        <section id="about" className="mx-auto max-w-7xl px-5 py-24 md:px-8 md:py-32">
          <div className="grid gap-14 md:grid-cols-2">
            <div className="reveal">
              <Eyebrow>About Me</Eyebrow>
              <h2 className="mt-6 text-4xl font-semibold md:text-5xl">Strategy, content & websites — <span className="text-muted-foreground">under one roof.</span></h2>
            </div>
            <div className="reveal">
              <p className="text-lg leading-relaxed text-muted-foreground">
                I'm <span className="text-foreground">Shihab</span>, a Digital Marketing Specialist with hands-on experience in digital marketing, social media management, content creation and website development. I work with businesses to improve their online presence, reach the right audience and generate meaningful results through digital strategies.
              </p>
              <ul className="mt-8 grid grid-cols-2 gap-3">
                {["Digital Marketing Experience", "Social Media Management", "Content Creation", "Website Design", "Lead Generation", "Brand Growth"].map((h) => (
                  <li key={h} className="flex items-center gap-2 text-sm"><Check className="h-4 w-4 shrink-0 text-primary" />{h}</li>
                ))}
              </ul>
            </div>
          </div>
          <div className="mt-16 grid gap-4 sm:grid-cols-3">
            {[["2+", "Years", "Digital Marketing Experience"], ["3+", "Years", "Content Creation"], ["Multiple", "", "Business & Brand Projects"]].map(([n, u, l]) => (
              <div key={l} className="reveal glass rounded-3xl p-8 transition hover:border-primary/50">
                <p className="font-display text-5xl font-semibold text-gradient">{n} <span className="text-2xl">{u}</span></p>
                <p className="mt-3 text-muted-foreground">{l}</p>
              </div>
            ))}
          </div>
        </section>

        {/* SERVICES */}
        <section id="services" className="relative py-24 md:py-32">
          <div className="absolute left-0 top-1/3 h-[500px] w-[500px] bg-spot opacity-50" aria-hidden />
          <div className="relative mx-auto max-w-7xl px-5 md:px-8">
            <div className="reveal max-w-2xl">
              <Eyebrow>Services</Eyebrow>
              <h2 className="mt-6 text-4xl font-semibold md:text-5xl">Everything your brand needs to grow online.</h2>
            </div>
            <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {services.map(({ icon: I, t, i }, idx) => (
                <article key={t} className="reveal group glass relative overflow-hidden rounded-3xl p-8 transition duration-500 hover:-translate-y-1 hover:border-primary/50">
                  <div className="absolute -right-16 -top-16 h-40 w-40 bg-spot opacity-0 transition group-hover:opacity-100" />
                  <div className="flex items-start justify-between">
                    <div className="grid h-12 w-12 place-items-center rounded-2xl bg-accent text-primary"><I className="h-6 w-6" /></div>
                    <span className="font-display text-sm text-muted-foreground">0{idx + 1}</span>
                  </div>
                  <h3 className="mt-8 text-2xl font-semibold">{t}</h3>
                  <ul className="mt-5 space-y-2">
                    {i.map((x) => <li key={x} className="flex items-center gap-2 text-sm text-muted-foreground"><span className="h-1 w-1 rounded-full bg-primary" />{x}</li>)}
                  </ul>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* WORK */}
        <section id="work" className="mx-auto max-w-7xl px-5 py-24 md:px-8 md:py-32">
          <div className="reveal flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div className="max-w-2xl">
              <Eyebrow>Portfolio</Eyebrow>
              <h2 className="mt-6 text-4xl font-semibold md:text-6xl">Selected Work</h2>
              <p className="mt-4 text-lg text-muted-foreground">A selection of projects, campaigns and digital marketing work I've worked on.</p>
            </div>
            <a href="#contact" className={btnGhost}>Start a project <ArrowUpRight className="h-4 w-4" /></a>
          </div>
          <div className="mt-14 grid gap-6 md:grid-cols-2">
            {work.map((p, i) => (
              <article key={p.n} className={`reveal group overflow-hidden rounded-3xl border border-border bg-card transition hover:border-primary/50 ${i % 2 ? "md:translate-y-16" : ""}`}>
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img src={p.img} alt={`${p.n} project`} loading="lazy" width={1280} height={896} className="h-full w-full object-cover transition duration-700 group-hover:scale-105" />
                  <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent" />
                </div>
                <div className="p-7">
                  <div className="flex flex-wrap gap-2">
                    {p.tags.map((t) => <span key={t} className="rounded-full border border-border px-3 py-1 text-xs text-muted-foreground">{t}</span>)}
                  </div>
                  <h3 className="mt-5 text-2xl font-semibold md:text-3xl">{p.n}</h3>
                  <p className="mt-3 text-muted-foreground">{p.d}</p>
                  <a href={p.u || "#contact"} {...(p.u ? { target: "_blank", rel: "noopener noreferrer" } : {})} className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-primary transition hover:gap-3">
                    View Project <ArrowUpRight className="h-4 w-4" />
                  </a>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* PROCESS */}
        <section className="border-y border-border bg-surface py-24 md:mt-16 md:py-32">
          <div className="mx-auto max-w-7xl px-5 md:px-8">
            <div className="reveal max-w-2xl">
              <Eyebrow>Process</Eyebrow>
              <h2 className="mt-6 text-4xl font-semibold md:text-5xl">How I Help Businesses Grow</h2>
            </div>
            <ol className="mt-14 grid gap-4 md:grid-cols-5">
              {steps.map(([t, d], i) => (
                <li key={t} className="reveal group rounded-3xl border border-border p-6 transition hover:bg-accent">
                  <span className="font-display text-4xl font-semibold text-primary">0{i + 1}</span>
                  <h3 className="mt-6 text-xl font-semibold">{t}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{d}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* SKILLS */}
        <section id="skills" className="mx-auto max-w-7xl px-5 py-24 md:px-8 md:py-32">
          <div className="reveal max-w-2xl">
            <Eyebrow>Skills</Eyebrow>
            <h2 className="mt-6 text-4xl font-semibold md:text-5xl">A toolkit built for growth.</h2>
          </div>
          <div className="mt-14 grid gap-x-12 gap-y-7 md:grid-cols-2">
            {skills.map(([s, v]) => (
              <div key={s} className="reveal group">
                <div className="flex justify-between text-sm"><span className="font-medium">{s}</span><span className="text-muted-foreground">{v}%</span></div>
                <div className="mt-2 h-1.5 overflow-hidden rounded-full bg-muted">
                  <div className="h-full rounded-full bg-gradient-to-r from-primary to-glow transition-[width] duration-[1500ms] ease-out [.reveal:not(.in)_&]:!w-0" style={{ width: `${v}%` }} />
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* WHY */}
        <section className="mx-auto max-w-7xl px-5 pb-24 md:px-8 md:pb-32">
          <div className="reveal glass relative overflow-hidden rounded-[2.5rem] p-8 md:p-14">
            <div className="absolute -right-20 -top-20 h-96 w-96 bg-spot" aria-hidden />
            <h2 className="relative text-4xl font-semibold md:text-5xl">Why Work With Me?</h2>
            <div className="relative mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
              {why.map(({ icon: I, t, d }) => (
                <div key={t}>
                  <I className="h-7 w-7 text-primary" />
                  <h3 className="mt-5 text-lg font-semibold">{t}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{d}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* TESTIMONIALS */}
        <section className="mx-auto max-w-7xl px-5 pb-24 md:px-8 md:pb-32">
          <div className="reveal max-w-2xl">
            <Eyebrow>Testimonials</Eyebrow>
            <h2 className="mt-6 text-4xl font-semibold md:text-5xl">What clients say.</h2>
          </div>
          <div className="mt-14 grid gap-4 md:grid-cols-3">
            {testimonials.map((t) => (
              <figure key={t.n} className="reveal glass flex flex-col rounded-3xl p-8 transition hover:border-primary/50">
                <Quote className="h-8 w-8 text-primary" />
                <blockquote className="mt-6 flex-1 text-lg leading-relaxed">"{t.q}"</blockquote>
                <figcaption className="mt-8 flex items-center gap-3">
                  <div className="grid h-11 w-11 place-items-center rounded-full bg-accent font-display font-semibold text-primary">{t.n[0]}</div>
                  <div><p className="font-semibold">{t.n}</p><p className="text-sm text-muted-foreground">{t.r}</p></div>
                </figcaption>
              </figure>
            ))}
          </div>
        </section>

        {/* CONTACT */}
        <section id="contact" className="relative overflow-hidden border-t border-border py-24 md:py-36">
          <div className="absolute inset-0 bg-grid" aria-hidden />
          <div className="absolute left-1/2 top-1/2 h-[700px] w-[700px] -translate-x-1/2 -translate-y-1/2 bg-spot" aria-hidden />
          <div className="reveal relative mx-auto max-w-4xl px-5 text-center">
            <Eyebrow>Contact</Eyebrow>
            <h2 className="mt-6 text-5xl font-semibold leading-tight md:text-7xl">Let's Grow Your Business <span className="text-gradient">Online</span></h2>
            <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground">
              Looking for a digital marketer to manage your social media, create content, build your online presence or generate leads? Let's discuss your business goals.
            </p>
            <div className="mt-10 flex flex-wrap justify-center gap-3">
              <a href={WA} target="_blank" rel="noopener noreferrer" className={btnPrimary}><MessageCircle className="h-4 w-4" /> WhatsApp Me</a>
              <a href={EMAIL} className={btnGhost}><Mail className="h-4 w-4" /> Email Me</a>
              <a href={LI} target="_blank" rel="noopener noreferrer" className={btnGhost}><Linkedin className="h-4 w-4" /> Connect on LinkedIn</a>
            </div>
            <div className="mt-10 flex flex-col items-center justify-center gap-2 text-sm text-muted-foreground sm:flex-row sm:gap-8">
              <a href={EMAIL} className="hover:text-foreground">shihabtm06@gmail.com</a>
              <a href="tel:+916235371289" className="hover:text-foreground">+91 6235371289</a>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-border">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 px-5 py-10 md:flex-row md:px-8">
          <p className="font-display text-lg font-semibold">Shihab <span className="text-muted-foreground font-normal">— Digital Marketing Specialist</span></p>
          <div className="flex gap-3">
            {[[Instagram, IG, "Instagram"], [Linkedin, LI, "LinkedIn"], [MessageCircle, WA, "WhatsApp"], [Mail, EMAIL, "Email"]].map(([I, h, l]) => {
              const Icon = I as typeof Mail;
              return (
                <a key={l as string} href={h as string} aria-label={l as string} target="_blank" rel="noopener noreferrer" className="grid h-10 w-10 place-items-center rounded-full glass transition hover:border-primary hover:text-primary">
                  <Icon className="h-4 w-4" />
                </a>
              );
            })}
          </div>
          <p className="text-sm text-muted-foreground">© 2026 Shihab. All Rights Reserved.</p>
        </div>
      </footer>
    </div>
  );
}
