import Image from "next/image";
import Link from "next/link";
import { ArrowRight, BadgeCheck, Ban, FlaskConicalOff, HandHeart, Leaf, MapPin, Phone, ShieldCheck, Sprout, Truck } from "lucide-react";
import { FadeIn, Float, FloatingLeaf, Stagger, StaggerItem } from "@/components/client";
import { WhatsAppIcon } from "@/components/SiteChrome";
import ProductSpotlightClassic from "@/components/ProductSpotlightClassic";
import { SITE, waLink } from "@/lib/site";

export const metadata = {
  alternates: { canonical: "/" },
};

const TRUST = [
  { icon: BadgeCheck, title: "100% Certified", text: "Every product meets the norms of an organic certifying body." },
  { icon: FlaskConicalOff, title: "Zero Chemicals", text: "No chemical fertilizers, pesticides or synthetic inputs." },
  { icon: Ban, title: "No Preservatives", text: "Nothing artificial added during processing or packing." },
  { icon: HandHeart, title: "Ethically Sourced", text: "Partnerships with farmers who share our honesty." },
];

const MARQUEE = ["Millets", "Cold-Pressed Oils", "Unpolished Dals", "Himalayan Pink Salt", "Organic Jaggery", "Raw Honey", "Stone-Ground Atta", "Pure Spices", "Red Rice", "Dry Fruits"];

