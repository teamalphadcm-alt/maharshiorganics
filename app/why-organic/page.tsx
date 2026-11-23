import type { Metadata } from "next";
import { Bird, Droplets, Heart, Mountain, Users, Wheat } from "lucide-react";
import PageHero from "@/components/PageHero";
import CtaBand from "@/components/CtaBand";
import { FadeIn, Stagger, StaggerItem } from "@/components/client";

export const metadata: Metadata = {
  title: "Why Organic? Benefits of Organic Food",
  description:
    "Why choose organic food? Learn how organic farming avoids chemical fertilizers, pesticides and preservatives — and why it's better for your family, farmers and the soil. Maharshi Organics, Bengaluru.",
  alternates: { canonical: "/why-organic" },
};

const BENEFITS = [
  { icon: Heart, t: "Better for your family", d: "Food grown without chemical pesticides and processed without chemical preservatives means fewer synthetic residues on your plate." },
  { icon: Wheat, t: "Real taste & aroma", d: "Unpolished grains, wood-pressed oils and freshly ground spices taste the way food is supposed to." },
  { icon: Mountain, t: "Healthier soil", d: "Organic practices build soil life instead of depleting it with synthetic fertilizers." },
  { icon: Droplets, t: "Cleaner water", d: "Fewer chemical run-offs into wells, lakes and rivers that communities depend on." },
  { icon: Bird, t: "Biodiversity", d: "Farms free of harsh pesticides support bees, birds and beneficial insects." },
  { icon: Users, t: "Fair to farmers", d: "Ethical sourcing supports growers who choose the harder, honest way of farming." },
];

const COMPARE = [
  { label: "Fertilizers", organic: "Natural compost & manure", conv: "Synthetic chemical fertilizers" },
  { label: "Pest control", organic: "Natural, biological methods", conv: "Chemical pesticides" },
  { label: "Preservatives", organic: "None added", conv: "Often chemical preservatives" },
  { label: "Processing", organic: "Minimal — unpolished, cold-pressed, stone-ground", conv: "Heavy polishing & refining" },
  { label: "Certification", organic: "Prepared to certifying-body norms", conv: "Not required" },
  { label: "Soil impact", organic: "Builds long-term fertility", conv: "Can deplete over time" },
];

export default function WhyOrganicPage() {
  return (
    <>
      <PageHero
        crumb="Why Organic"
        eyebrow="Choose better"
        title="Why organic matters more than ever."
        subtitle="When everything around us is tainted with chemicals and pesticides, choosing organic is one of the simplest ways to protect your family's health."
      />

      <section className="container-x section">
        <FadeIn className="max-w-2xl">
          <p className="eyebrow">The benefits</p>
          <h2 className="heading-lg mt-4">Good for you. Good for the earth.</h2>
        </FadeIn>
        <Stagger className="mt-12 grid border-l border-t border-line sm:grid-cols-2 lg:grid-cols-3">
          {BENEFITS.map(({ icon: Icon, t, d }) => (
            <StaggerItem key={t} className="border-b border-r border-line p-8">
              <Icon className="h-5 w-5 text-saffron-500" strokeWidth={1.5} />
              <h3 className="mt-5 text-xl text-leaf-900">{t}</h3>
              <p className="mt-2 text-sm leading-relaxed text-ink/60">{d}</p>
            </StaggerItem>
          ))}
        </Stagger>
      </section>

      {/* Comparison */}
      <section className="border-y border-line bg-white">
        <div className="container-x section max-w-4xl">
          <FadeIn>
            <p className="eyebrow">Side by side</p>
            <h2 className="heading-lg mt-4">Organic vs conventional</h2>
          </FadeIn>
          <FadeIn delay={0.1} className="mt-12 overflow-x-auto">
            <table className="w-full min-w-[520px] text-left text-sm md:text-base">
              <thead>
                <tr className="border-b border-leaf-900 text-[11px] uppercase tracking-[0.2em]">
                  <th className="py-4 pr-4 font-medium text-ink/45" scope="col"><span className="sr-only">Aspect</span></th>
                  <th className="py-4 pr-4 font-medium text-leaf-800" scope="col">Organic</th>
                  <th className="py-4 font-medium text-ink/45" scope="col">Conventional</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-line">
                {COMPARE.map((r) => (
                  <tr key={r.label}>
                    <th scope="row" className="py-5 pr-4 font-display text-lg font-normal text-leaf-900">{r.label}</th>
                    <td className="py-5 pr-4 text-ink/80">{r.organic}</td>
                    <td className="py-5 text-ink/45">{r.conv}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </FadeIn>
        </div>
      </section>

      {/* Simple swaps */}
      <section className="container-x section">
        <FadeIn className="max-w-2xl">
          <p className="eyebrow">Start small</p>
          <h2 className="heading-lg mt-4">5 easy kitchen swaps</h2>
          <p className="mt-4 text-ink/60">You don&apos;t have to change everything at once. Begin with the staples you use every single day.</p>
        </FadeIn>
        <Stagger className="mt-12 grid border-l border-t border-line sm:grid-cols-2 md:grid-cols-5">
          {[
            { from: "White sugar", to: "Organic jaggery" },
            { from: "Refined oil", to: "Cold-pressed oil" },
            { from: "Iodised table salt", to: "Himalayan pink salt" },
            { from: "Polished white rice", to: "Millets & red rice" },
            { from: "Polished dals", to: "Unpolished dals" },
          ].map((s, i) => (
            <StaggerItem key={s.from} className="border-b border-r border-line p-6">
              <span className="font-display text-sm italic text-saffron-600">0{i + 1}</span>
              <p className="mt-6 text-sm text-ink/40 line-through">{s.from}</p>
              <p className="mt-1 font-display text-xl text-leaf-900">{s.to}</p>
            </StaggerItem>
          ))}
        </Stagger>
        <FadeIn className="mt-10 text-xs text-ink/45">
          This information is general and not medical advice. Please consult your doctor for specific dietary needs.
        </FadeIn>
      </section>

      <CtaBand title="Make your first swap today" text="Ask us which organic staples suit your family best — we'll guide you." />
    </>
  );
}
