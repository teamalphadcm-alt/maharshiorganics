import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import CtaBand from "@/components/CtaBand";
import ProductSpotlight from "@/components/ProductSpotlight";
import { ProductBrowser, Stagger, StaggerItem } from "@/components/client";
import { PRODUCTS, SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: "Organic Products — Millets, Oils, Dals, Spices & More",
  description:
    "Browse certified organic millets, unpolished dals, cold-pressed oils, spices, jaggery, honey, Himalayan pink rock salt, flours, dry fruits and bath salts — including our new Urja Revitalizing Salt, a Himalayan pink salt bath blend — at Maharshi Organics, Rajajinagar, Bengaluru.",
  alternates: { canonical: "/products" },
};

const itemList = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "Maharshi Organics Products",
  itemListElement: PRODUCTS.map((p, i) => ({
    "@type": "ListItem",
    position: i + 1,
    item: { "@type": "Product", name: p.name, description: p.desc, category: p.category, brand: { "@type": "Brand", name: SITE.name } },
  })),
};

export default function ProductsPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(itemList) }} />
      <PageHero
        crumb="Products"
        eyebrow="Our range"
        title="Certified organic, shelf to kitchen."
        subtitle="Millets, dals, cold-pressed oils, spices, sweeteners and more — all grown and processed without chemical fertilizers, pesticides or preservatives."
      />

      <section className="container-x pt-16" aria-label="New launch: Urja Revitalizing Salt">
        <ProductSpotlight size="compact" />
      </section>

      <section className="container-x py-16 md:py-20">
        <ProductBrowser />
      </section>

      <section className="container-x pb-20">
        <Stagger className="grid gap-10 border-t border-line pt-12 md:grid-cols-3 md:gap-0 md:divide-x md:divide-line">
          {[
            { t: "Even more in store", d: "Our Rajajinagar shop stocks a wider range than we list online — just ask." },
            { t: "Monthly grocery lists", d: "Send your regular list on WhatsApp and we'll keep it ready for you." },
            { t: "Prices on request", d: "Prices change with harvests, so message us for today's rates and stock." },
          ].map(({ t, d }) => (
            <StaggerItem key={t} className="md:px-8 md:first:pl-0 md:last:pr-0">
              <h3 className="text-xl text-leaf-900">{t}</h3>
              <p className="mt-2 text-sm leading-relaxed text-ink/60">{d}</p>
            </StaggerItem>
          ))}
        </Stagger>
      </section>

      <CtaBand title="Looking for something specific?" text="Tell us what you need — we'll check availability and share the price on WhatsApp." />
    </>
  );
}
