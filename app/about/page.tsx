import type { Metadata } from "next";
import Image from "next/image";
import { Check, X } from "lucide-react";
import PageHero from "@/components/PageHero";
import CtaBand from "@/components/CtaBand";
import { FadeIn, Stagger, StaggerItem } from "@/components/client";

export const metadata: Metadata = {
  title: "About Us — Our Story & Mission",
  description:
    "The story of Sri Maharshi Organics, Rajajinagar, Bengaluru — why we started, what we stand for, and how we bring 100% certified, authentic organic food to your family.",
  alternates: { canonical: "/about" },
};

const VALUES = [
  { title: "Genuine", text: "Only products prepared to the norms of an organic certifying body reach our shelves." },
  { title: "Honest", text: "No inorganic products disguised as organic. What the label says is what you get." },
  { title: "Ethical", text: "We build alliances with farmers and producers who share our values." },
  { title: "Health-first", text: "Food that nourishes — free from chemical fertilizers, pesticides and preservatives." },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        crumb="About"
        eyebrow="Our story"
        title="Rooted in honesty, grown with care."
        subtitle="Sri Maharshi Organics helps people live better, healthier lives by providing 100% certified, authentic organic food."
      />

      {/* Story */}
      <section className="container-x section grid items-center gap-16 lg:grid-cols-[5fr_7fr]">
        <FadeIn className="mx-auto w-full max-w-sm">
          <div className="flex aspect-[4/5] items-center justify-center bg-leaf-50">
            <Image src="/logo.png" alt="Maharshi Organics emblem — a sage in meditation beneath a tree" width={315} height={465} className="h-[72%] w-auto object-contain" />
          </div>
        </FadeIn>
        <FadeIn delay={0.1}>
          <p className="eyebrow">Who we are</p>
          <h2 className="heading-lg mt-4">Food the way the sages ate it.</h2>
          <p className="mt-6 leading-relaxed text-ink/70">
            Sri Maharshi organic food refers to food items prepared according to the norms set by an organic certifying body. On an overall
            basis, it is food prepared and processed without using any chemical fertilizers, pesticides or chemical preservatives — which is
            good for health.
          </p>
          <p className="mt-4 leading-relaxed text-ink/70">
            One of the major challenges the entire globe faces today is that almost everything we come across is either tainted or manufactured
            unethically using chemicals and pesticides. It&apos;s one of the primary reasons people everywhere are suffering from acute health
            problems. After identifying the need for ethically sourced, high-quality products, Maharshi Organics took the initiative to
            understand and deliver natural, pure and organic items to our customers.
          </p>
          <blockquote className="mt-10 border-l-2 border-saffron-500 pl-6 font-display text-2xl italic leading-snug text-leaf-800">
            &ldquo;We created this brand so that people can consume genuine, organic products.&rdquo;
          </blockquote>
        </FadeIn>
      </section>

      {/* Mission / Vision */}
      <section className="bg-leaf-900 text-leaf-50">
        <Stagger className="container-x section grid gap-12 md:grid-cols-3 md:gap-0 md:divide-x md:divide-white/15">
          {[
            { t: "Our Objective", d: "To reach out to others who share our values and are looking for a pleasant, nutritional, organic food experience." },
            { t: "Our Vision", d: "A Bengaluru where every family can trust that the organic food on their plate is truly organic." },
            { t: "Our Alliances", d: "We partner only with people who share our commitment to being genuine, authentic and honest." },
          ].map(({ t, d }) => (
            <StaggerItem key={t} className="md:px-10 md:first:pl-0 md:last:pr-0">
              <h3 className="font-display text-2xl text-white">{t}</h3>
              <p className="mt-4 leading-relaxed text-leaf-100/70">{d}</p>
            </StaggerItem>
          ))}
        </Stagger>
      </section>

      {/* The problem we solve */}
      <section className="container-x section">
        <FadeIn className="max-w-3xl">
          <p className="eyebrow">Why we started</p>
          <h2 className="heading-lg mt-4">Standing against field malpractices</h2>
          <p className="mt-6 leading-relaxed text-ink/70">
            The growing demand for organic food has also brought malpractices — synthetic chemicals and pesticides used to boost yield, and
            inorganic products sold disguised as organic. That prompted us to seek alliances only with people who share our commitment.
          </p>
        </FadeIn>
        <div className="mt-14 grid gap-12 md:grid-cols-2 md:gap-16">
          <FadeIn>
            <h3 className="border-b border-line pb-4 text-xl text-ink/70">What we refuse</h3>
            <ul className="divide-y divide-line">
              {["Synthetic chemicals to boost yield", "Chemical pesticides on crops", "Artificial preservatives & colours", "Inorganic products labelled as organic"].map((x) => (
                <li key={x} className="flex gap-3 py-4 text-ink/65">
                  <X className="mt-0.5 h-4 w-4 shrink-0 text-ink/35" strokeWidth={1.5} />
                  {x}
                </li>
              ))}
            </ul>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h3 className="border-b border-line pb-4 text-xl text-leaf-900">What we stand for</h3>
            <ul className="divide-y divide-line">
              {["Certified organic sourcing", "Natural farming without chemical inputs", "Clean processing & honest packing", "Transparent answers to every question"].map((x) => (
                <li key={x} className="flex gap-3 py-4 text-ink/75">
                  <Check className="mt-0.5 h-4 w-4 shrink-0 text-leaf-600" strokeWidth={1.5} />
                  {x}
                </li>
              ))}
            </ul>
          </FadeIn>
        </div>
      </section>

      {/* Values */}
      <section className="border-t border-line bg-white">
        <div className="container-x section">
          <FadeIn>
            <p className="eyebrow">Our values</p>
            <h2 className="heading-lg mt-4">What guides every product</h2>
          </FadeIn>
          <Stagger className="mt-12 grid gap-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-0 lg:divide-x lg:divide-line">
            {VALUES.map(({ title, text }, i) => (
              <StaggerItem key={title} className="lg:px-8 lg:first:pl-0 lg:last:pr-0">
                <p className="font-display text-sm italic text-saffron-600">0{i + 1}</p>
                <h3 className="mt-3 text-xl text-leaf-900">{title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink/60">{text}</p>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      <CtaBand title="Visit our Rajajinagar store" text="Near Bhasyam Circle, next to A2B. Call or WhatsApp us before you drop by." />
    </>
  );
}
