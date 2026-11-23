import Image from "next/image";
import { Flower2, Leaf, Phone, Smile, Sparkles } from "lucide-react";
import { FadeIn, Float, Stagger, StaggerItem } from "@/components/client";
import { WhatsAppIcon } from "@/components/SiteChrome";
import { SITE, waLink } from "@/lib/site";

const URJA = {
  name: "Urja Revitalizing Salt",
  type: "Artisanal Bath Salts",
  tagline: "From Negative to Positive Energy",
  image: "/products/urja-revitalizing-salt.png",
  benefits: [
    { icon: Leaf, label: "100% Natural" },
    { icon: Flower2, label: "Relaxes Mind & Body" },
    { icon: Sparkles, label: "Detox & Rejuvenate" },
    { icon: Smile, label: "Mood Upliftment" },
  ],
  ingredients: ["Himalayan Pink Rock Salt", "Epsom Salt", "Dried Flower Petals (Rose, Chamomile) & Herbs", "Essential Special Blend Oil"],
  orderMessage: "Hello Maharshi Organics! I'd like to order Urja Revitalizing Salt (Artisanal Bath Salts).",
};

/** Original (classic) Urja spotlight, used on the home page. */
export default function ProductSpotlightClassic() {
  return (
    <div className="relative overflow-hidden rounded-[2.5rem] bg-gradient-to-br from-cream via-white to-amber-50 p-8 ring-1 ring-amber-200/70 md:p-14">
      <div className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-amber-400/15 blur-3xl" aria-hidden="true" />
      <div className="pointer-events-none absolute -bottom-24 -left-24 h-72 w-72 rounded-full bg-leaf-200/40 blur-3xl" aria-hidden="true" />

      <div className="relative grid items-center gap-12 lg:grid-cols-2">
        {/* Poster */}
        <FadeIn className="mx-auto w-full max-w-md">
          <Float distance={10}>
            <div className="relative aspect-[4/5] overflow-hidden rounded-3xl bg-white shadow-[0_30px_60px_-25px_rgba(120,80,10,0.45)] ring-1 ring-amber-200">
              <Image src={URJA.image} alt={`${URJA.name} — ${URJA.type} by ${SITE.name}`} fill sizes="(min-width: 1024px) 448px, 90vw" className="object-contain" />
            </div>
          </Float>
        </FadeIn>

        {/* Copy */}
        <div>
          <FadeIn>
            <p className="inline-flex items-center gap-2 rounded-full bg-amber-400/15 px-3.5 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-amber-700 ring-1 ring-amber-400/40">
              <Sparkles className="h-3.5 w-3.5" /> New Launch · {URJA.type}
            </p>
            <h2 className="mt-5 text-4xl font-semibold leading-tight text-leaf-900 md:text-5xl">{URJA.name}</h2>
            <p className="mt-3 font-display text-2xl italic text-amber-600">&ldquo;{URJA.tagline}&rdquo;</p>
          </FadeIn>

          <Stagger className="mt-7 flex flex-wrap gap-2">
            {URJA.benefits.map(({ icon: Icon, label }) => (
              <StaggerItem key={label}>
                <span className="inline-flex items-center gap-2 rounded-full bg-white px-3.5 py-2 text-sm font-medium text-leaf-800 shadow-sm ring-1 ring-leaf-100">
                  <span className="grid h-6 w-6 place-items-center rounded-full bg-leaf-50 text-leaf-700">
                    <Icon className="h-3.5 w-3.5" />
                  </span>
                  {label}
                </span>
              </StaggerItem>
            ))}
          </Stagger>

          <FadeIn delay={0.1}>
            <p className="mt-9 text-sm font-semibold uppercase tracking-[0.2em] text-saffron-500">Ingredients</p>
          </FadeIn>
          <Stagger className="mt-3 grid grid-cols-2 gap-3">
            {URJA.ingredients.map((ing) => (
              <StaggerItem key={ing} className="flex items-start gap-2.5 rounded-2xl bg-white/80 p-4 ring-1 ring-amber-200/60">
                <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-amber-500" aria-hidden="true" />
                <span className="text-sm leading-snug text-ink/75">{ing}</span>
              </StaggerItem>
            ))}
          </Stagger>

          <FadeIn delay={0.2}>
            <div className="mt-9 flex flex-wrap gap-3">
              <a
                href={waLink(URJA.orderMessage)}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-leaf-600 px-7 py-4 font-semibold text-white shadow-xl shadow-leaf-600/25 transition hover:-translate-y-0.5 hover:bg-leaf-700"
              >
                <WhatsAppIcon className="h-5 w-5" /> Order on WhatsApp
              </a>
              <a
                href={SITE.phoneHref}
                className="inline-flex items-center gap-2 rounded-full bg-white px-7 py-4 font-semibold text-leaf-800 ring-1 ring-amber-400/60 transition hover:-translate-y-0.5 hover:ring-amber-500"
              >
                <Phone className="h-5 w-5 text-amber-600" /> Call to order
              </a>
            </div>
            <p className="mt-4 text-xs text-ink/50">Marketed by {SITE.name}</p>
          </FadeIn>
        </div>
      </div>
    </div>
  );
}
