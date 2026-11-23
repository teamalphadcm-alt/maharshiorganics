import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import CtaBand from "@/components/CtaBand";
import { FadeIn, Stagger, StaggerItem } from "@/components/client";
import { waLink } from "@/lib/site";

export const metadata: Metadata = {
  title: "Organic Living — Guides to Millets, Cold-Pressed Oils & More",
  description:
    "Simple guides to organic living from Maharshi Organics, Bengaluru: cooking with millets, choosing cold-pressed oils, Himalayan pink salt, jaggery vs sugar, and unpolished dals.",
  alternates: { canonical: "/organic-living" },
};

const GUIDES = [
  {
    id: "millets",
    emoji: "🌾",
    tag: "Grains",
    read: "4 min",
    title: "A beginner's guide to cooking with millets",
    intro: "Ragi, foxtail, little millet and kodo have fed Karnataka for generations. Here's how to bring them back to your table.",
    points: [
      "Rinse well and soak for 4–6 hours (or overnight) for softer texture and easier cooking.",
      "Use roughly 1 cup millet to 2–2.5 cups water — similar to rice, but check as you go.",
      "Start by replacing rice in one meal a day: foxtail millet bisi bele bath or little millet pongal work beautifully.",
      "Ragi flour makes classic mudde, rotti and a warm morning malt.",
    ],
    product: "Millets",
  },
  {
    id: "oils",
    emoji: "🫒",
    tag: "Oils",
    read: "3 min",
    title: "Cold-pressed vs refined oil: what's the difference?",
    intro: "Cold-pressed (wood-pressed or marachekku) oils are extracted slowly without high heat or chemical solvents.",
    points: [
      "Refined oils are typically processed with heat and chemicals, which strips flavour and aroma.",
      "Cold-pressed oils keep the natural smell, colour and taste of the seed.",
      "Use groundnut oil for everyday Indian cooking, sesame oil for tempering and pickles, and coconut oil for South Indian dishes.",
      "Store in a cool, dark place and use within a few months for best freshness.",
    ],
    product: "Cold-pressed oils",
  },
  {
    id: "salt",
    emoji: "🧂",
    tag: "Essentials",
    read: "2 min",
    title: "Himalayan pink rock salt in your everyday kitchen",
    intro: "Pink rock salt is mined and minimally processed, keeping its natural colour and trace minerals.",
    points: [
      "Use it exactly like regular salt in curries, salads and chutneys.",
      "It's unrefined and typically free of anti-caking agents.",
      "Table salt is usually iodised — if you switch fully, talk to your doctor about iodine intake.",
      "Coarse crystals can be ground fresh or dissolved in cooking water.",
    ],
    product: "Himalayan Pink Rock Salt",
  },
  {
    id: "jaggery",
    emoji: "🟤",
    tag: "Sweeteners",
    read: "3 min",
    title: "Jaggery vs white sugar: making the switch",
    intro: "Organic jaggery is made by boiling sugarcane juice without chemical clarifying agents.",
    points: [
      "White sugar goes through heavy refining; organic jaggery is far less processed.",
      "Jaggery powder dissolves easily in tea, coffee, payasam and baking.",
      "Its caramel-like flavour is perfect for traditional sweets like holige and chikki.",
      "It's still sugar — enjoy it in moderation, especially if you're managing blood sugar.",
    ],
    product: "Organic Jaggery",
  },
  {
    id: "dals",
    emoji: "🫘",
    tag: "Pulses",
    read: "2 min",
    title: "Why unpolished dals are worth it",
    intro: "Many dals are polished with oil, water or powders to look shiny. Unpolished dals skip that step.",
    points: [
      "Unpolished dals look slightly dull and uneven — that's a good sign.",
      "They retain their natural outer layer and earthy flavour.",
      "Soak for 30 minutes before cooking for quicker, softer results.",
      "Store in airtight containers with a dried red chilli to keep pests away naturally.",
    ],
    product: "Unpolished dals",
  },
  {
    id: "pantry",
    emoji: "🫙",
    tag: "Storage",
    read: "3 min",
    title: "Storing organic groceries the natural way",
    intro: "Without chemical preservatives, organic foods need a little care. These traditional tricks help.",
    points: [
      "Use glass, steel or food-grade airtight containers.",
      "Add bay leaves, neem leaves or dried red chillies to grains and dals.",
      "Keep flours in the fridge in Bengaluru's humid months, and buy in smaller batches.",
      "Sun-dry grains briefly if you notice moisture.",
    ],
    product: "your monthly groceries",
  },
];

export default function OrganicLivingPage() {
  return (
    <>
      <PageHero
        crumb="Organic Living"
        eyebrow="Guides & tips"
        title="Simple guides for organic living."
        subtitle="Practical tips to help you cook, store and enjoy organic food — from millets to cold-pressed oils."
      />

      {/* Index */}
      <section className="container-x py-16">
        <Stagger className="grid gap-x-16 border-t border-line md:grid-cols-2">
          {GUIDES.map((g, i) => (
            <StaggerItem key={g.id} className="border-b border-line">
              <Link href={`#${g.id}`} className="group flex items-baseline gap-5 py-6">
                <span className="font-display text-sm italic text-ink/35">{String(i + 1).padStart(2, "0")}</span>
                <span className="flex-1">
                  <span className="block text-[11px] uppercase tracking-[0.2em] text-saffron-600">
                    {g.tag} · {g.read} read
                  </span>
                  <span className="mt-2 block font-display text-xl leading-snug text-leaf-900 group-hover:text-leaf-600">{g.title}</span>
                </span>
              </Link>
            </StaggerItem>
          ))}
        </Stagger>
      </section>

      {/* Articles */}
      <section className="container-x max-w-3xl pb-20">
        {GUIDES.map((g) => (
          <FadeIn key={g.id}>
            <article id={g.id} className="scroll-mt-28 border-t border-line py-14">
              <p className="eyebrow">{g.tag}</p>
              <h2 className="mt-4 font-display text-3xl leading-snug text-leaf-900 md:text-4xl">{g.title}</h2>
              <p className="lead mt-6">{g.intro}</p>
              <ol className="mt-8 space-y-4">
                {g.points.map((pt, i) => (
                  <li key={pt} className="flex gap-4 leading-relaxed text-ink/70">
                    <span className="font-display text-sm italic text-saffron-600">{i + 1}.</span>
                    {pt}
                  </li>
                ))}
              </ol>
              <a
                href={waLink(`Hello! I read your guide "${g.title}". Can you help me with ${g.product}?`)}
                target="_blank"
                rel="noopener noreferrer"
                className="link-quiet mt-10"
              >
                Ask us about {g.product}
              </a>
            </article>
          </FadeIn>
        ))}
        <p className="border-t border-line pt-8 text-xs text-ink/45">These guides are for general information and are not a substitute for medical or dietary advice.</p>
      </section>

      <CtaBand title="Want a personalised organic grocery list?" text="Tell us about your family's needs and we'll suggest the right staples." />
    </>
  );
}
