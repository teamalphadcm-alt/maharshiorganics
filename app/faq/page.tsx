import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import CtaBand from "@/components/CtaBand";
import { FadeIn, FaqAccordion } from "@/components/client";
import { SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: "FAQ — Frequently Asked Questions",
  description:
    "Answers to common questions about Maharshi Organics, Rajajinagar, Bengaluru: certification, ordering on WhatsApp, store location, products, pricing and storage.",
  alternates: { canonical: "/faq" },
};

const GROUPS: { title: string; items: { q: string; a: string }[] }[] = [
  {
    title: "About our products",
    items: [
      { q: "Are all your products certified organic?", a: "Yes. Sri Maharshi Organics provides 100% certified, authentic organic food — items prepared according to the norms set by an organic certifying body." },
      { q: "What does 'organic' mean at Maharshi Organics?", a: "Our food is prepared and processed without chemical fertilizers, pesticides or chemical preservatives." },
      { q: "What products do you sell?", a: "Millets and grains, unpolished dals, cold-pressed oils, spices, organic jaggery and honey, Himalayan pink rock salt, stone-ground flours, dry fruits and more. Visit the Products page or ask us on WhatsApp for the full list." },
      { q: "How do I know your products are genuine?", a: "We source only through alliances with people who share our commitment to being genuine, authentic and honest, and we're always happy to explain where a product comes from. See our 'Our Promise' page for tips on spotting real organic food." },
    ],
  },
  {
    title: "Ordering & pricing",
    items: [
      { q: "How can I order?", a: `The easiest way is to send your list on WhatsApp. You can also call us on ${SITE.phoneDisplay} or visit our store in Rajajinagar.` },
      { q: "Why aren't prices listed on the website?", a: "Organic produce prices change with harvests and seasons. Message us on WhatsApp for today's prices and stock." },
      { q: "Do you take monthly grocery orders?", a: "Yes — send us your regular monthly list on WhatsApp and we'll keep it ready for you." },
      { q: "Do you deliver?", a: "Please call or WhatsApp us to check delivery options for your area in Bengaluru." },
    ],
  },
  {
    title: "Store & visits",
    items: [
      { q: "Where is your store?", a: `${SITE.addressLines.join(", ")}. We're near Bhasyam Circle, right next to A2B.` },
      { q: "What are your store timings?", a: `Please call us on ${SITE.phoneDisplay} to confirm today's timings before you visit.` },
      { q: "Is there parking near the store?", a: "Street parking is generally available around Bhasyam Circle. Call us if you need directions." },
    ],
  },
  {
    title: "Storage & usage",
    items: [
      { q: "How should I store organic groceries?", a: "Since there are no chemical preservatives, store grains, dals and flours in airtight containers in a cool, dry place. Adding bay leaves or dried red chillies helps keep pests away naturally." },
      { q: "Why do your dals look less shiny than supermarket dals?", a: "Our dals are unpolished. Shiny dals are often polished with oil, water or powders — a natural, slightly dull look is a good sign." },
    ],
  },
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: GROUPS.flatMap((g) => g.items).map((it) => ({
    "@type": "Question",
    name: it.q,
    acceptedAnswer: { "@type": "Answer", text: it.a },
  })),
};

export default function FaqPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <PageHero
        crumb="FAQ"
        eyebrow="Questions answered"
        title="Frequently asked questions."
        subtitle="Everything you need to know about our products, ordering and visiting our Rajajinagar store."
      />

      <section className="container-x section grid gap-14 lg:grid-cols-[240px_1fr] lg:gap-20">
        <aside className="lg:sticky lg:top-28 lg:self-start">
          <FadeIn>
            <nav className="hidden space-y-3 lg:block" aria-label="FAQ sections">
              {GROUPS.map((g) => (
                <a key={g.title} href={`#${g.title.replace(/\W+/g, "-").toLowerCase()}`} className="block text-sm text-ink/55 transition-colors hover:text-leaf-900">
                  {g.title}
                </a>
              ))}
            </nav>
            <div className="border-line lg:mt-10 lg:border-t lg:pt-8">
              <p className="font-display text-xl text-leaf-900">Still have a question?</p>
              <p className="mt-2 text-sm text-ink/60">Call us and we&apos;ll answer right away.</p>
              <a href={SITE.phoneHref} className="link-quiet mt-4">{SITE.phoneDisplay}</a>
            </div>
          </FadeIn>
        </aside>

        <div className="space-y-16">
          {GROUPS.map((g) => (
            <FadeIn key={g.title}>
              <div id={g.title.replace(/\W+/g, "-").toLowerCase()} className="scroll-mt-28">
                <h2 className="mb-6 font-display text-3xl text-leaf-900">{g.title}</h2>
                <FaqAccordion items={g.items} />
              </div>
            </FadeIn>
          ))}
        </div>
      </section>

      <CtaBand />
    </>
  );
}