// The home page keeps the original ("classic") look; the wrapper restores its palette and texture.
export default function HomePage() {
  return (
    <div className="theme-classic grain">
      {/* ───────── HERO ───────── */}
      <section className="leaf-pattern relative overflow-hidden">
        <FloatingLeaf className="absolute left-[4%] top-24 h-12 w-12 text-leaf-400/50" />
        <FloatingLeaf className="absolute bottom-20 right-[45%] h-8 w-8 text-saffron-400/50" delay={2} />
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-6 pb-20 pt-12 md:pt-20 lg:grid-cols-2 lg:pb-28">
          <div>
            <FadeIn>
              <span className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-sm font-medium text-leaf-700 shadow-sm ring-1 ring-leaf-100">
                <Sprout className="h-4 w-4" /> Rajajinagar&apos;s trusted organic store
              </span>
            </FadeIn>
            <FadeIn delay={0.1}>
              <h1 className="mt-6 text-5xl font-semibold leading-[1.05] text-leaf-900 md:text-7xl">
                Pure food,
                <br />
                <span className="relative inline-block italic text-leaf-600">
                  honestly grown.
                  <svg viewBox="0 0 300 18" className="absolute -bottom-2 left-0 w-full text-saffron-400" aria-hidden="true">
                    <path d="M2 14C80 2 200 2 298 12" stroke="currentColor" strokeWidth="4" fill="none" strokeLinecap="round" />
                  </svg>
                </span>
              </h1>
            </FadeIn>
            <FadeIn delay={0.2}>
              <p className="mt-8 max-w-xl text-lg leading-relaxed text-ink/70">
                Sri Maharshi Organics brings you 100% certified, authentic organic food — grown and processed without chemical fertilizers,
                pesticides or preservatives. Good for your family, good for the farmers, good for the soil.
              </p>
            </FadeIn>
            <FadeIn delay={0.3}>
              <div className="mt-9 flex flex-wrap gap-3">
                <a href={waLink("Hello Maharshi Organics! I'd like to place an order.")} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-full bg-leaf-600 px-7 py-4 font-semibold text-white shadow-xl shadow-leaf-600/30 transition hover:-translate-y-0.5 hover:bg-leaf-700">
                  <WhatsAppIcon className="h-5 w-5" /> Order on WhatsApp
                </a>
                <Link href="/products" className="inline-flex items-center gap-2 rounded-full bg-white px-7 py-4 font-semibold text-leaf-800 ring-1 ring-leaf-200 transition hover:-translate-y-0.5 hover:ring-leaf-400">
                  Browse Products <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </FadeIn>
            <FadeIn delay={0.4}>
              <div className="mt-10 flex flex-wrap items-center gap-6 text-sm text-ink/60">
                <a href={SITE.phoneHref} className="flex items-center gap-2 font-medium hover:text-leaf-700">
                  <span className="grid h-9 w-9 place-items-center rounded-full bg-saffron-500/10 text-saffron-600"><Phone className="h-4 w-4" /></span>
                  {SITE.phoneDisplay}
                </a>
                <a href={SITE.mapsLink} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 font-medium hover:text-leaf-700">
                  <span className="grid h-9 w-9 place-items-center rounded-full bg-leaf-100 text-leaf-700"><MapPin className="h-4 w-4" /></span>
                  Next to A2B, Bhasyam Circle
                </a>
              </div>
            </FadeIn>
          </div>

          <FadeIn delay={0.2} className="relative mx-auto w-full max-w-lg">
            <div className="absolute inset-6 rounded-full bg-gradient-to-br from-leaf-200 via-leaf-100 to-saffron-400/30 blur-2xl" />
            <div className="relative grid aspect-square place-items-center rounded-full bg-white shadow-[0_40px_80px_-30px_rgba(21,63,27,0.45)] ring-8 ring-white/60">
              <div className="absolute inset-3 rounded-full border-2 border-dashed border-leaf-200" />
              <Float distance={10} className="relative h-[78%]">
                <Image src="/logo.png" alt="Maharshi Organics — sage meditating under a tree" width={315} height={465} priority className="h-full w-auto object-contain" />
              </Float>
            </div>
            <Float delay={0.5} className="absolute -left-2 top-12 md:-left-8">
              <div className="flex items-center gap-3 rounded-2xl bg-white px-4 py-3 shadow-xl ring-1 ring-leaf-100">
                <span className="grid h-10 w-10 place-items-center rounded-xl bg-leaf-100 text-leaf-700"><ShieldCheck className="h-5 w-5" /></span>
                <div className="text-sm">
                  <p className="font-semibold">Certified Organic</p>
                  <p className="text-ink/50">Authentic & traceable</p>
                </div>
              </div>
            </Float>
            <Float delay={1.4} className="absolute -right-2 -bottom-2 md:-right-6">
              <div className="flex items-center gap-3 rounded-2xl bg-white px-4 py-3 shadow-xl ring-1 ring-leaf-100">
                <span className="grid h-10 w-10 place-items-center rounded-xl bg-saffron-500/10 text-2xl">🌾</span>
                <div className="text-sm">
                  <p className="font-semibold">Millets to Masalas</p>
                  <p className="text-ink/50">Everyday staples</p>
                </div>
              </div>
            </Float>
          </FadeIn>
        </div>
      </section>

      {/* ───────── MARQUEE ───────── */}
      <div className="overflow-hidden bg-leaf-700 py-4 text-leaf-50">
        <div className="marquee flex w-max gap-10 whitespace-nowrap">
          {[...MARQUEE, ...MARQUEE].map((m, i) => (
            <span key={i} className="flex items-center gap-10 font-display text-lg italic">
              {m} <Leaf className="h-4 w-4 text-leaf-200" />
            </span>
          ))}
        </div>
      </div>

      {/* ───────── TRUST ───────── */}
      <section className="mx-auto max-w-7xl px-6 py-20">
        <Stagger className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {TRUST.map(({ icon: Icon, title, text }) => (
            <StaggerItem key={title} className="group rounded-3xl bg-white p-7 ring-1 ring-leaf-100 transition hover:-translate-y-1 hover:shadow-xl hover:shadow-leaf-600/10">
              <span className="grid h-14 w-14 place-items-center rounded-2xl bg-leaf-50 text-leaf-700 transition group-hover:bg-leaf-600 group-hover:text-white">
                <Icon className="h-6 w-6" />
              </span>
              <h3 className="mt-5 text-xl font-semibold">{title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-ink/65">{text}</p>
            </StaggerItem>
          ))}
        </Stagger>
      </section>

      {/* ───────── ABOUT TEASER ───────── */}
      <section className="mx-auto max-w-7xl px-6 pb-20">
        <div className="grid items-center gap-12 overflow-hidden rounded-[2.5rem] bg-leaf-900 p-8 text-leaf-50 md:p-14 lg:grid-cols-2">
          <FadeIn>
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-saffron-400">Why we exist</p>
            <h2 className="mt-4 text-4xl font-semibold leading-tight md:text-5xl">Food today is tainted. We chose a different path.</h2>
            <p className="mt-6 leading-relaxed text-leaf-100/80">
              So much of what we eat is grown or manufactured with chemicals and pesticides — and too often, inorganic products are sold
              disguised as organic. Maharshi Organics was created to deliver natural, pure and genuinely organic food, sourced only from
              people who share our commitment to being genuine, authentic and honest.
            </p>
            <Link href="/about" className="mt-8 inline-flex items-center gap-2 rounded-full bg-saffron-500 px-6 py-3.5 font-semibold text-white transition hover:bg-saffron-600">
              Read our story <ArrowRight className="h-4 w-4" />
            </Link>
          </FadeIn>
          <Stagger className="grid grid-cols-2 gap-4">
            {[
              { k: "100%", v: "Certified organic range" },
              { k: "0", v: "Chemical pesticides or fertilizers" },
              { k: "0", v: "Artificial preservatives" },
              { k: "1", v: "Promise — honesty, always" },
            ].map((s) => (
              <StaggerItem key={s.v} className="rounded-3xl bg-white/5 p-6 ring-1 ring-white/10">
                <p className="font-display text-5xl font-semibold text-leaf-200">{s.k}</p>
                <p className="mt-2 text-sm text-leaf-100/70">{s.v}</p>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      {/* ───────── PRODUCT SPOTLIGHT ───────── */}
      <section className="mx-auto max-w-7xl px-6 pb-20" aria-label="Product spotlight: Urja Revitalizing Salt">
        <ProductSpotlightClassic />
      </section>

      {/* ───────── HOW IT WORKS ───────── */}
      <section className="bg-leaf-50 py-20">
        <div className="mx-auto max-w-7xl px-6">
          <FadeIn className="mx-auto max-w-2xl text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-saffron-500">Easy ordering</p>
            <h2 className="mt-3 text-4xl font-semibold text-leaf-900 md:text-5xl">Three simple ways to shop</h2>
          </FadeIn>
          <Stagger className="mt-14 grid gap-6 md:grid-cols-3">
            {[
              { icon: WhatsAppIcon, n: "01", t: "WhatsApp us", d: "Send your list — we confirm availability and prices right away.", href: waLink(), cta: "Start chat" },
              { icon: Phone, n: "02", t: "Give us a call", d: "Speak to our team for product advice or a monthly grocery order.", href: SITE.phoneHref, cta: SITE.phoneDisplay },
              { icon: Truck, n: "03", t: "Visit the store", d: "Walk in near Bhasyam Circle, next to A2B, Rajajinagar.", href: SITE.mapsLink, cta: "Get directions" },
            ].map(({ icon: Icon, n, t, d, href, cta }) => (
              <StaggerItem key={n} className="relative rounded-3xl bg-white p-8 ring-1 ring-leaf-100">
                <span className="absolute right-6 top-6 font-display text-5xl font-semibold text-leaf-100">{n}</span>
                <span className="grid h-14 w-14 place-items-center rounded-2xl bg-leaf-600 text-white">
                  <Icon className="h-6 w-6" />
                </span>
                <h3 className="mt-6 text-2xl font-semibold">{t}</h3>
                <p className="mt-2 text-ink/65">{d}</p>
                <a href={href} target={href.startsWith("http") ? "_blank" : undefined} rel="noopener noreferrer" className="mt-6 inline-flex items-center gap-2 font-semibold text-leaf-700 hover:gap-3 transition-all">
                  {cta} <ArrowRight className="h-4 w-4" />
                </a>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      {/* ───────── VISIT / MAP ───────── */}
      <section className="mx-auto max-w-7xl px-6 py-20">
        <div className="grid overflow-hidden rounded-[2.5rem] bg-white ring-1 ring-leaf-100 lg:grid-cols-5">
          <FadeIn className="p-8 md:p-12 lg:col-span-2">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-saffron-500">Visit us</p>
            <h2 className="mt-3 text-4xl font-semibold text-leaf-900">Come say namaste.</h2>
            <address className="mt-6 space-y-1 not-italic text-ink/70">
              {SITE.addressLines.map((l) => (
                <p key={l}>{l}</p>
              ))}
            </address>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href={SITE.mapsLink} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-full bg-leaf-600 px-6 py-3 font-semibold text-white hover:bg-leaf-700">
                <MapPin className="h-4 w-4" /> Directions
              </a>
              <a href={SITE.phoneHref} className="inline-flex items-center gap-2 rounded-full px-6 py-3 font-semibold text-leaf-800 ring-1 ring-leaf-200 hover:ring-leaf-400">
                <Phone className="h-4 w-4" /> Call store
              </a>
            </div>
          </FadeIn>
          <div className="min-h-[340px] lg:col-span-3">
            <iframe title="Maharshi Organics on Google Maps" src={SITE.mapsEmbed} className="h-full min-h-[340px] w-full border-0" loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
          </div>
        </div>
      </section>

      {/* ───────── CTA ───────── */}
      <section className="px-6 pb-24">
        <FadeIn className="relative mx-auto max-w-5xl overflow-hidden rounded-[2.5rem] bg-gradient-to-br from-leaf-600 to-leaf-800 px-8 py-16 text-center text-white md:px-16">
          <FloatingLeaf className="absolute left-8 top-8 h-12 w-12 text-white/15" />
          <FloatingLeaf className="absolute bottom-8 right-10 h-16 w-16 text-white/10" delay={2} />
          <h2 className="relative text-4xl font-semibold md:text-5xl">Ready to eat the way nature intended?</h2>
          <p className="relative mx-auto mt-5 max-w-xl text-leaf-100/90">Send us your grocery list on WhatsApp and switch your kitchen to genuine organic today.</p>
          <div className="relative mt-8 flex flex-wrap justify-center gap-3">
            <a href={waLink("Hello! Here's my grocery list:")} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-full bg-white px-7 py-4 font-semibold text-leaf-800 transition hover:-translate-y-0.5">
              <WhatsAppIcon className="h-5 w-5 text-[#25D366]" /> Send my list
            </a>
            <a href={SITE.phoneHref} className="inline-flex items-center gap-2 rounded-full bg-saffron-500 px-7 py-4 font-semibold text-white transition hover:-translate-y-0.5 hover:bg-saffron-600">
              <Phone className="h-5 w-5" /> {SITE.phoneDisplay}
            </a>
          </div>
        </FadeIn>
      </section>
    </div>
  );
}
