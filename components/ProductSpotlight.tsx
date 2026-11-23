import Image from "next/image";
import { Flower2, Leaf, Smile, Sparkles } from "lucide-react";
import { FadeIn } from "@/components/client";
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

/**
 * New-launch spotlight for Urja Revitalizing Salt.
 * `full` is used on the home page; `compact` is the smaller banner on /products.
 */
export default function ProductSpotlight({ size = "full" }: { size?: "full" | "compact" }) {
  const compact = size === "compact";

  return (
    <div className={`grid items-center border border-line bg-white md:grid-cols-[5fr_7fr] ${compact ? "" : "lg:grid-cols-2"}`}>
      {/* Poster */}
      <div className={`flex h-full items-center justify-center border-b border-line bg-leaf-50 md:border-b-0 md:border-r ${compact ? "p-8" : "p-10 md:p-14"}`}>
        <div className={`relative aspect-[4/5] w-full ${compact ? "max-w-[220px]" : "max-w-sm"}`}>
          <Image
            src={URJA.image}
            alt={`${URJA.name} — ${URJA.type} by ${SITE.name}`}
            fill
            sizes={compact ? "220px" : "(min-width: 1024px) 384px, 80vw"}
            className="object-contain"
          />
        </div>
      </div>

      {/* Copy */}
      <FadeIn className={compact ? "p-8 md:p-10" : "p-8 md:p-14"}>
        <p className="eyebrow">New Launch · {URJA.type}</p>
        <h2 className={compact ? "mt-4 font-display text-3xl text-leaf-900 md:text-4xl" : "heading-lg mt-5"}>{URJA.name}</h2>
        <p className={`font-display italic text-saffron-600 ${compact ? "mt-2 text-lg" : "mt-3 text-xl md:text-2xl"}`}>{URJA.tagline}</p>

        <ul className={`grid grid-cols-2 gap-x-6 gap-y-3 ${compact ? "mt-6" : "mt-8"}`}>
          {URJA.benefits.map(({ icon: Icon, label }) => (
            <li key={label} className="flex items-center gap-2.5 text-sm text-ink/75">
              <Icon className="h-4 w-4 shrink-0 text-saffron-500" strokeWidth={1.5} />
              {label}
            </li>
          ))}
        </ul>

        <div className={compact ? "mt-6" : "mt-10"}>
          <p className="text-[11px] uppercase tracking-[0.22em] text-ink/45">Ingredients</p>
          <ul className="mt-3 grid grid-cols-2 border-l border-t border-line">
            {URJA.ingredients.map((ing) => (
              <li key={ing} className={`border-b border-r border-line text-sm leading-snug text-ink/70 ${compact ? "px-3 py-3" : "px-4 py-4"}`}>
                {ing}
              </li>
            ))}
          </ul>
        </div>

        <div className={`flex flex-wrap gap-3 ${compact ? "mt-6" : "mt-10"}`}>
          <a href={waLink(URJA.orderMessage)} target="_blank" rel="noopener noreferrer" className="btn-primary">
            Order on WhatsApp
          </a>
          <a href={SITE.phoneHref} className="btn-secondary">
            Call to order
          </a>
        </div>
        <p className="mt-5 text-xs text-ink/45">Marketed by {SITE.name}</p>
      </FadeIn>
    </div>
  );
}
