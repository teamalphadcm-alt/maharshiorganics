import type { Metadata } from "next";
import { Check, ClipboardCheck, Handshake, PackageCheck, Store, Tractor } from "lucide-react";
import PageHero from "@/components/PageHero";
import CtaBand from "@/components/CtaBand";
import { FadeIn, Stagger, StaggerItem } from "@/components/client";

export const metadata: Metadata = {
  title: "Our Promise — Certified Sourcing & Quality",
  description:
    "How Maharshi Organics sources certified organic food: trusted farmer alliances, certification checks, clean processing and honest packing. Learn how to spot genuine organic products.",
  alternates: { canonical: "/our-promise" },
};

const JOURNEY = [
  { icon: Handshake, t: "Trusted alliances", d: "We partner only with farmers and producers who share our commitment to being genuine, authentic and honest." },
  { icon: Tractor, t: "Chemical-free farming", d: "Crops are grown without chemical fertilizers or pesticides, following organic norms." },
  { icon: ClipboardCheck, t: "Certification check", d: "We stock products prepared according to the norms set by an organic certifying body." },
  { icon: PackageCheck, t: "Clean processing", d: "Minimal processing with no chemical preservatives — unpolished, cold-pressed, stone-ground." },
  { icon: Store, t: "On our shelves", d: "Carefully stored and packed at our Rajajinagar store, ready for your kitchen." },
];

const TIPS = [
  { t: "Look for certification", d: "Genuine organic products carry the logo of a recognised organic certification on the pack. Ask to see it." },
  { t: "Check the colour", d: "Turmeric that's unusually bright or dals that look glossy may be coloured or polished. Real organic produce looks natural." },
  { t: "Smell the oil", d: "Cold-pressed oils carry the strong, natural aroma of the seed. Refined oils smell of almost nothing." },
  { t: "Know your seller", d: "Buy from a store that can tell you where its products come from — and is happy to answer questions." },
];

export default function OurPromisePage() {
  return (
    <>
      <PageHero
        crumb="Our Promise"
        eyebrow="Quality & sourcing"
        title="Genuine. Authentic. Honest."
        subtitle="Field malpractices are common in the organic market. Here's exactly how we make sure what you buy from us is the real thing."
      />

      {/* Journey */}
      <section className="container-x section">
        <div className="grid gap-12 lg:grid-cols-[4fr_8fr] lg:gap-20">
          <FadeIn className="lg:sticky lg:top-28 lg:self-start">
            <p className="eyebrow">Farm to shelf</p>
            <h2 className="heading-lg mt-4">The journey of every product</h2>
          </FadeIn>
          <Stagger className="border-t border-line">
            {JOURNEY.map(({ t, d }, i) => (
              <StaggerItem key={t} className="grid grid-cols-[3rem_1fr] gap-4 border-b border-line py-8 md:grid-cols-[5rem_1fr]">
                <span className="font-display text-3xl font-light text-saffron-500">{i + 1}</span>
                <div>
                  <h3 className="text-2xl text-leaf-900">{t}</h3>
                  <p className="mt-2 leading-relaxed text-ink/60">{d}</p>
                </div>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      {/* Guarantee band */}
      <section className="bg-leaf-900 text-leaf-50">
        <div className="container-x section grid items-center gap-12 lg:grid-cols-3">
          <FadeIn>
            <p className="eyebrow !text-saffron-400">Our word</p>
            <h2 className="mt-4 font-display text-3xl leading-tight text-white md:text-[2.6rem]">The Maharshi guarantee</h2>
          </FadeIn>
          <Stagger className="grid border-l border-t border-white/15 sm:grid-cols-2 lg:col-span-2">
            {[
              "100% certified organic products",
              "No chemical fertilizers or pesticides",
              "No chemical preservatives",
              "Never inorganic sold as organic",
            ].map((g) => (
              <StaggerItem key={g} className="flex items-center gap-3 border-b border-r border-white/15 p-6">
                <Check className="h-4 w-4 shrink-0 text-saffron-400" strokeWidth={1.5} />
                <span>{g}</span>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      {/* How to spot genuine organic */}
      <section className="container-x section">
        <FadeIn className="max-w-2xl">
          <p className="eyebrow">Buyer&apos;s guide</p>
          <h2 className="heading-lg mt-4">How to spot genuine organic food</h2>
          <p className="mt-4 text-ink/60">Wherever you shop, these simple checks help you avoid products disguised as organic.</p>
        </FadeIn>
        <Stagger className="mt-12 grid gap-x-16 border-t border-line md:grid-cols-2">
          {TIPS.map((tip, i) => (
            <StaggerItem key={tip.t} className="flex gap-5 border-b border-line py-8">
              <span className="font-display text-sm italic text-saffron-600">0{i + 1}</span>
              <div>
                <h3 className="text-xl text-leaf-900">{tip.t}</h3>
                <p className="mt-2 leading-relaxed text-ink/60">{tip.d}</p>
              </div>
            </StaggerItem>
          ))}
        </Stagger>
      </section>

      <CtaBand title="Ask us anything about our sourcing" text="We're proud of where our products come from. Call or WhatsApp — we'll tell you." />
    </>
  );
}
